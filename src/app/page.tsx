
import { client } from '@/lib/sanity/client';
import { HOMEPAGE_QUERY } from '@/lib/sanity/queries/homepage';
import { PortableText } from '@portabletext/react';
import PageBackground from '@/components/layout/PageBackground';
import { Button } from '@/components/ui/Button';
import VideoSection from '@/components/blocks/videoSections';
import ClientGallery from '@/components/blocks/ClientGallery';
import CtaHomeSection from '@/components/blocks/CtaHomeSection';
import ConceptSection from '@/components/blocks/ConceptSection';
import FeaturedItemsSection from '@/components/blocks/FeaturedItemsSection';
import { getHeading } from '@/lib/utils/headingMap';
import { generateHomeMetadata } from '@/lib/seo/getHomePageMetadata';
import { getFeaturedPosts, getFeaturedShowcases } from "@/lib/sanity/queries/featured";

export const generateMetadata = generateHomeMetadata;

export default async function HomePage() {
    const data = await client.fetch(HOMEPAGE_QUERY);

    if (!data || !Array.isArray(data.content)) {
        return <p>Geen content beschikbaar.</p>;
    }

    const content = data.content;

    return (
        <main>
            {await Promise.all(
                content.map(async (block: any, index: number) => {
                    if (!block || typeof block !== 'object') return null;

                    switch (block._type) {
                        case 'heroSection': {
                            const Heading = getHeading(block.headingLevel) ?? getHeading('h1');
                            const nextBlock = content[index + 1];
                            const isNextVideo = nextBlock?._type === 'videoSection';

                            return (
                                <section key={index}>
                                    <PageBackground
                                        backgroundUrl={block.backgroundImage?.asset?.url}
                                        gradientOpacity={block.gradientOpacity ?? 0.7}
                                        overlay={block.overlay ?? 'teal'}
                                    >
                                        <div className="text-white text-center px-4">
                                            <div className="max-w-5xl mx-auto">
                                                <Heading className="mb-6">{block.title}</Heading>

                                                {block.subtitle && (
                                                    <div className="prose prose-invert mx-auto mb-6">
                                                        <PortableText value={block.subtitle} />
                                                    </div>
                                                )}

                                                {block.cta?.label && block.cta?.href && (
                                                    <Button
                                                        className="mt-8"
                                                        radius="full"
                                                        variant="primary"
                                                        size="lg"
                                                        href={block.cta.href}
                                                    >
                                                        {block.cta.label}
                                                    </Button>
                                                )}
                                            </div>
                                        </div>

                                        {isNextVideo && (
                                            <VideoSection
                                                youtubeId={nextBlock.youtubeId}
                                                title={nextBlock.title}
                                                thumbnailUrl={nextBlock.thumbnailUrl}
                                                backgroundUrl={nextBlock.backgroundUrl}
                                                minHeight={nextBlock.minHeight}
                                            />
                                        )}
                                    </PageBackground>
                                </section>
                            );
                        }

                        case 'videoSection': {
                            const prevBlock = content[index - 1];
                            if (prevBlock?._type === 'heroSection') return null;

                            return (
                                <VideoSection
                                    key={index}
                                    youtubeId={block.youtubeId}
                                    title={block.title}
                                    thumbnailUrl={block.thumbnailUrl}
                                    backgroundUrl={block.backgroundUrl}
                                    minHeight={block.minHeight}
                                />
                            );
                        }

                        case 'clientGallery':
                            return (
                                <section key={index}>
                                    <ClientGallery logos={block.logos} />
                                </section>
                            );

                        case 'ctaTabSection':
                            return (
                                <section key={index}>
                                    <CtaHomeSection
                                        title={block.title}
                                        subtitle={block.subtitle}
                                        tabs={block.tabs}
                                    />
                                </section>
                            );

                        case 'conceptSection':
                            return (
                                <section key={index}>
                                    <ConceptSection data={block} />
                                </section>
                            );

                        case "featuredSection": {
                            const items =
                                block.type === "blog"
                                    ? await getFeaturedPosts(block.limit)
                                    : await getFeaturedShowcases(block.limit);

                            return (
                                <section key={index}>
                                    <FeaturedItemsSection
                                        title={block.title}
                                        type={block.type}
                                        items={items}
                                    />
                                </section>
                            );
                        }

                        default:
                            return null;
                    }
                })
            )}
        </main>
    );
}

import { client } from '@/lib/sanity/client'
import { HOMEPAGE_QUERY } from '@/lib/sanity/queries/homepage'
import { PortableText } from '@portabletext/react'
import PageBackground from '@/components/layout/PageBackground'
import { H1, H2, H3, H4, H5 } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'
import VideoSection from '@/components/sections/videoSections'
import { generateHomeMetadata } from "@/lib/seo/getHomePageMetadata";


export const metadata = await generateHomeMetadata();

// 📚 Heading component mapping
const headingMap = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
}

// ✅ Main homepage render
export default async function HomePage() {
    const data = await client.fetch(HOMEPAGE_QUERY)

    if (!data || !Array.isArray(data.content)) {
        return <p>Geen content beschikbaar.</p>
    }

    const content = [...data.content]

    return (
        <div>
            {content.map((block: any, index: number) => {
                if (!block || typeof block !== 'object') return null

                if (block._type === 'heroSection') {
                    const Heading = headingMap[block.headingLevel as keyof typeof headingMap] ?? H1
                    const nextBlock = content[index + 1]
                    const isNextVideo = nextBlock?._type === 'videoSection'

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
                    )
                }

                if (
                    block._type === 'videoSection' &&
                    content[index - 1]?._type === 'heroSection'
                ) {
                    return null
                }

                return null
            })}
        </div>
    )
}

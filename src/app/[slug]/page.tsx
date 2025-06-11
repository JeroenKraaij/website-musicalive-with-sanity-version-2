import { notFound } from "next/navigation";
import { client } from "@/lib/sanity/client";
import { H1, H2, H3, H4, H5 } from "@/components/ui/Heading";
import PageBackground from "@/components/layout/PageBackground";
import { Button } from "@/components/ui/Button";
import { pageBySlugQuery, allPagesQuery } from "@/lib/sanity/queries/page";
import { PortableText } from "@portabletext/react";
import { getPageMetadata } from "@/lib/seo/getPageMetadata";

export async function generateStaticParams() {
    const slugs: { slug: string }[] = await client.fetch(allPagesQuery);
    return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
    return getPageMetadata(slug);
}

const headingMap = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
};

export default async function Page({ params }: { params: { slug: string } }) {
    const page = await client.fetch(pageBySlugQuery, { slug: params.slug });

    if (!page) return notFound();

    return (
        <main>
            {page.content?.map((block: any, index: number) => {
                if (!block || typeof block !== "object") return null;

                switch (block._type) {
                    case "heroSection": {
                        const Heading =
                            headingMap[block.headingLevel as keyof typeof headingMap] ?? H1;

                        return (
                            <section key={index}>
                                <PageBackground
                                    backgroundUrl={block.backgroundImage?.asset?.url}
                                    gradientOpacity={block.gradientOpacity ?? 0.7}
                                    overlay={block.overlay ?? "teal"}
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
                                </PageBackground>
                            </section>
                        );
                    }
                }
            })}
        </main>
    );
}
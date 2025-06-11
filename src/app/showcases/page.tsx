
import { client } from "@/lib/sanity/client";
import { allShowcasesQuery } from "@/lib/sanity/queries/showcase";
import { pageBySlugQuery } from "@/lib/sanity/queries/page";
import { getPageMetadata } from "@/lib/seo/getPageMetadata";
import ShowcaseList from "@/components/layout/ShowcaseList";
import PageBackground from "@/components/layout/PageBackground";
import { PortableText } from "@portabletext/react";
import { H1 } from "@/components/ui/Heading";
import { notFound } from "next/navigation";

// Metadata export
export async function generateMetadata() {
    return await getPageMetadata("showcases");
}

export default async function ShowcaseIndexPage() {
    const [page, showcases] = await Promise.all([
        client.fetch(pageBySlugQuery, { slug: "showcases" }),
        client.fetch(allShowcasesQuery),
    ]);

    if (!page) return notFound();

    return (
        <main>
            {/* Render Sanity content (bijv. hero block) */}
            {page.content?.map((block: any, index: number) => {
                if (!block || typeof block !== "object") return null;

                switch (block._type) {
                    case "heroSection": {
                        return (
                            <PageBackground
                                key={index}
                                backgroundUrl={block.backgroundImage?.asset?.url}
                                gradientOpacity={block.gradientOpacity ?? 0.7}
                                overlay={block.overlay ?? "teal"}
                            >
                                <div className="text-center text-white px-4 max-w-5xl mx-auto">
                                    <H1 className="mb-4">{block.title}</H1>
                                    {block.subtitle && (
                                        <div className="prose prose-invert">
                                            <PortableText value={block.subtitle} />
                                        </div>
                                    )}
                                </div>
                            </PageBackground>
                        );
                    }

                    default:
                        return null;
                }
            })}

            {/* Showcase lijst */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <ShowcaseList showcases={showcases} />
                </div>
            </section>
        </main>
    );
}

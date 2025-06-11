
// app/blogs/page.tsx
import { client } from "@/lib/sanity/client";
import { allPostsQuery } from "@/lib/sanity/queries/post";
import { pageBySlugQuery } from "@/lib/sanity/queries/page";
import { getPageMetadata } from "@/lib/seo/getPageMetadata";
import BlogList from "@/components/layout/BlogList";
import { PortableText } from "@portabletext/react";
import PageBackground from "@/components/layout/PageBackground";
import { H1 } from "@/components/ui/Heading";
import { notFound } from "next/navigation";

export const metadata = await getPageMetadata("blogs");

export default async function BlogIndexPage() {
    const page = await client.fetch(pageBySlugQuery, { slug: "blogs" });
    const posts = await client.fetch(allPostsQuery);

    if (!page) return notFound();

    return (
        <main>
            {/* Sanity-pagina content tonen */}
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

            {/* Blog overzicht tonen */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <BlogList posts={posts} />
                </div>
            </section>
        </main>
    );
}

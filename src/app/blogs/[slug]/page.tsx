
import { client } from "@/lib/sanity/client";
import { postBySlugQuery } from "@/lib/sanity/queries/post";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const data = await client.fetch(postBySlugQuery, { slug: params.slug });
    if (!data) return {};
    return {
        title: data.title,
        description: data.excerpt,
    };
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
    const post = await client.fetch(postBySlugQuery, { slug: params.slug });

    if (!post) return notFound();

    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-6">
                Gepubliceerd op {new Date(post.publishedAt).toLocaleDateString()}
            </p>

            {post.mainImage?.asset?.url && (
                <div className="mb-8">
                    <Image
                        src={post.mainImage.asset.url}
                        alt={post.title}
                        width={1200}
                        height={600}
                        className="w-full h-auto rounded"
                    />
                </div>
            )}

            <div className="prose prose-lg">
                <PortableText value={post.body} />
            </div>
        </article>
    );
}

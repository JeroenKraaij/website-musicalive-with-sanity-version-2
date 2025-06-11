
import { client } from "@/lib/sanity/client";
import { showcaseBySlugQuery } from "@/lib/sanity/queries/showcase";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateMetadata(
    props: Promise<{ params: { slug: string } }>
) {
    const { params } = await props;
    const data = await client.fetch(showcaseBySlugQuery, { slug: params.slug });
    if (!data) return {};
    return {
        title: data.title,
        description: data.excerpt,
    };
}

export default async function ShowcasePage({
                                               params,
                                           }: {
    params: { slug: string };
}) {
    const showcase = await client.fetch(showcaseBySlugQuery, { slug: params.slug });

    if (!showcase) return notFound();

    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4">{showcase.title}</h1>
            <p className="text-sm text-gray-500 mb-6">
                Gepubliceerd op {new Date(showcase.publishedAt).toLocaleDateString()}
            </p>

            {showcase.mainImage?.asset?.url && (
                <div className="mb-8">
                    <Image
                        src={showcase.mainImage.asset.url}
                        alt={showcase.title}
                        width={1200}
                        height={600}
                        className="w-full h-auto rounded"
                    />
                </div>
            )}

            <div className="prose prose-lg">
                <PortableText value={showcase.body} />
            </div>
        </article>
    );
}

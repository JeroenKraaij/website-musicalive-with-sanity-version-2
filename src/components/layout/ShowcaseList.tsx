
// components/layout/ShowcaseList.tsx

import Image from "next/image";
import Link from "next/link";

type Showcase = {
    title: string;
    slug: string;
    excerpt: string;
    publishedAt: string;
    mainImage: { asset: { url: string } };
};

export default function ShowcaseList({ showcases }: { showcases: Showcase[] }) {
    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {showcases.map((showcase) => (
                <Link
                    key={showcase.slug}
                    href={`/showcases/${showcase.slug}`}
                    className="group block border rounded overflow-hidden hover:shadow-lg transition"
                >
                    {showcase.mainImage?.asset?.url && (
                        <Image
                            src={showcase.mainImage.asset.url}
                            alt={showcase.title}
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover"
                        />
                    )}
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2 group-hover:text-teal-600 transition">
                            {showcase.title}
                        </h2>
                        <p className="text-sm text-gray-600">
                            {new Date(showcase.publishedAt).toLocaleDateString()}
                        </p>
                        <p className="mt-2 text-gray-800">{showcase.excerpt}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}


import Link from "next/link";
import Image from "next/image";

type Post = {
    title: string;
    slug: string;
    excerpt: string;
    publishedAt: string;
    mainImage: { asset: { url: string } };
    authorName?: string;
};

export default function PostList({ posts }: { posts: Post[] }) {
    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
                <Link
                    key={post.slug}
                    href={`/blogs/${post.slug}`}
                    className="group block border rounded overflow-hidden hover:shadow-lg transition"
                >
                    {post.mainImage?.asset?.url && (
                        <Image
                            src={post.mainImage.asset.url}
                            alt={post.title}
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover"
                        />
                    )}
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2 group-hover:text-teal-600 transition">
                            {post.title}
                        </h2>
                        <p className="text-sm text-gray-600">
                            {new Date(post.publishedAt).toLocaleDateString()}{" "}
                            {post.authorName && <>· {post.authorName}</>}
                        </p>
                        <p className="mt-2 text-gray-800">{post.excerpt}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

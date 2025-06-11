
"use client";

import { H3, H4 } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

type Item = {
    title: string;
    slug: { current: string };
    excerpt: string;
    mainImage?: { asset: { url: string } };
};

type Props = {
    title: string;
    items: Item[];
    type: "blog" | "showcase";
};

export default function FeaturedItemsSection({ title, type, items }: Props) {
    return (
        <div className="bg-black w-full py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <H3 className="text-center text-[var(--color-orange)] mb-12">{title}</H3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map(({ title, excerpt, mainImage, slug }, index) => (
                        <motion.div
                            key={slug.current}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="group border border-zinc-200 rounded-xl overflow-hidden bg-zinc-50 flex flex-col"
                        >
                            <div className="relative w-full h-72">
                                {mainImage?.asset?.url && (
                                    <Image
                                        src={mainImage.asset.url}
                                        alt={title}
                                        fill
                                        className="object-cover rounded-t-xl"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-1 items-center justify-center text-center">
                                <H4 className="text-zinc-900 mb-2">{title}</H4>
                                <p className="text-zinc-900 mb-6">{excerpt}</p>
                                <Button
                                    href={`/${type === "blog" ? "blogs" : "showcases"}/${slug.current}`}
                                    size="sm"
                                    radius="full"
                                    variant="primary"
                                >
                                    Lees verder
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

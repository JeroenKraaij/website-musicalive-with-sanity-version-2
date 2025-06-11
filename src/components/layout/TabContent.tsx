
"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { H3 } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import type { TabDataItem } from "@/types/blocks";

interface TabContentProps {
    activeTab: string;
    tabs: TabDataItem[];
}

export default function TabContent({ activeTab, tabs }: TabContentProps) {
    const tab = tabs.find((t) => t.key === activeTab);
    if (!tab) return null;

    const { title, description, image, href, label } = tab;

    return (
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-zinc-900 p-10 md:p-16 rounded-4xl shadow-lg min-h-[600px] items-center md:items-start md:justify-start">
            {/* Left content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col justify-start"
                >
                    <H3 className="mb-4 text-white">{title}</H3>
                    <div className="text-lg text-white">{description}</div>
                </motion.div>
            </AnimatePresence>

            {/* Right image */}
            <div className="relative w-full max-w-[440px] aspect-square mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={image?.asset?.url}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src={image?.asset?.url}
                            alt={title}
                            fill
                            className="object-cover rounded-lg shadow-2xl"
                            placeholder="blur"
                            blurDataURL="/images/placeholder.png"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* CTA Button */}
            <div className="col-span-2 text-center mt-12">
                <Button
                    className="mt-8"
                    radius="full"
                    size="lg"
                    href={href}
                    fullWidth
                >
                    Bekijk {label ?? "meer"}
                </Button>
            </div>
        </div>
    );
}


"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { H4 } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { ConceptTileData } from "@/types/concept";

type ConceptTileProps = ConceptTileData & {
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
};

export default function ConceptTile({
                                        title,
                                        subtitle,
                                        image,
                                        link,
                                        isHovered,
                                        onHover,
                                        onLeave,
                                    }: ConceptTileProps) {
    return (
        <motion.div
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            animate={{ flex: isHovered ? 2 : 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative group h-64 md:h-full w-full"
        >
            <Link href={link} className="absolute inset-0 z-10">
                <div className="relative w-full h-full">
                    <Image
                        src={encodeURI(image.asset.url)}
                        alt={title}
                        fill
                        loading="lazy"
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 px-4 text-center">
                        <H4 className="text-white text-xl">{title}</H4>
                        <p className="text-white">{subtitle}</p>
                        <Button size="sm" radius="full" variant="primary">
                            Meer informatie
                        </Button>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

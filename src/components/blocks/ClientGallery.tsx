
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { FC } from "react";

type Logo = {
    src: { asset: { url: string } };
    alt: string;
    href?: string;
};

type ClientGalleryProps = {
    logos: Logo[];
};

const ClientGallery: FC<ClientGalleryProps> = ({ logos = [] }) => {
    if (!logos?.length) return null;

    return (
        <section className="w-full bg-black py-20 overflow-hidden">
            <div className="relative w-full overflow-hidden">
                <motion.div className="flex gap-48 animate-scroll hover:paused" role="list">
                    {[...logos, ...logos].map((logo, index) => {
                        const image = (
                            <Image
                                src={logo.src.asset.url}
                                alt={logo.alt}
                                width={160}
                                height={80}
                                sizes="(max-width: 640px) 100px, (max-width: 1024px) 140px, 160px"
                                className="object-contain grayscale hover:grayscale-0 transition duration-300"
                            />
                        );

                        return (
                            <motion.div
                                key={`${logo.src.asset.url}-${index}`}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="flex-shrink-0"
                                role="listitem"
                            >
                                {logo.href ? (
                                    <a href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={logo.alt}>
                                        {image}
                                    </a>
                                ) : (
                                    image
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientGallery;

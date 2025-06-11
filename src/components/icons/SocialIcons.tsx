

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { iconMap } from "@/lib/icons/icons"; // centrale mapping van iconen

// Beschikbare groottes en corresponderende Tailwind-klassen
const sizeMap = {
    sm: { padding: "p-1.5", icon: "w-4 h-4" },
    md: { padding: "p-2", icon: "w-5 h-5" },
    lg: { padding: "p-2.5", icon: "w-6 h-6" },
    xl: { padding: "p-3", icon: "w-7 h-7" },
};

export type IconType = keyof typeof iconMap;

type SocialIconProps = {
    icon: IconType;
    href: string;
    size?: keyof typeof sizeMap;
};

export default function SocialIcon({ icon, href, size = "md" }: SocialIconProps) {
    const IconComponent = iconMap[icon];
    if (!IconComponent) return null;

    const { padding, icon: iconSize } = sizeMap[size];

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center ${padding} bg-white rounded-full shadow-md transition-transform`}
            >
                <IconComponent className={`${iconSize} text-zinc-900`} aria-label={icon} />
            </Link>
        </motion.div>
    );
}

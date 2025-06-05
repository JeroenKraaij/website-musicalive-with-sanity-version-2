
"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import SocialIcon from "@/components/icons/socialIcons"
import { NavigationItem } from "@/types/sanity"

type MobileMenuProps = {
    isOpen: boolean
    onClose: () => void
    links: NavigationItem[]
}

const menuVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="mobile-menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40 bg-black/90 flex flex-col justify-center items-center text-white"
                >
                    <motion.nav
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-6 text-2xl font-semibold text-center"
                    >
                        {links.map((link, index) => {
                            const href = link.page?.slug?.current
                                ? `/${link.page.slug.current}`
                                : link.slug
                                    ? `/${link.slug}`
                                    : link.url || "/";


                            return (
                                <motion.div key={index} variants={itemVariants}>
                                    <Link
                                        href={href}
                                        onClick={onClose}
                                        className="hover:text-teal-600 transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </motion.nav>

                    <motion.div
                        className="mt-16 flex gap-4"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {(["facebook", "instagram", "youtube"] as const).map((icon) => (
                            <motion.div key={icon} variants={itemVariants}>
                                <SocialIcon icon={icon} href={`https://${icon}.com`} size="lg" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}


"use client";

import { FooterData } from "@/types/footer";
import { Button } from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import SocialIcon, { IconType } from "@/components/icons/SocialIcons";
import FooterBackground from "@/components/layout/FooterBackground";
import { H5 } from "@/components/ui/Heading";
import { motion } from "framer-motion";

export default function Footer({ data }: { data?: FooterData }) {
    const backgroundUrl =
        data?.backgroundImage?.asset?.url ??
        "/backgrounds/Website background Footer.webp";

    const socialItems = data?.socialItems ?? [];
    const footerLinks = data?.footerLinks ?? [];

    return (
        <motion.footer
            className="w-full bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <FooterBackground backgroundUrl={backgroundUrl}>
                {data?.ctaTitle && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <H5 className="text-white">{data.ctaTitle}</H5>
                    </motion.div>
                )}

                {data?.ctaButtonHref && data?.ctaButtonLabel && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Button size="lg" radius="full" href={data.ctaButtonHref}>
                            {data.ctaButtonLabel}
                        </Button>
                    </motion.div>
                )}

                {socialItems.length > 0 && (
                    <motion.div
                        className="flex justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {socialItems.map((item) => (
                            <motion.div
                                key={item.icon}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <SocialIcon
                                    icon={item.icon as IconType}
                                    href={item.href}
                                    size="xl"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {data?.logo?.asset?.url && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Logo size="lg" href="/" src={data.logo.asset.url} />
                    </motion.div>
                )}
            </FooterBackground>

            <div className="bg-zinc-900 text-white text-sm py-6 px-4">
                <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {footerLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.url}
                                className="hover:underline transition-colors duration-150 hover:text-teal-600"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                    <div>{data?.copyrightText ?? "Alle rechten voorbehouden © 2025"}</div>
                </div>
            </div>
        </motion.footer>
    );
}

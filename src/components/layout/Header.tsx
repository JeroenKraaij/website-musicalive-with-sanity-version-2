"use client"

import { useState } from "react"
import HamburgerButton from "@/components/ui/HamburgerButton"
import Logo from "@/components/ui/Logo"
import MobileMenu from "@/components/layout/MobileMenu"
import type { SiteSettings } from "@/types/sanity"

type HeaderProps = {
    settings: SiteSettings
}

export default function Header({ settings }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false)

    const visibleNav = settings.navigation?.filter((link) => !link.hidden) || []

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900/90 backdrop-blur-md">
                <div className="flex items-center justify-between px-6 py-4">
                    <Logo
                        href="/"
                        src={settings.logo?.asset?.url}
                        alt={settings.logo?.alt}
                        className="h-10"
                    />
                    <HamburgerButton onClick={() => setMenuOpen(!menuOpen)} isOpen={menuOpen} />
                </div>
            </header>

            <MobileMenu links={visibleNav} isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    )
}

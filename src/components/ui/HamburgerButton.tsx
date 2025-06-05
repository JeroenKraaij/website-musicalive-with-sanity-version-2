
// components/ui/HamburgerButton.tsx

"use client";

import { Menu, X } from "lucide-react";

interface HamburgerButtonProps {
    onClick: () => void;
    isOpen: boolean;
}

export default function HamburgerButton({ onClick, isOpen }: HamburgerButtonProps) {
    return (
        <button
            onClick={onClick}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="w-16 h-16 flex items-center justify-center rounded-md bg-gray-600 hover:bg-gray-700 transition-colors"
        >
            {isOpen ? (
                <X className="w-10 h-10 text-white" />
            ) : (
                <Menu className="w-10 h-10 text-[#FFA700] group-hover:text-white transition-colors" />
            )}
        </button>
    );
}

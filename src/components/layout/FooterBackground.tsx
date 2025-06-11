
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/clsx";

interface FooterBackgroundProps {
    children?: ReactNode;
    backgroundUrl?: string;
    className?: string;
}

export default function FooterBackground({
                                             children,
                                             backgroundUrl = "/backgrounds/Website background Footer.webp",
                                             className,
                                         }: FooterBackgroundProps) {
    return (
        <div
            className={cn("w-full min-h-[600px] bg-cover bg-center text-white", className)}
            style={{ backgroundImage: `url('${backgroundUrl}')` }}
        >
            <div className="relative min-h-[600px] flex items-center justify-center">
                <div className="absolute inset-0 bg-zinc-900/60 z-0" aria-hidden="true" />
                <div className="relative z-10 text-center py-24 px-4 w-full">
                    <div className="flex flex-col items-center justify-center gap-10">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

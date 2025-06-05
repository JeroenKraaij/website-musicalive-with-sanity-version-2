
// components/ui/Button.tsx

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/clsx";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    fullWidth?: boolean;
    size?: "sm" | "md" | "lg";
    href?: string;
    radius?: "none" | "sm" | "md" | "lg" | "full";
}

const sizeClasses = {
    sm: "px-8 py-1.5 text-sm",
    md: "px-10 py-2 text-base",
    lg: "px-12 py-2.5 text-lg",
};

const radiusClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, size = "md", radius = "md", fullWidth = false, href, ...props }, ref) => {
        const baseClasses = cn(
            "inline-flex items-center justify-center font-medium text-white",
            "bg-[linear-gradient(to_right,#2D6C6A,#295AA3)]",
            "hover:opacity-90 transition-colors duration-200 ease-in-out",
            sizeClasses[size],
            radiusClasses[radius as keyof typeof radiusClasses],
            fullWidth && "w-full",
            className
        );

        if (href) {
            return (
                <Link href={href} className={baseClasses}>
                    {props.children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={baseClasses} {...props} />
        );
    }
);

Button.displayName = "Button";
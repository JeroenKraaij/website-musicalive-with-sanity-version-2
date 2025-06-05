

import { cn } from "@/lib/utils/clsx";
import type { ReactNode } from "react";

interface HeadingProps {
    children: ReactNode;
    className?: string;
}

/** H1 */
export function H1({ children, className }: HeadingProps) {
    return (
        <h1
            className={cn(
                "text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[var(--color-orange)]",
                className
            )}
        >
            {children}
        </h1>
    );
}


/** H2 */
export function H2({ children, className }: HeadingProps) {
    return (
        <h2 className={cn("text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug tracking-tight text-zinc-50 dark:text-black", className)}>
            {children}
        </h2>
    );
}

/** H3 */
export function H3({ children, className }: HeadingProps) {
    return (
        <h3 className={cn("text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug text-[var(--color-orange)] dark:text-zinc-100", className)}>
            {children}
        </h3>
    );
}

/** H4 */
export function H4({ children, className }: HeadingProps) {
    return (
        <h4 className={cn("text-xl sm:text-2xl font-medium text-zinc-50 dark:text-zinc-100", className)}>
            {children}
        </h4>
    );
}

/** H5 */
export function H5({ children, className }: HeadingProps) {
    return (
        <h5 className={cn("text-lg sm:text-xl font-bold text-zinc-100 dark:text-zinc-300", className)}>
            {children}
        </h5>
    );
}

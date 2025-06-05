
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils/clsx"

type LogoProps = {
    size?: "sm" | "md" | "lg"
    href?: string
    className?: string
    src?: string
    alt?: string
}

export default function Logo({
                                 size = "md",
                                 href,
                                 className,
                                 src,
                                 alt = "Logo",
                             }: LogoProps) {
    const sizeClass = {
        sm: "h-6",
        md: "h-8",
        lg: "h-10",
    }[size]

    const content = src ? (
        <Image src={src} alt={alt} width={160} height={50} className={cn(sizeClass, className)} />
    ) : (
        <span className={cn("text-white text-xl font-bold", className)}>Musicalive</span>
    )

    return href ? <Link href={href}>{content}</Link> : content
}

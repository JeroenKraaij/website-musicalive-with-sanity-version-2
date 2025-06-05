
type PageBackgroundProps = {
    children?: React.ReactNode
    className?: string
    backgroundUrl?: string // 🔁 nieuwe naam, alleen Sanity URL
    gradientOpacity?: number
    overlay?: 'teal' | 'black' | 'none'
}

export default function PageBackground({
                                           children,
                                           className,
                                           backgroundUrl,
                                           gradientOpacity = 0.7,
                                           overlay = 'teal',
                                       }: PageBackgroundProps) {
    return (
        <div
            className={`relative w-full text-white bg-cover bg-center ${className ?? ''}`}
            style={{
                backgroundImage: backgroundUrl
                    ? `url('${backgroundUrl}')`
                    : `linear-gradient(135deg, var(--color-teal) 0%, var(--color-blue-dark) 60%, var(--color-night) 100%)`,
            }}
        >
            {backgroundUrl && overlay !== 'none' && (
                <div
                    className={
                        overlay === 'black'
                            ? 'absolute inset-0 bg-black'
                            : 'absolute inset-0 bg-[linear-gradient(135deg,var(--color-teal)_0%,var(--color-blue-dark)_60%,var(--color-night)_100%)]'
                    }
                    style={{ opacity: gradientOpacity }}
                    aria-hidden="true"
                />
            )}

            <div className="relative z-10 w-full pt-32 px-4 sm:px-6 md:px-8">
                {children}
            </div>
        </div>
    )
}

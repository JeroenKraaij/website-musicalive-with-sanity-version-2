
type VideoSectionProps = {
    youtubeId: string
    title?: string
    thumbnailUrl?: string
    backgroundUrl?: string
    minHeight?: string
}

export default function VideoSection({
                                         youtubeId,
                                         backgroundUrl,
                                         title = 'Video',
                                         thumbnailUrl,
                                         minHeight = '700px',
                                     }: VideoSectionProps) {
    return (
        <section
            className="relative w-full flex items-center justify-center overflow-hidden pb-24 min-h-[500px] sm:min-h-[700px]"
            style={{ minHeight }}
        >
            {backgroundUrl && (
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${backgroundUrl}')` }}
                    aria-hidden="true"
                />
            )}

            <div className="relative z-10 w-full px-4">
                <div className="max-w-3xl mx-auto aspect-video">
                    <iframe
                        className="w-full h-full rounded-lg shadow-xl"
                        src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer"
                    />
                </div>
            </div>

            {thumbnailUrl && (
                <script type="application/ld+json" suppressHydrationWarning>
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'VideoObject',
                        name: title,
                        thumbnailUrl: [thumbnailUrl],
                        uploadDate: new Date().toISOString(),
                        description: 'Video door Musicalive',
                        contentUrl: `https://www.youtube.com/watch?v=${youtubeId}`,
                        embedUrl: `https://www.youtube.com/embed/${youtubeId}`,
                    })}
                </script>
            )}
        </section>
    )
}

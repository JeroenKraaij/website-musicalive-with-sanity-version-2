

// app/not-found.tsx
import { client } from '@/lib/sanity/client'
import { notFoundPageQuery } from '@/lib/sanity/queries/notFound'
import PageBackground from '@/components/layout/PageBackground'
import { Button } from '@/components/ui/Button'

export default async function NotFound() {
    const data = await client.fetch(notFoundPageQuery)

    return (
        <section className="min-h-screen">
            <PageBackground backgroundUrl={data?.backgroundUrl} overlay="teal" gradientOpacity={0.8}>
                <div className="text-white text-center px-6 py-24 max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold mb-4">{data?.title ?? '404 – Pagina niet gevonden'}</h1>
                    <p className="mb-8">{data?.message ?? 'De pagina die je zoekt bestaat niet.'}</p>

                    {data?.cta?.href && data?.cta?.label && (
                        <Button href={data.cta.href} variant="primary" size="lg">
                            {data.cta.label}
                        </Button>
                    )}
                </div>
            </PageBackground>
        </section>
    )
}

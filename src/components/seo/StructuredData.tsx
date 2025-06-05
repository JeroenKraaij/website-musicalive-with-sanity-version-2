
// app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import { getSiteSettings } from "@/lib/sanity/queries/siteSettings"; // ✅ fetch functie
import { Metadata } from "next";

const poppins = Poppins({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const settings = await getSiteSettings();

    // ✅ Structured Data ophalen uit settings
    const structuredDataArray = settings?.structuredData || [];

    return (
        <html lang="nl" className={`${poppins.variable} scroll-smooth`} suppressHydrationWarning>
        <head>
            {/* ✅ Structured data JSON-LD injectie */}
            {structuredDataArray.map((item: any, index: number) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(item),
                    }}
                />
            ))}
        </head>
        <body className="antialiased flex flex-col min-h-screen relative">
        <Header settings={settings} />
        <main className="pt-24">{children}</main>
        </body>
        </html>
    );
}

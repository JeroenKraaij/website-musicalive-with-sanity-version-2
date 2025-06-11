
// app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getSiteSettings } from "@/lib/sanity/queries/siteSettings";
import { getFooterSettings } from "@/lib/sanity/queries/footer";

const poppins = Poppins({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const settings = await getSiteSettings();
    const footer = await getFooterSettings();

    return (
        <html lang="nl" className={`${poppins.variable} scroll-smooth`} suppressHydrationWarning>
        <body className="antialiased flex flex-col min-h-screen relative">
        <Header settings={settings} />
        <main className="pt-24 flex-grow">{children}</main>
        <Footer data={footer} />
        </body>
        </html>
    );
}

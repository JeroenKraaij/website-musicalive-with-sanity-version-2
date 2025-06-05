// app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import { getSiteSettings } from "@/lib/sanity/queries/siteSettings"; // ✅ fetch functie importeren

const poppins = Poppins({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const settings = await getSiteSettings(); // 👈 siteSettings ophalen

    return (
        <html lang="nl" className={`${poppins.variable} scroll-smooth`} suppressHydrationWarning>
        <body className="antialiased flex flex-col min-h-screen relative">
        <Header settings={settings} /> {/* ✅ Hier settings meegeven */}
        <main className="pt-24">{children}</main>
        </body>
        </html>
    );
}

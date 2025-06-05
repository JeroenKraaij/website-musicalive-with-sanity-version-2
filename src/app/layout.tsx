// app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    return (
        <html lang="nl" className={`${poppins.variable} scroll-smooth`} suppressHydrationWarning>
            <body className="antialiased flex flex-col min-h-screen relative top-0">
                <main>{children}</main>
            </body>
        </html>
    );
}
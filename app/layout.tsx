import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter" });

export const metadata: Metadata = { title: "PL IMMOBILIEN | Immobilien mit Leidenschaft", description: "Massgeschneiderte Immobilienberatung in der Schweiz und Italien. Verkauf, Kauf, Verwaltung und Finanzierung mit Herz und Kompetenz.", icons: { icon: "/favicon.ico" } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return (<html lang="de" className={`${playfair.variable} ${inter.variable}`}><body className="font-sans bg-pl-cream text-pl-dark antialiased"><Navbar />{children}<Toaster position="top-center" richColors closeButton /></body></html>); }
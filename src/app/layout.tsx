import type { Metadata, Viewport } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { TopNotification } from "@/components/TopNotification";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });

export const metadata: Metadata = {
  title: "DOCHY | Turn Your Hustle Into Profit",
  description: "Get access to high-quality items and vendor lists so you can start reselling with confidence.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${anton.variable} bg-background text-white antialiased`}>
        <TopNotification />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

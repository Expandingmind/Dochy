import type { Metadata, Viewport } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { TopNotification } from "@/components/TopNotification";
import { LivePurchaseNotification } from "@/components/LivePurchaseNotification";

const inter = Inter({ subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });

export const metadata: Metadata = {
  title: "DOCHY | Turn Your Hustle Into Profit",
  description: "Get access to high-quality items and vendor lists so you can start reselling with confidence.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${anton.variable} bg-black text-white antialiased`}>
        <TopNotification />
        <Header />
        <main>
          {children}
        </main>
        <LivePurchaseNotification />
      </body>
    </html>
  );
}

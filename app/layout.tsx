// GitHub Pages clean URL configuration updated
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "Dev Earth Movers",
  description: "Moving Earth. Building Future.",
  icons: {
    icon: "/Tab_icon.png",
    shortcut: "/Tab_icon.png",
    apple: "/Tab_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="overflow-x-clip overflow-y-scroll"
    >
      <body
        className="min-h-screen flex flex-col font-sans bg-white text-zinc-900 w-full max-w-[100vw] overflow-x-clip"
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

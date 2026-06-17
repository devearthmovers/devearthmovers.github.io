// GitHub Pages clean URL configuration updated
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: {
    default: "Dev Earth Movers | Excavation & Demolition Contractors in Delhi NCR",
    template: "%s | Dev Earth Movers"
  },
  description: "Professional excavation, demolition, trenching, and JCB hire services in Delhi, Noida, Gurugram, and NCR. Reliable earth moving contractors.",
  keywords: ["excavation", "demolition", "construction", "JCB hire", "earth movers", "Delhi", "NCR", "Noida", "Gurugram", "trenching", "site clearing"],
  openGraph: {
    title: "Dev Earth Movers | Excavation & Demolition Contractors",
    description: "Professional excavation, demolition, trenching, and JCB hire services in Delhi NCR.",
    url: "https://devearthmovers.in",
    siteName: "Dev Earth Movers",
    locale: "en_IN",
    type: "website",
  },
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

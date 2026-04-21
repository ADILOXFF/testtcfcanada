import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TestTCFCanada | تحضير اختبار TCF Canada",
  description: "استعد لاختبار TCF Canada مع تمارين حقيقية وتصحيحات مفصلة. المنصة الأولى للناطقين بالعربية.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}

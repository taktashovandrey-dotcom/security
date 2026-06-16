import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Служба Безпеки — Охоронна компанія",
    template: "%s | Служба Безпеки",
  },
  description:
    "Служба Безпеки — ліцензована охоронна компанія. Фізична охорона об'єктів, відеоспостереження, пультова охорона 24/7. Телефон: +38 (063) 239-06-93.",
  keywords: [
    "охоронна компанія",
    "фізична охорона",
    "відеоспостереження",
    "сигналізація",
    "пультова охорона",
    "безпека",
    "Служба Безпеки",
  ],
  openGraph: {
    type: "website",
    locale: "uk_UA",
    siteName: "Служба Безпеки",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

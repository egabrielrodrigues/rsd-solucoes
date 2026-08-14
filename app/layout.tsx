import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RSD Soluções Elétricas | Eletricista no Tatuapé",
    template: "%s | RSD Soluções Elétricas",
  },
  description:
    "RSD Soluções Elétricas: serviços de instalação e manutenção elétrica em Tatuapé e região, São Paulo - SP. Solicite seu orçamento pelo WhatsApp.",
  keywords: [
    "eletricista Tatuapé",
    "eletricista no Tatuapé",
    "serviços elétricos Tatuapé",
    "instalação elétrica Tatuapé",
    "manutenção elétrica Tatuapé",
    "RSD Soluções Elétricas",
  ],
  authors: [{ name: "Rubens de Souza Dias" }],
  creator: "RSD Soluções Elétricas",
  openGraph: {
    title: "RSD Soluções Elétricas | Eletricista no Tatuapé",
    description:
      "Soluções elétricas com segurança e qualidade em Tatuapé e região.",
    type: "website",
    locale: "pt_BR",
    siteName: "RSD Soluções Elétricas",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

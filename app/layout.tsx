import type { Metadata } from "next";
import "./globals.css";

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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "RSD Soluções Elétricas",
  description:
    "Serviços de instalação e manutenção elétrica em Tatuapé e região.",
  telephone: "+5511990091953",
  areaServed: {
    "@type": "Place",
    name: "Tatuapé, São Paulo - SP, Brasil",
  },
  founder: {
    "@type": "Person",
    name: "Rubens de Souza Dias",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}
      </body>
    </html>
  );
}
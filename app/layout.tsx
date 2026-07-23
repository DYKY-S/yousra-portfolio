import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const bricolage = Bricolage_Grotesque({
  variable: "--ff-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--ff-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yousra Sab — Digital Marketing Specialist",
  description:
    "Portfolio de Yousra Sab, Digital Marketing Specialist. Stratégie d'acquisition, sites web et expérience utilisateur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${bricolage.variable} ${inter.variable}`}>
        {children}
       <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-YGDNVJT3VD"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-YGDNVJT3VD');
  `}
</Script>
      </body>
    </html>
  );
}

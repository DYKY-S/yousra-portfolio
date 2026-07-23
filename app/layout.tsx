import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { GoogleTag } from '@next/third-parties/google'

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
         <GoogleTag gaId="GT-PBSRWW9K" />
      </body>
    </html>
  );
}

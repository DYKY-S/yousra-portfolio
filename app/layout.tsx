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

      <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-KQDT3DM9"
      height="0"
      width="0"
      style={{ display: "none", visibility: "hidden" }}
    />
  </noscript>

  {children}

  <Script id="gtm" strategy="afterInteractive">
    {`
      (function(w,d,s,l,i){w[l]=w[l]||[];
      w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KQDT3DM9');
    `}
  </Script>
      </body>
    </html>
  );
}

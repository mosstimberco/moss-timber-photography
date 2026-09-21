import Script from 'next/script';
import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moss & Timber Photography",
  description: "Family mini photo sessions in Langley/Surrey BC",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
className={`${montserrat.variable} h-full antialiased`}
    >
     <body className="min-h-full flex flex-col">
  <Script
    async
    src="https://connect.facebook.net/en_US/fbevents.js"
  />
  <Script
    dangerouslySetInnerHTML={{
      __html: `
        fbq('init', '1551369959634962');
        fbq('track', 'PageView');
      `,
    }}
  />
  {children}
</body>
    </html>
  );
}

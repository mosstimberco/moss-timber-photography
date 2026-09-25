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
  title: "Family Photographer in Langley & Surrey, BC | Moss & Timber Photography",
  description: "Langley & Surrey family photographer. 30-minute outdoor mini sessions — free to reserve, pay only for the photos you love. Fall & holiday dates now booking.",
  keywords: "family photographer Langley BC, family photographer Surrey BC, fall mini sessions Langley, Christmas mini sessions Surrey, outdoor family portraits Fraser Valley",
  alternates: { canonical: "https://mosstimberco.com" },
  openGraph: {
    title: "Moss & Timber Photography | Family Photographer Langley & Surrey",
    description: "30-minute outdoor family sessions. Free to reserve — pay only for the photos you love.",
    url: "https://mosstimberco.com",
    type: "website",
    images: [{ url: "https://mosstimberco.com/photos/hero-family.jpg", alt: "Fall family photo session in Langley BC" }],
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
className={`${montserrat.variable} h-full antialiased`}
    >
     <body className="min-h-full flex flex-col">
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1551369959634962');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1551369959634962&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

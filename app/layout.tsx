import type { Metadata, Viewport } from "next";
import { Fira_Sans, Young_Serif } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { GTM_ID } from "@/lib/site";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const youngSerif = Young_Serif({
  variable: "--font-young",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Psychiatric Care in Pearland, TX | Solid Foundation Psychiatry",
  description:
    "Anxiety, depression, ADHD, sleep or mood concerns? See a board-certified psychiatric provider in Pearland, TX or online. Most insurance accepted. Start care in as little as 48 hours.",
  // Ads landing page: keep out of organic search to avoid duplicate content
  robots: { index: false, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${firaSans.variable} ${youngSerif.variable}`}
    >
      <GoogleTagManager gtmId={GTM_ID} />
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

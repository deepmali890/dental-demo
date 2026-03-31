import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import clinicData from "@/config/clinicData";



const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: clinicData.seo.title,
  description: clinicData.seo.description,
  keywords: clinicData.seo.keywords,
  openGraph: {
    title: clinicData.seo.title,
    description: clinicData.seo.description,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import { Limelight, Red_Hat_Display, Outfit } from "next/font/google";
// import { ThemeProvider } from "./theme-provider";

import Head from "next/head";

const redHatDisplay = Red_Hat_Display({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-red-hat-display",
});

const limelight = Limelight({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-limelight",
});

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Modaura",
  description:
    'This is a simple coming soon template built with NextJS and TailwindCSS. It is a lightweight and responsive template that can be used for various projects that require a "coming soon" page.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <body
        className={`${limelight.variable} ${outfit.variable} ${outfit.className} min-h-screen`}
      >
        <main className="main">{children}</main>
      </body>
    </html>
  );
}

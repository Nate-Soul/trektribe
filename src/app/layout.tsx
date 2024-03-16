import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bellefair } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

const alvenir = localFont({
  src: [
    {
      path: "../fonts/Avenir-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Avenir-Book.ttf",
      weight: "350",
      style: "normal",
    },
    {
      path: "../fonts/Avenir-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Avenir-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Avenir-Black.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Avenir-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-alvenir",
});

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair"
});

export const metadata: Metadata = {
  title: "TrekTribe",
  description: "Travelling cheats, tips and gist at your fingertips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={alvenir.className}>
        <MainHeader/>
        <main>
        {children}
        </main>
        <MainFooter/>
      </body>
    </html>
  );
}

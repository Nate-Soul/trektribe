import type { Metadata } from "next";

import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

export const metadata: Metadata = {
  title: "Our Blog | Trektribe",
  description: "Travelling cheats, tips and gist at your fingertips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader transparent={false}/>
        <main>
        {children}
        </main>
        <MainFooter/>
      </body>
    </html>
  );
}

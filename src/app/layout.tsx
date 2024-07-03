import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DarkAlley.pl - Strona główna",
  description: "Polski serwer roleplay na platformie DayZ. Dołącz już teraz!",
  keywords:
    "DayZ, DayZRP, Polska, PL, RP, RolePlay, Role Play, Survival, polskieRP, PolskieRP, SurvivalRP, DarkAlley, DayZ RP, RP Polska, Polska, Polski",
  authors: [{ name: "Paweł Łukasiewicz", url: "https://pawellukasiewicz.dev" }],
  applicationName: "DarkAlley.pl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

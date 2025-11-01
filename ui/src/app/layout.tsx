import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import React from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" font-Inter font-normal text-base max-w-[1440p] mx-auto">
        <div className="bg-black">
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}

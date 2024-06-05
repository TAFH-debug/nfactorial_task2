import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import {Suspense} from "react";
import Loading from "./loading";
import Footer from "@/app/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Make your own blogs.",
  description: "Create it by using blogpost.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen"}>
        <Header />
        <Suspense fallback={ <Loading /> }>
            {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}

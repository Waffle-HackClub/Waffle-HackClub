import type { Metadata } from "next";
import { Inter as font}  from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = font({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Conatus",
  description: "Own Tomorrow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${inter.className} bg-black text-slate-100`}>
      <main className="flex-grow" > 
        <Navbar />
        {children}
        </main>
        <Footer/>
    </body>
  </html>
  );
}

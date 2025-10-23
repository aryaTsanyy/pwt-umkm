import { Geist, Geist_Mono } from "next/font/google";
import Directory from "@/pages/directory";
import Navbar from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} items-center justify-items-center min-h-screen `}
    >
      <Navbar />
      <Directory />
    </div>
  );
}

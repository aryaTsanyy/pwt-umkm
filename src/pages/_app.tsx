import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Anton, Inter, Geist_Mono } from "next/font/google";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${anton.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <Component {...pageProps} />
    </div>
  );
}

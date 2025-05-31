import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Santeri Pikkarainen - Portfolio",
  description:
    "Hi, I'm Santeri Pikkarainen, a recent IT graduate specializing in Frontend Development. I'm passionate about creating intuitive and user-friendly digital experiences. While I don't have any projects to showcase just yet, exciting things are coming soon—stay tuned!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={cn(inter.className, "min-h-screen antialiased ")}>
        <Providers>
          <main className="bg-gray-100 dark:bg-gray-900">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

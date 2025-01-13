import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-gray-100 dark:bg-gray-900">{children}</div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SignUpProvider } from "@/context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prometo Food Trucks",
  description: "Find Food Trucks Near You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SignUpProvider>
        {children}
        </SignUpProvider>
      </body>
    </html>
  );
}

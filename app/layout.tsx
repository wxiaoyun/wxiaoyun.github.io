import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import * as Home from "@/components/home";
import { Separator } from "@/components/ui/separator";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Wu Xiaoyun - Home",
  description: "Wu Xiaoyun's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased min-h-[100dvh] w-[100dvw] max-w-6xl mx-auto bg-gray-50",
          fontSans.variable,
        )}
      >
        <div className="flex flex-col gap-6 bg-background p-12">
          <Home.Header />
          {children}
          <Separator />
          <Home.Footer />
        </div>
      </body>
    </html>
  );
}

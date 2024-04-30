import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import * as Root from "@/components/root";
import { Separator } from "@/components/ui/separator";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("font-sans antialiased bg-gray-50", fontSans.variable)}
      >
        <div className="min-h-[100dvh] w-[100dvw] max-w-4xl mx-auto flex flex-col gap-6 bg-background py-12 px-3 sm:p-12 ">
          <Root.Header />
          {children}
          <Separator />
          <Root.Footer />
        </div>
      </body>
    </html>
  );
}

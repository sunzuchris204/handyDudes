import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutShell } from "@/components/layout-shell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Handy Dudes Architecture Documentation",
  description: "Technical system visualization for the Lead-to-Job Automation Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}

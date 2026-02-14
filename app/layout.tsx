import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Sidebar } from "@/components/sidebar";

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
        <div className="flex h-screen flex-col">
          <Navigation />
          <div className="flex flex-1 overflow-hidden pt-16">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-background">
              <div className="container mx-auto max-w-5xl px-6 py-8">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

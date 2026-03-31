import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "CBAM Estimator",
  description: "Carbon Border Adjustment Mechanism Estimator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen">
          <Sidebar />
          <main className="ml-64 min-h-screen p-8 transition-all duration-300">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

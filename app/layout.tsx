import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";

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
        <div className="flex flex-col h-screen">
          <AppHeader />
          <div className="flex flex-1 overflow-hidden">
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset className="flex flex-col flex-1">
                <main className="flex-1 p-8 overflow-auto bg-background">
                  {children}
                </main>
              </SidebarInset>
            </SidebarProvider>
          </div>
        </div>
      </body>
    </html>
  );
}

"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "./theme.css";
import { SessionProvider } from 'next-auth/react'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner"
import { useEffect } from "react";
import { startBackgroundTasks } from "@/utils/startBackgroundTasks";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    startBackgroundTasks();
  }, []);

  return (
    <html lang="en">
      <body
        className={`${inter.className} dashcode-app`}>
        <SessionProvider>
          {children}
          <Toaster />
          <SonnerToaster />
        </SessionProvider>
      </body>
    </html>
  );
}

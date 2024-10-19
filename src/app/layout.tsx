/**
 * eslint-disable @next/next/no-page-custom-font
 *
 * @format
 */

/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { poppins, roboto } from "@/app/utils/font";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F1A - F1 Academy",
  description: "Apps F1 Academy",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} ${poppins} ${roboto}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

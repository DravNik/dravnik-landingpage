// src/app/layout.tsx

import { ThemeProvider } from "@/components/ThemeProvider";
import { CartProvider } from "@/components/CartProvider"; // optional
import { Navbar } from "@/components/navbar-shop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Website",
  description: "E-commerce store for electronics and modules",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <CartProvider>
            <Navbar />
            <main className="container mx-auto p-4">{children}</main>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

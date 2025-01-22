// Mark this file as a Client Component
"use client";

import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes"; // Add ThemeProvider for dark mode support
import { useEffect, useState } from "react"; // Import hooks for client-side only code

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false); // State to track if the component has mounted

  useEffect(() => {
    // Set mounted to true after the component has mounted on the client
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent rendering the layout on the server before it's mounted on the client
    return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    );
  }

  // Render the layout after the component has mounted
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <body className={`${inter.className} bg-white dark:bg-gray-900`}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}

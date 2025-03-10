// app/layout.tsx

import { Inter } from "next/font/google";
import { ToastProvider } from "@/components/ui/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My App",
  description: "App Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* Sonner's Toaster for global toast notifications */}
        <ToastProvider />
      </body>
    </html>
  );
}

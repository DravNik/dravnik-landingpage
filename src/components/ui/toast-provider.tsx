// components/ui/toast-provider.tsx
"use client";

import { Toaster } from "sonner";

export function ToastProvider() {
  // position, styling, etc. can be customized here
  return <Toaster position="top-right" richColors />;
}

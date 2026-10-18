"use client";

import { IconProvider, ThemeProvider, ToastProvider } from "@once-ui-system/core";
import { LayoutProvider } from "@once-ui-system/core/next";
import { appIcons } from "@/resources/icons";
import { style } from "@/resources/once-ui.config";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <ThemeProvider {...style} persistence="none">
        <ToastProvider>
          <IconProvider icons={appIcons}>{children}</IconProvider>
        </ToastProvider>
      </ThemeProvider>
    </LayoutProvider>
  );
}

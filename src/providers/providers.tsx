'use client';


import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        defaultTheme="dark"
        attribute="class"
        disableTransitionOnChange
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
    </SessionProvider>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ayanali-portfolio.netlify.app/'),
  title: 'Ayan - Full Stack Developer',
  description: 'Professional portfolio showcasing full-stack development expertise',
  keywords: 'developer, portfolio, full-stack, web development, software engineer',
  authors: [{ name: 'Ayan' }],
  openGraph: {
    title: 'Ayan - Full Stack Developer',
    description: 'Professional portfolio showcasing full-stack development expertise',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
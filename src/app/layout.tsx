import type { Metadata, Viewport } from 'next';
import { Outfit, DM_Sans } from 'next/font/google';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sphere Schedule — Intelligent Scheduling for Teams',
  description: 'Sphere Schedule is the all-in-one productivity hub — seamlessly organizing your tasks, meetings, appointments, and calendar with AI-powered intelligence.',
  keywords: 'scheduling, productivity, tasks, calendar, meetings, appointments, AI',
  authors: [{ name: 'Sphere Solution Developers' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Sphere Schedule — Intelligent Scheduling for Teams',
    description: 'Organize your tasks, meetings, appointments, and calendar with AI-powered intelligence.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sphere Schedule',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sphere Schedule',
    description: 'Organize your tasks, meetings, appointments, and calendar with AI-powered intelligence.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f0efff' },
    { media: '(prefers-color-scheme: dark)', color: '#080712' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${dmSans.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
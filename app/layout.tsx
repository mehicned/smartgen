import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

// Define the PP Mori font
const ppMori = localFont({
  src: [
    {
      path: '../public/fonts/PPMori-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPMori-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/PPMori-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPMori-ExtralightItalic.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../public/fonts/PPMori-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPMori-SemiBoldItalic.otf',
      weight: '600',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-pp-mori',
});

export const metadata: Metadata = {
  title: "Modern Landing Page | Clean Boilerplate",
  description: "A clean, modern landing page boilerplate built with Next.js, Tailwind CSS, and Radix UI",
  keywords: ["landing page", "next.js", "tailwind css", "radix ui", "boilerplate"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ppMori.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

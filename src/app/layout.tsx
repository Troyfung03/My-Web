import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import NavigationBar from './lib/components/navbar';
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: "HomePage",
  description: "HomePage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavigationBar/>
      {children}
      <Analytics />
      </body>
    </html>
  )
}

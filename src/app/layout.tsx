import { NativeBuffer } from 'mongoose';
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './lib/components/navbar';
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
      <Nav/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import '../globals.css'
import './gallery.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Gallery",
  description: "Gallery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

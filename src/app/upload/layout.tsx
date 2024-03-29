import { Inter } from 'next/font/google'
import '../globals.css'
import './gallery.css'
import { EdgeStoreProvider } from '../lib/edgestore'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Upload",
  description: "upload for gallery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}><EdgeStoreProvider>{children}</EdgeStoreProvider></body>
    </html>
  )
}

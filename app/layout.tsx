import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { Providers } from "./providers";
import Footer from '../components/Footer';


const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Petchx',
  description: 'Petchx - Fullstack Developer',
  icons: "./assets/favicon.ico",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>

      <body className={outfit.className}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

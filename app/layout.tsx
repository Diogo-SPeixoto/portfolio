import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Portfolio - Diogo',
  description: 'Portfolio - Diogo',
  generator: 'Portfolio - Diogo',
  icons:"../public/favicon.ico",
}


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins">{children}</body>
    </html>
  )
}

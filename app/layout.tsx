import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'V.K-Tile',
  description: 'Trusted tile installation services in Seattle',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

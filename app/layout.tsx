import { Analytics } from '@vercel/analytics/next'
import { Manrope } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Kinfield University | Learn with Purpose',
  description:
    'A modern university for curious minds, practical learning, and real-world impact.',
  generator: 'Next.js',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#062d3c',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`bg-white ${manrope.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
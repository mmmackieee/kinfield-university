import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kinfield University | Learn with Purpose',
  description: 'A modern university for curious minds, practical learning, and real-world impact.',
  generator: 'Next.js',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#062d3c',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-white"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

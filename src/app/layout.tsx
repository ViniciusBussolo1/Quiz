import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { ReactQueryProvider } from './ReactQueryProvider'

import './globals.css'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quiz',
  description: 'Quiz Next ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={sora.className}>{children}</body>
      </html>
    </ReactQueryProvider>
  )
}

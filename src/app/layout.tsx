import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { ReactQueryProvider } from './ReactQueryProvider'
import { SkeletonTheme } from 'react-loading-skeleton'

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
      <SkeletonTheme baseColor="#1D2330" highlightColor="#252C3A">
        <html lang="en">
          <body className={sora.className}>{children}</body>
        </html>
      </SkeletonTheme>
    </ReactQueryProvider>
  )
}

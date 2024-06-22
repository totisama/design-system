import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import type React from 'react'
import SideBar from '@/components/side-bar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '---- Design System',
  description: 'Design System for Twitter',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        id='app'
        className={inter.className}
      >
        <SideBar />
        <main className='[grid-area:main] rounded-lg overflow-y-auto w-full'>
          {children}
        </main>
      </body>
    </html>
  )
}

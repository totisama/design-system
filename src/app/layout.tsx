import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import type React from 'react'
import SideBar from '@/components/side-bar'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'X Design Framework',
  description: 'Design Framework for X',
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
        <Header />
        <SideBar />
        <div className='[grid-area:main]'>{children}</div>
      </body>
    </html>
  )
}

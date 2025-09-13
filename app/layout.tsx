import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { SimpleNavbar } from '@/components/SimpleNavbar'
import { SimpleFooter } from '@/components/SimpleFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kirk Henrich C. Gamo - Software Engineer',
  description: 'Portfolio website of Kirk Henrich C. Gamo, a passionate Software Engineer specializing in AI and web development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SimpleNavbar />
        <main>{children}</main>
        <SimpleFooter />
      </body>
    </html>
  )
}

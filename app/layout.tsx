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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground transition-colors duration-300`}>
        <SimpleNavbar />
        <main>{children}</main>
        <SimpleFooter />
      </body>
    </html>
  )
}

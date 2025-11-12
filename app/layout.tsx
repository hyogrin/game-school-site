import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '게임학교 | Game School',
  description: '게임학교 공식 소개 사이트'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Nav />
        <main className="container py-10 min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

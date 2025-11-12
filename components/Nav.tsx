'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import type { Route } from 'next'  // ✅ 추가

const links = [
  { href: '/', label: '홈' },
  { href: '/history', label: '연혁' },
  { href: '/org-chart', label: '조직도' },
  { href: '/records', label: '전적' },
  { href: '/races', label: '종족별 구성' },
  { href: '/players', label: '선수소개' },
  { href: '/staff/coach', label: '감독소개' },
  { href: '/dashboard', label: '대시보드' },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="container flex items-center gap-6 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-brand">
          <img src="/logo.svg" alt="logo" className="h-7" /> 게임학교
        </Link>
        <nav className="ml-auto flex gap-2 text-sm">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={clsx('px-3 py-2 rounded-lg hover:bg-gray-100',
                pathname === l.href && 'bg-gray-100 font-semibold')}>{l.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

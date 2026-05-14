import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '허태범 — Backend Developer',
  description:
    '안정적이고 확장 가능한 서버 시스템을 구축하는 백엔드 개발자 허태범의 포트폴리오입니다.',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen" style={{ backgroundColor: 'var(--bg-main)', fontFamily: "'HG꼬딕Pro', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}

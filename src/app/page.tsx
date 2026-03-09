'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import TabBar from '@/components/TabBar'
import ContentViewer from '@/components/ContentViewer'
import Terminal from '@/components/Terminal'
import PdfNotification from '@/components/PdfNotification'

export default function Home() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // URL에서 초기 섹션 읽기
  const initialSection = searchParams.get('section') || 'readme'
  const [activeSection, setActiveSection] = useState(initialSection)
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview')
  const [showPdfModal, setShowPdfModal] = useState(false)

  // 첫 방문 시 PDF 모달 표시 (sessionStorage로 세션당 1회만)
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenPdfModal')
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setShowPdfModal(true)
        sessionStorage.setItem('hasSeenPdfModal', 'true')
      }, 500) // 페이지 로드 후 0.5초 뒤에 표시
      return () => clearTimeout(timer)
    }
  }, [])

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showPdfModal) {
        setShowPdfModal(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showPdfModal])

  // 섹션 변경 시 URL 업데이트
  const handleSectionChange = useCallback((section: string) => {
    setActiveSection(section)
    // URL 쿼리 파라미터 업데이트 (브라우저 히스토리에 추가)
    const params = new URLSearchParams(searchParams.toString())
    params.set('section', section)
    router.push(`?${params.toString()}`, { scroll: false })
  }, [router, searchParams])

  // URL 변경 감지 (뒤로가기/앞으로가기)
  useEffect(() => {
    const section = searchParams.get('section')
    if (section && section !== activeSection) {
      setActiveSection(section)
    }
  }, [searchParams, activeSection])

  return (
    <>
      {/* PDF 알림 모달 */}
      {showPdfModal && (
        <PdfNotification onClose={() => setShowPdfModal(false)} />
      )}

      {/* VS Code Header */}
      <Header viewMode={viewMode} onModeChange={setViewMode} />

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar (Explorer) */}
        <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />

        {/* Main Editor Area */}
        <main className="flex-1 flex flex-col bg-[#1e1e1e] min-w-0">
          {/* Tab Bar */}
          <TabBar activeSection={activeSection} viewMode={viewMode} />

          {/* Content Area */}
          <ContentViewer 
            activeSection={activeSection} 
            viewMode={viewMode} 
            onSectionChange={handleSectionChange}
          />
        </main>
      </div>

      {/* Terminal */}
      <Terminal />
    </>
  )
}
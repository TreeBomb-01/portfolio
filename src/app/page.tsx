'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import TabBar from '@/components/TabBar'
import ContentViewer from '@/components/ContentViewer'
import Terminal from '@/components/Terminal'

export default function Home() {
  const [activeSection, setActiveSection] = useState('readme')
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview')

  return (
    <>
      {/* VS Code Header */}
      <Header viewMode={viewMode} onModeChange={setViewMode} />

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar (Explorer) */}
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

        {/* Main Editor Area */}
        <main className="flex-1 flex flex-col bg-[#1e1e1e] min-w-0">
          {/* Tab Bar */}
          <TabBar activeSection={activeSection} viewMode={viewMode} />

          {/* Content Area */}
          <ContentViewer 
            activeSection={activeSection} 
            viewMode={viewMode} 
            onSectionChange={setActiveSection}
          />
        </main>
      </div>

      {/* Terminal */}
      <Terminal />
    </>
  )
}
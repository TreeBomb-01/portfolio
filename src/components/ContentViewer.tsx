'use client'

import { projectsData } from '@/data/portfolioData'
import CodeView from './CodeView'
import ReadmePreview from './preview/ReadmePreview'
import AboutPreview from './preview/AboutPreview'
import SkillsPreview from './preview/SkillsPreview'
import ProjectPreview from './preview/ProjectPreview'
import AwardsPreview from './preview/AwardsPreview'

interface ContentViewerProps {
  activeSection: string
  viewMode: 'preview' | 'code'
  onSectionChange?: (section: string) => void
}

export default function ContentViewer({ activeSection, viewMode, onSectionChange }: ContentViewerProps) {
  // Preview content for each section
  const renderPreview = () => {
    switch (activeSection) {
      case 'readme':
        return <ReadmePreview onSectionChange={onSectionChange} />
      case 'about':
        return <AboutPreview />
      case 'skills':
        return <SkillsPreview />
      case 'awards':
        return <AwardsPreview />
      default:
        // Project detail views
        const project = projectsData.find(p => p.id === activeSection)
        if (project) {
          return <ProjectPreview project={project} />
        }
        return <div className="text-gray-400">Select a file from the sidebar</div>
    }
  }

  return (
    <div className="flex-1 overflow-auto relative flex">
      {viewMode === 'code' ? (
        <CodeView activeSection={activeSection} />
      ) : (
        <div className="w-full p-6 md:p-10 max-w-4xl mx-auto overflow-y-auto">
          {renderPreview()}
        </div>
      )}
    </div>
  )
}

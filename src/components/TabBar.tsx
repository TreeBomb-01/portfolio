'use client'

import { sectionInfo } from '@/data/portfolioData'

interface TabBarProps {
  activeSection: string
  viewMode: 'preview' | 'code'
}

export default function TabBar({ activeSection, viewMode }: TabBarProps) {
  const info = sectionInfo[activeSection] || sectionInfo.readme

  const getBreadcrumb = () => {
    if (activeSection === 'readme') return 'src'
    if (activeSection === 'about') return 'src > main'
    if (activeSection === 'skills') return 'src'
    if (['project1', 'project2', 'project3'].includes(activeSection)) return 'src > projects > main'
    if (['project4', 'project5', 'project6'].includes(activeSection)) return 'src > projects > sub'
    return 'src'
  }

  return (
    <>
      {/* Tab */}
      <div className="flex bg-[#252526] overflow-x-auto border-b border-[#1e1e1e]">
        <button className="tab-active px-4 py-2 flex items-center gap-2 min-w-fit border-r border-[#333]">
          <i className={`${info.icon} ${info.iconColor}`}></i>
          <span className="text-sm">{info.filename}</span>
          <i className="fas fa-times text-xs ml-2 hover:text-white cursor-pointer opacity-50"></i>
        </button>
      </div>

      {/* Breadcrumb - Only show in code mode */}
      {viewMode === 'code' && (
        <div className="px-4 py-1 text-xs text-gray-500 bg-[#1e1e1e] flex items-center gap-2 border-b border-[#333]">
          {getBreadcrumb().split(' > ').map((part, index, arr) => (
            <span key={index} className="flex items-center gap-2">
              {part}
              {index < arr.length - 1 && <i className="fas fa-chevron-right text-[10px]"></i>}
            </span>
          ))}
          <i className="fas fa-chevron-right text-[10px]"></i>
          <span>{info.filename}</span>
        </div>
      )}
    </>
  )
}

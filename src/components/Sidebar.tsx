'use client'

import { useState } from 'react'
import { sidebarFiles } from '@/data/portfolioData'

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [projectsOpen, setProjectsOpen] = useState(true)
  const [mainProjectsOpen, setMainProjectsOpen] = useState(true)
  const [subProjectsOpen, setSubProjectsOpen] = useState(false)

  return (
    <aside className="w-64 bg-[#252526] flex-col border-r border-[#333] hidden md:flex select-none flex-shrink-0">
      <div className="p-3 text-xs font-bold uppercase tracking-wider text-gray-400 flex justify-between">
        <span>Explorer</span>
        <i className="fas fa-ellipsis-h cursor-pointer hover:text-white"></i>
      </div>
      
      <div className="px-2 overflow-y-auto flex-1">
        {/* Workspace Title */}
        <div className="flex items-center gap-1 text-gray-300 py-1 hover:bg-[#2a2d2e] cursor-pointer">
          <i className="fas fa-chevron-down text-xs w-4 text-center"></i>
          <span className="font-bold text-sm">PORTFOLIO</span>
        </div>

        <div className="pl-4 flex flex-col text-[#cccccc]">
          {/* Main Files */}
          {sidebarFiles.main.map((file) => (
            <div
              key={file.id}
              onClick={() => onSectionChange(file.id)}
              className={`sidebar-item ${activeSection === file.id ? 'sidebar-active' : ''}`}
            >
              <i className={`${file.icon} ${file.iconColor}`}></i>
              <span className="text-sm">{file.name}</span>
            </div>
          ))}

          {/* Projects Folder */}
          <div
            className="sidebar-item"
            onClick={() => setProjectsOpen(!projectsOpen)}
          >
            <i className={`fas fa-chevron-${projectsOpen ? 'down' : 'right'} text-xs text-gray-500`}></i>
            <i className="fas fa-folder text-[#519aba]"></i>
            <span className="text-sm">projects</span>
          </div>

          {projectsOpen && (
            <div className="pl-4 flex flex-col border-l border-[#444] ml-2">
              {/* Main Projects Folder */}
              <div
                className="sidebar-item"
                onClick={() => setMainProjectsOpen(!mainProjectsOpen)}
              >
                <i className={`fas fa-chevron-${mainProjectsOpen ? 'down' : 'right'} text-xs text-gray-500`}></i>
                <i className="fas fa-folder-open text-[#E8AE5B]"></i>
                <span className="text-sm">main</span>
              </div>

              {mainProjectsOpen && (
                <div className="pl-4 flex flex-col border-l border-[#444] ml-2">
                  {sidebarFiles.mainProjects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => onSectionChange(project.id)}
                      className={`sidebar-item ${activeSection === project.id ? 'sidebar-active' : ''}`}
                    >
                      <i className={`${project.icon} ${project.iconColor}`}></i>
                      <span className="text-sm truncate">{project.name}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Sub Projects Folder */}
              <div
                className="sidebar-item"
                onClick={() => setSubProjectsOpen(!subProjectsOpen)}
              >
                <i className={`fas fa-chevron-${subProjectsOpen ? 'down' : 'right'} text-xs text-gray-500`}></i>
                <i className="fas fa-folder text-[#8abeb7]"></i>
                <span className="text-sm">sub</span>
              </div>

              {subProjectsOpen && (
                <div className="pl-4 flex flex-col border-l border-[#444] ml-2">
                  {sidebarFiles.subProjects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => onSectionChange(project.id)}
                      className={`sidebar-item ${activeSection === project.id ? 'sidebar-active' : ''}`}
                    >
                      <i className={`${project.icon} ${project.iconColor}`}></i>
                      <span className="text-sm truncate">{project.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Other Files */}
          {sidebarFiles.other.map((file) => (
            <div
              key={file.id}
              onClick={() => onSectionChange(file.id)}
              className={`sidebar-item ${activeSection === file.id ? 'sidebar-active' : ''}`}
            >
              <i className={`${file.icon} ${file.iconColor}`}></i>
              <span className="text-sm">{file.name}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

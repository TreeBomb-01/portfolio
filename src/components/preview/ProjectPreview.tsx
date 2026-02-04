import { Project } from '@/data/portfolioData'

interface ProjectPreviewProps {
  project: Project
}

export default function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <div className="preview-content">
      <h1>📂 {project.title}</h1>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="preview-tag">{project.category}</span>
        <span className="text-sm text-gray-400">{project.period}</span>
        {project.award && (
          <span className="px-2 py-1 bg-yellow-900/50 text-yellow-300 text-xs rounded-full flex items-center gap-1">
            🏆 {project.award}
          </span>
        )}
      </div>
      
      <p className="text-gray-300 mb-6">{project.description}</p>

      <h2>사용 기술</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map(tech => (
          <span key={tech} className="preview-tag">{tech}</span>
        ))}
      </div>

      <h2>주요 기여사항</h2>
      <div className="space-y-4">
        {project.contributions.map((contrib, index) => (
          <div key={index} className="preview-card border-l-4 border-[#569cd6]">
            <h3 className="text-white font-semibold mb-2">{contrib.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{contrib.description}</p>
            <div className="flex flex-wrap gap-1">
              {contrib.technologies.map(tech => (
                <span key={tech} className="px-2 py-1 bg-[#1e1e1e] text-gray-300 text-xs rounded">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {project.githubUrl && (
        <div className="mt-6">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] text-[#569cd6] rounded hover:bg-[#3d3d3d] transition-colors"
          >
            <i className="fab fa-github"></i>
            GitHub 저장소 보기
          </a>
        </div>
      )}
    </div>
  )
}

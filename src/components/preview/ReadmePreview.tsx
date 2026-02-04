import { projectsData, quickAccessItems, awardsData } from '@/data/portfolioData'

interface ReadmePreviewProps {
  onSectionChange?: (section: string) => void
}

export default function ReadmePreview({ onSectionChange }: ReadmePreviewProps) {
  const handleQuickAccess = (id: string) => {
    if (onSectionChange) {
      onSectionChange(id)
    }
  }

  return (
    <div className="preview-content">
      {/* Quick Access Section */}
      <div className="readme-section">
        <h1>Backend Engineer Portfolio</h1>
        <p className="text-gray-400 mb-6">안녕하세요, 백엔드 개발자 허태범의 포트폴리오입니다. 아래 파일 바로가기를 클릭하면 상세 내용을 확인하실 수 있습니다.</p>
        
        <h2 className="text-xl font-semibold text-[#dcdcaa] mb-4 border-b border-[#333] pb-2">📂 Quick Access (Source Files)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {quickAccessItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleQuickAccess(item.id)}
              className="bg-[#252526] p-4 rounded border border-[#333] hover:border-[#569cd6] cursor-pointer transition-all hover:bg-[#2a2d2e] group flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded bg-[#1e1e1e] flex items-center justify-center border border-[#333]">
                <i className={`${item.icon} text-2xl ${item.iconColor}`}></i>
              </div>
              <div className="flex-1 min-w-0">
                <span className="block font-bold text-gray-200 group-hover:text-[#569cd6] transition-colors truncate">{item.name}</span>
                <span className="text-xs text-gray-500">{item.description}</span>
              </div>
              <i className="fas fa-external-link-alt text-xs text-gray-600 group-hover:text-[#569cd6] flex-shrink-0"></i>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="readme-section">
        <h1>👋 About Me</h1>
        <p className="text-lg text-gray-300">
          안녕하세요, <strong className="text-[#569cd6]">&quot;안정성과 확장성&quot;</strong>을 최우선으로 생각하는 백엔드 개발자 <strong>허태범</strong>입니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="preview-card">
            <h3 className="text-[#dcdcaa] font-bold mb-2">💡 Philosophy</h3>
            <p className="text-sm text-gray-400">안정적이고 확장 가능한 서버 아키텍처 구축에 집중합니다. <br /> 프로젝트와 공모전을 통해 운영 효율성과 신뢰성을 높이는 시스템 설계를 경험했습니다.</p>
          </div>
          <div className="preview-card">
            <h3 className="text-[#4ec9b0] font-bold mb-2">🎯 Goal</h3>
            <p className="text-sm text-gray-400">효율적인 설계와 운영 개선을 통해 처리 속도를 단축하고 안정성을 강화했던 경험을 살려, 신뢰할 수 있는 백엔드 시스템을 구축하는 데 기여하고자 합니다.</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="readme-section">
        <h1>🛠️ Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="preview-card">
            <h3 className="text-[#569cd6] font-bold mb-3 border-b border-[#444] pb-2">Backend & Language</h3>
            <div className="flex flex-wrap gap-2">
              <span className="preview-tag">Java</span>
              <span className="preview-tag">Spring Boot</span>
              <span className="preview-tag">Python</span>
              <span className="preview-tag">FastAPI</span>
              <span className="preview-tag">JPA</span>
            </div>
          </div>
          <div className="preview-card">
            <h3 className="text-[#4ec9b0] font-bold mb-3 border-b border-[#444] pb-2">Infrastructure</h3>
            <div className="flex flex-wrap gap-2">
              <span className="preview-tag">Docker</span>
              <span className="preview-tag">Jenkins</span>
              <span className="preview-tag">MySQL</span>
              <span className="preview-tag">PostgreSQL</span>
              <span className="preview-tag">Redis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Projects Section */}
      <div className="readme-section">
        <h1>🚀 Main Projects</h1>
        {projectsData.slice(0, 3).map((project, index) => (
          <div key={project.id} className="mb-8">
            <h2 style={{ marginTop: index === 0 ? 0 : undefined }}>{index + 1}. {project.title}</h2>
            <div className="mb-4 flex flex-wrap gap-1">
              {project.technologies.slice(0, 6).map(tech => (
                <span key={tech} className="preview-tag">{tech}</span>
              ))}
              {project.technologies.length > 6 && (
                <span className="preview-tag">+{project.technologies.length - 6}</span>
              )}
            </div>
            <p>{project.description}</p>
            <ul className="list-disc pl-5 text-gray-300 space-y-1 mt-2">
              {project.contributions.slice(0, 3).map((contrib, i) => (
                <li key={i}><strong>{contrib.title}:</strong> {contrib.description}</li>
              ))}
            </ul>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#569cd6] hover:underline text-sm mt-2 inline-block">
                → GitHub 보기
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Sub Projects Section */}
      <div className="readme-section">
        <h1>🧩 Sub Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectsData.slice(3).map(project => (
            <div key={project.id} className="preview-card">
              <h3>{project.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{project.period}</p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map(tech => (
                  <span key={tech} className="preview-tag text-xs">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards Section */}
      <div className="readme-section">
        <h1>🏆 Awards</h1>
        <div className="relative border-l border-gray-700 ml-4 pl-6 space-y-4">
          {awardsData.map((award, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-[31px] bg-[#2d2d2d] border border-gray-600 w-4 h-4 rounded-full"></span>
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-bold text-white">{award.title} - {award.grade}</span>
                  <p className="text-sm text-gray-400">{award.organizer}</p>
                </div>
                <span className="text-sm text-[#569cd6] flex-shrink-0 ml-4">{award.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

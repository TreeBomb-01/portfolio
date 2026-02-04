import { awardsData, projectsData } from '@/data/portfolioData'

export default function AwardsPreview() {
  return (
    <div className="preview-content">
      <h1>🏆 Awards & Certifications</h1>
      <p className="text-gray-400 mb-6">프로젝트와 공모전을 통해 획득한 수상 경력입니다.</p>
      
      <div className="relative border-l border-gray-700 ml-4 pl-6 space-y-6 mt-6">
        {awardsData.map((award, index) => {
          const project = award.project ? projectsData.find(p => p.id === award.project) : null
          
          return (
            <div key={index} className="relative">
              <span className="absolute -left-[31px] bg-[#2d2d2d] border border-gray-600 w-4 h-4 rounded-full flex items-center justify-center">
                <i className="fas fa-trophy text-[8px] text-[#E8AE5B]"></i>
              </span>
              <span className="text-sm text-[#569cd6]">{award.date}</span>
              <h3 className="text-lg font-bold text-white">{award.title} - {award.grade}</h3>
              <p className="text-gray-400 text-sm">주최: {award.organizer}</p>
              {project && (
                <div className="mt-2 p-3 bg-[#252526] rounded border border-[#333]">
                  <p className="text-xs text-gray-500 mb-1">관련 프로젝트</p>
                  <p className="text-sm text-[#4ec9b0]">{project.title}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="preview-tag text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-8 p-4 bg-[#252526] rounded border border-[#333]">
        <h3 className="text-[#dcdcaa] font-bold mb-3">📊 Summary</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <span className="text-2xl font-bold text-[#569cd6]">{awardsData.length}</span>
            <p className="text-xs text-gray-500 mt-1">Total Awards</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-[#E8AE5B]">{awardsData.filter(a => a.project).length}</span>
            <p className="text-xs text-gray-500 mt-1">Project Awards</p>
          </div>
        </div>
      </div>
    </div>
  )
}

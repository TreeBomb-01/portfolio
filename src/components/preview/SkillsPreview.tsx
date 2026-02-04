import { skillCategories } from '@/data/portfolioData'

export default function SkillsPreview() {
  return (
    <div className="preview-content">
      <h1>🛠️ Technical Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="preview-card">
            <h3 className="text-[#dcdcaa] font-bold mb-3 border-b border-[#444] pb-2">{category.title}</h3>
            <p className="text-sm text-gray-400 mb-3">{category.description}</p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span key={skill} className="preview-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 preview-card">
        <h3 className="text-[#569cd6] font-bold mb-3">🎯 개발 철학</h3>
        <p className="text-gray-300">
          <strong>안정성</strong>과 <strong>확장성</strong>을 중시하며, 
          <strong>클린 아키텍처</strong>를 적용해 변화에 유연하고 유지보수가 쉬운 백엔드 시스템을 구축합니다.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">Clean Architecture</span>
          <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">Microservices</span>
          <span className="px-3 py-1 bg-orange-900/50 text-orange-300 rounded-full text-sm">API Design</span>
        </div>
      </div>
    </div>
  )
}

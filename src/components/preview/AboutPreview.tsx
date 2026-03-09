import { philosophyData, educationData, contactInfo } from '@/data/portfolioData'

export default function AboutPreview() {
  return (
    <div className="preview-content">
      <h1>👨‍💻 About Me</h1>
      <p className="text-lg text-gray-300">
        안녕하세요, <strong className="text-[#569cd6]">&quot;안정성과 확장성&quot;</strong>을 최우선으로 생각하는 백엔드 개발자 <strong>허태범</strong>입니다.
      </p>

      {/* 개발 철학 */}
      <h2>💡 개발 철학</h2>
      <div className="space-y-4">
        {philosophyData.map((philosophy, index) => (
          <div key={index} className="preview-card border-l-4 border-[#569cd6]">
            <h3 className="text-[#dcdcaa] font-bold mb-2">{philosophy.title}</h3>
            <p className="text-gray-300 text-sm">{philosophy.description}</p>
          </div>
        ))}
      </div>

      {/* 학력 */}
      <h2>🎓 Education</h2>
      <div className="relative border-l border-gray-700 ml-4 pl-6 space-y-4">
        {educationData.map((edu, index) => (
          <div key={index} className="relative">
            <span className="absolute -left-[31px] bg-[#2d2d2d] border border-gray-600 w-4 h-4 rounded-full flex items-center justify-center">
              <i className="fas fa-graduation-cap text-[8px] text-[#569cd6]"></i>
            </span>
            <span className="text-sm text-[#569cd6]">{edu.period}</span>
            <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
            <p className="text-gray-400 text-sm">{edu.detail}</p>
          </div>
        ))}
      </div>

      {/* 연락처 */}
      <h2>📞 Contact</h2>
      <div className="preview-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-[#569cd6] transition-colors">
            <i className="fas fa-phone text-[#4ec9b0]"></i>
            <span>{contactInfo.phone}</span>
          </a>
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-gray-300 hover:text-[#569cd6] transition-colors">
            <i className="fas fa-envelope text-[#dcdcaa]"></i>
            <span>{contactInfo.email}</span>
          </a>
          <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-[#569cd6] transition-colors">
            <i className="fab fa-github text-white"></i>
            <span>{contactInfo.github}</span>
          </a>
          <a href={`https://${contactInfo.portfolio}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-[#569cd6] transition-colors">
            <i className="fas fa-globe text-[#569cd6]"></i>
            <span>{contactInfo.portfolio}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

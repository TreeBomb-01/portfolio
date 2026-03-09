import { Project } from '@/data/portfolioData'

interface ProjectPreviewProps {
  project: Project
}

export default function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <div className="preview-content">
      {/* 1. 타이틀 및 주제 */}
      <h1>📂 {project.title}</h1>
      {project.topic && (
        <h3 className="text-[#569cd6] text-lg mt-1 mb-2 font-medium">{project.topic}</h3>
      )}
      <p className="text-gray-300 mb-4">{project.description}</p>

      {/* 2. 메타 정보 (카테고리, 기간, 인원, 역할, 수상) */}
      <div className="flex flex-wrap items-center gap-3 mb-8 bg-[#1e1e1e] p-3 rounded-lg border border-[#333]">
        <span className="preview-tag">{project.category}</span>
        <span className="text-sm text-gray-400">🗓️ {project.period}</span>
        
        {project.teamSize && (
          <span className="text-sm text-gray-400">👥 {project.teamSize}</span>
        )}
        
        {project.role && (
          <span className="text-sm text-[#ce9178]">🧑‍💻 {project.role}</span>
        )}
        
        {project.award && (
          <span className="px-2 py-1 bg-yellow-900/50 text-yellow-300 text-xs rounded-full flex items-center gap-1">
            🏆 {project.award}
          </span>
        )}
      </div>
      
      {/* 3. 성과 및 결과 (있을 경우에만 렌더링) */}
      {project.results && project.results.length > 0 && (
        <>
          <h2>✨ 성과 및 결과</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2 ml-2">
            {project.results.map((result, index) => (
              <li key={index} className="text-sm md:text-base">{result}</li>
            ))}
          </ul>
        </>
      )}

      {/* 4. 사용 기술 */}
      <h2>🛠 사용 기술</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map(tech => (
          <span key={tech} className="preview-tag">{tech}</span>
        ))}
      </div>

      {/* 5. 주요 기여사항 */}
      <h2>💻 주요 기여사항</h2>
      <div className="space-y-4 mb-8">
        {project.contributions.map((contrib, index) => (
          <div key={index} className="preview-card border-l-4 border-[#569cd6] p-4 bg-[#1e1e1e] rounded-r">
            <h3 className="text-white font-semibold mb-2">{contrib.title}</h3>
            <p className="text-sm text-gray-400 mb-3">{contrib.description}</p>
            <div className="flex flex-wrap gap-1">
              {contrib.technologies.map(tech => (
                <span key={tech} className="px-2 py-1 bg-[#2d2d2d] text-gray-300 text-xs rounded border border-[#444]">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 6. 관련 링크 (GitHub & 배포 링크 & 테스트 계정) */}
      <div className="flex flex-wrap gap-3 mt-6 border-t border-[#333] pt-6">
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] text-[#569cd6] rounded hover:bg-[#3d3d3d] transition-colors font-medium"
          >
            <i className="fab fa-github"></i>
            GitHub 코드 보기
          </a>
        )}
        
        {project.deploymentUrl && (
          <a 
            href={project.deploymentUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#007acc] text-white rounded hover:bg-[#005f9e] transition-colors font-medium"
          >
            <i className="fas fa-external-link-alt"></i>
            서비스 체험하기
          </a>
        )}
      </div>

      {/* 테스트 계정 정보 */}
      {project.testAccount && (
        <div className="mt-4 p-4 bg-[#252526] rounded-lg border border-[#444]">
          <div className="flex items-center gap-2 mb-2">
            <i className="fas fa-key text-[#dcdcaa]"></i>
            <span className="text-[#dcdcaa] font-semibold">테스트 계정</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-500">ID:</span>
              <code className="ml-2 px-2 py-1 bg-[#1e1e1e] text-[#ce9178] rounded">{project.testAccount.id}</code>
            </div>
            <div>
              <span className="text-gray-500">PW:</span>
              <code className="ml-2 px-2 py-1 bg-[#1e1e1e] text-[#ce9178] rounded">{project.testAccount.password}</code>
            </div>
          </div>
          {project.testAccount.note && (
            <p className="text-xs text-gray-500 mt-2 italic">{project.testAccount.note}</p>
          )}
        </div>
      )}

      {/* 7. 문제 해결 (Problem Solving) */}
      {project.problemSolving && project.problemSolving.length > 0 && (
        <>
          <h2 className="mt-10">🚨 문제 해결</h2>
          <div className="space-y-6">
            {project.problemSolving.map((ps, index) => (
              <details key={index} className="group bg-[#1e1e1e] rounded-lg border border-[#333] overflow-hidden">
                <summary className="flex items-center gap-3 p-4 cursor-pointer hover:bg-[#252526] transition-colors">
                  <i className="fas fa-chevron-right text-[#569cd6] text-sm transition-transform group-open:rotate-90"></i>
                  <span className="text-white font-medium">{ps.title}</span>
                </summary>
                <div className="p-4 pt-0 space-y-4 border-t border-[#333]">
                  <div>
                    <h4 className="text-[#f14c4c] font-semibold mb-2 flex items-center gap-2">
                      <i className="fas fa-exclamation-circle text-sm"></i>
                      상황 및 문제 인식
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed pl-5">{ps.situation}</p>
                  </div>
                  <div>
                    <h4 className="text-[#4ec9b0] font-semibold mb-2 flex items-center gap-2">
                      <i className="fas fa-lightbulb text-sm"></i>
                      해결 방안
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed pl-5">{ps.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-[#569cd6] font-semibold mb-2 flex items-center gap-2">
                      <i className="fas fa-check-circle text-sm"></i>
                      결과 및 성과
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed pl-5">{ps.result}</p>
                  </div>
                  <div className="bg-[#252526] p-3 rounded border-l-4 border-[#dcdcaa]">
                    <h4 className="text-[#dcdcaa] font-semibold mb-1 flex items-center gap-2">
                      <i className="fas fa-graduation-cap text-sm"></i>
                      배운 점
                    </h4>
                    <p className="text-gray-400 text-sm italic pl-5">{ps.lesson}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </>
      )}

      {/* 8. Q&A */}
      {project.qna && project.qna.length > 0 && (
        <>
          <h2 className="mt-10">💬 Q&A</h2>
          <div className="space-y-4">
            {project.qna.map((qa, index) => (
              <div key={index} className="bg-[#1e1e1e] rounded-lg border border-[#333] p-4">
                <div className="flex items-start gap-3 mb-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#569cd6] text-white text-xs font-bold rounded-full flex items-center justify-center">Q</span>
                  <p className="text-white font-medium">{qa.question}</p>
                </div>
                <div className="flex items-start gap-3 pl-9">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#4ec9b0] text-white text-xs font-bold rounded-full flex items-center justify-center">A</span>
                  <p className="text-gray-300 text-sm leading-relaxed">{qa.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
export default function Skills() {
  const skillCategories = [
    {
      title: "🛠 백엔드 개발",
      description: "안정적이고 확장 가능한 서버 시스템 구축",
      icon: "🛠",
      skills: ["Spring Boot", "FastAPI", "RESTful API"]
    },
    {
      title: "🗄 데이터베이스 & 캐싱",
      description: "효율적인 데이터 저장 및 관리 시스템 설계",
      icon: "🗄",
      skills: ["MySQL", "PostgreSQL", "Redis", "Database Design"]
    },
    {
      title: "☁️ 클라우드 & 인프라",
      description: "확장 가능한 클라우드 인프라 구축 및 관리",
      icon: "☁️",
      skills: ["Docker", "Linux", "Nginx"]
    },
    {
      title: "🔄 DevOps & 자동화",
      description: "CI/CD 파이프라인과 배포 자동화 구현",
      icon: "🔄",
      skills: ["Jenkins", "Git", "GitHub Actions", "Docker Compose", "Shell Script"]
    },
    {
      title: "💻 프로그래밍 언어",
      description: "다양한 언어로 효율적인 백엔드 로직 구현",
      icon: "💻",
      skills: ["Java", "Python", "SQL"]
    },
    {
      title: "🤖 AI & 데이터 처리",
      description: "머신러닝 모델 서빙 및 대용량 데이터 처리",
      icon: "🤖",
      skills: ["PyTorch", "OpenCV", "Data Pipeline", "Model Serving"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              기술 스택
            </h2>
            <p className="text-xl text-gray-600">
              백엔드 개발에 활용하는 기술 분야별 역량입니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-gray-200 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 추가 정보 섹션 */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🎯 개발 철학
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                <strong>안정성</strong>과 <strong>확장성</strong>을 중시하며, 
                <strong>클린 아키텍처</strong>를 적용해 
                변화에 유연하고 유지보수가 쉬운 백엔드 시스템을 구축합니다.

              </p>
              <div className="flex justify-center mt-6 space-x-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Clean Architecture
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Microservices
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  API Design
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
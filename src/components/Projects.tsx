export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce API Server",
      description: "상품 관리, 주문 처리, 결제 시스템을 포함한 RESTful API 서버입니다. JWT 인증과 Redis 캐싱을 활용하여 성능을 최적화했습니다.",
      image: "from-blue-500 to-blue-700",
      tags: ["Node.js", "Express", "MySQL", "Redis", "JWT"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "실시간 채팅 시스템",
      description: "WebSocket을 활용한 실시간 채팅 애플리케이션입니다. 다중 채팅방 지원과 메시지 히스토리 관리 기능을 구현했습니다.",
      image: "from-green-500 to-green-700",
      tags: ["Java", "Spring Boot", "WebSocket", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "게시판 API",
      description: "CRUD 기능을 갖춘 게시판 백엔드 API입니다. 페이징, 검색, 파일 업로드 기능과 관리자 권한 시스템을 구현했습니다.",
      image: "from-purple-500 to-purple-700",
      tags: ["Python", "Django", "PostgreSQL", "AWS S3"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "마이크로서비스 프로젝트",
      description: "Docker와 Kubernetes를 활용한 마이크로서비스 아키텍처입니다. 각 서비스는 독립적으로 배포 가능하며 API Gateway를 통해 통신합니다.",
      image: "from-orange-500 to-orange-700",
      tags: ["Docker", "Kubernetes", "Node.js", "Nginx"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 5,
      title: "데이터 분석 API",
      description: "대용량 데이터 처리를 위한 분석 API입니다. 데이터 파이프라인을 구축하고 실시간 데이터 처리 및 시각화를 지원합니다.",
      image: "from-red-500 to-red-700",
      tags: ["Python", "FastAPI", "Apache Kafka", "ElasticSearch"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "인증 서버",
      description: "OAuth 2.0과 JWT를 활용한 중앙 집중식 인증 서버입니다. 다중 애플리케이션에서 사용할 수 있는 SSO(Single Sign-On) 기능을 제공합니다.",
      image: "from-indigo-500 to-indigo-700",
      tags: ["Java", "Spring Security", "OAuth 2.0", "MySQL"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              프로젝트
            </h2>
            <p className="text-xl text-gray-600">
              제가 작업한 프로젝트들을 소개합니다
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">주요 프로젝트</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div key={project.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`h-48 bg-gradient-to-r ${project.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href={project.demoUrl}
                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-center"
                      >
                        데모 보기
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="flex-1 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded-lg font-medium transition-colors text-center"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">기타 프로젝트</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div key={project.id} className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className={`h-32 bg-gradient-to-r ${project.image}`}></div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <a 
                        href={project.demoUrl}
                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded text-sm font-medium transition-colors text-center"
                      >
                        데모
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="flex-1 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white py-1 px-3 rounded text-sm font-medium transition-colors text-center"
                      >
                        코드
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">더 많은 프로젝트가 궁금하신가요?</p>
            <a 
              href="#contact" 
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg font-semibold transition-colors"
            >
              연락하기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
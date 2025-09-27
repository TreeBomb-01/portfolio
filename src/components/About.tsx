export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              소개
            </h2>
            <p className="text-xl text-gray-600">
              기술과 경험에 대해 알아보세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-80 bg-gradient-to-br from-gray-600 to-slate-800 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                  </svg>
                  <p className="text-lg font-semibold">Backend Development</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                안정성과 확장성을 중시하는 백엔드 개발자
              </h3>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  안정적이고 확장 가능한 서버 아키텍처 구축에 집중하는 백엔드 개발자입니다. 
                  프로젝트와 공모전을 통해 단순 기능 구현을 넘어서 운영 효율성과 신뢰성을 높이는 시스템 설계를 경험했습니다. 
                  사소한 장애도 곧바로 사용자 신뢰와 연결되는 금융 서비스 특성을 염두에 두고, 
                  안정성과 확장성을 동시에 만족하는 서비스를 만드는 것을 목표로 하고 있습니다.
                </p>
                
                <p>
                  Java, Spring Boot, JPA를 활용한 백엔드 개발 경험과 PostgreSQL·MySQL 기반 데이터베이스 설계 경험을 보유하고 있습니다. 
                  또한 Redis Streams 기반 작업 큐, Docker·Jenkins를 통한 CI/CD 파이프라인, 
                  VPN·Reverse Proxy를 통한 보안 설계 등 다양한 인프라 경험을 통해 운영 환경 전반을 고려한 백엔드 역량을 다져왔습니다.
                </p>
                
                <p>
                  효율적인 설계와 운영 개선을 통해 처리 속도를 단축하고 안정성을 강화했던 경험을 살려, 
                  신뢰할 수 있는 백엔드 시스템을 구축하는 데 기여하고자 합니다.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  주요 관심 분야
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                    안정성과 확장성을 고려한 서버 아키텍처 설계
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                    RESTful API 설계 및 개발, 최적화
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                    데이터베이스 모델링 및 성능 개선
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                    분산 처리 및 대규모 트래픽 대응
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                    CI/CD 자동화 및 운영 효율화
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                    클라우드·보안 환경에서의 안정적 서비스 운영
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
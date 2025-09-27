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
                안정적인 시스템을 구축하는 백엔드 개발자
              </h3>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  서버 사이드 개발과 시스템 아키텍처 설계에 집중하는 백엔드 개발자입니다. 
                  확장 가능하고 안정적인 서버 시스템을 구축하여 비즈니스 로직을 효율적으로 
                  처리할 수 있도록 하는 것이 목표입니다.
                </p>
                
                <p>
                  Node.js, Java, Python 등 다양한 백엔드 기술을 활용하며, 
                  RESTful API 설계와 데이터베이스 최적화에 관심이 많습니다.
                </p>
                
                <p>
                  클린 코드 작성과 효율적인 알고리즘 구현을 통해 
                  성능과 유지보수성을 모두 고려한 시스템을 개발합니다.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  주요 관심 분야
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                    RESTful API 설계 및 개발
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                    데이터베이스 모델링 및 최적화
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                    서버 성능 최적화
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                    마이크로서비스 아키텍처
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                    클라우드 인프라 구축
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
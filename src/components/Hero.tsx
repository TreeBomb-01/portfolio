export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-700 to-slate-900 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            안녕하세요!👋<br />
            <span className="text-gray-700">백엔드 개발자</span><br />
            입니다
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            안정적이고 확장 가능한 서버 시스템을 구축합니다.<br />
            효율적인 API 설계와 데이터 처리에 집중하며, 새로운 기술을 학습하고 적용하는 것을 즐깁니다.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a 
              href="#projects"
              className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              프로젝트 보기
            </a>
            <a 
              href="#contact"
              className="border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              연락하기
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
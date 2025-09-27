export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gray-400 mb-4">
              Backend Dev
            </h3>
            <p className="text-gray-300">
              안정적이고 확장 가능한 시스템을 구축하는<br />
              백엔드 개발자입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-gray-400 transition-colors">소개</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-gray-400 transition-colors">스킬</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-gray-400 transition-colors">프로젝트</a></li>
              {/* <li><a href="#contact" className="text-gray-300 hover:text-gray-400 transition-colors">연락처</a></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">연락처</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 htb010630@gmail.com</p>
              {/* <p>� 백엔드 개발 전문</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-gray-400 transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-gray-300 hover:text-gray-400 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-300 hover:text-gray-400 transition-colors">
                  Tech Blog
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Backend Developer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
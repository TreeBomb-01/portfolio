export default function AboutPreview() {
  return (
    <div className="preview-content">
      <h1>👨‍💻 About Me</h1>
      <p className="text-lg text-gray-300">
        안녕하세요, <strong className="text-[#569cd6]">&quot;안정성과 확장성&quot;</strong>을 최우선으로 생각하는 백엔드 개발자 <strong>허태범</strong>입니다.
      </p>
      
      <div className="mt-6 space-y-4 text-gray-300">
        <p>
          안정적이고 확장 가능한 서버 아키텍처 구축에 집중하는 백엔드 개발자입니다. 
          프로젝트와 공모전을 통해 단순 기능 구현을 넘어서 운영 효율성과 신뢰성을 높이는 시스템 설계를 경험했습니다.
        </p>
        
        <p>
          Java, Spring Boot, JPA를 활용한 백엔드 개발 경험과 PostgreSQL·MySQL 기반 데이터베이스 설계 경험을 보유하고 있습니다. 
          또한 Redis Streams 기반 작업 큐, Docker·Jenkins를 통한 CI/CD 파이프라인, 
          VPN·Reverse Proxy를 통한 보안 설계 등 다양한 인프라 경험을 통해 운영 환경 전반을 고려한 백엔드 역량을 다져왔습니다.
        </p>
      </div>

      <h2>주요 관심 분야</h2>
      <ul className="space-y-2 text-gray-300">
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#569cd6] rounded-full"></span>
          안정성과 확장성을 고려한 서버 아키텍처 설계
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#569cd6] rounded-full"></span>
          RESTful API 설계 및 개발, 최적화
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#569cd6] rounded-full"></span>
          데이터베이스 모델링 및 성능 개선
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#569cd6] rounded-full"></span>
          분산 처리 및 대규모 트래픽 대응
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#569cd6] rounded-full"></span>
          CI/CD 자동화 및 운영 효율화
        </li>
      </ul>
    </div>
  )
}

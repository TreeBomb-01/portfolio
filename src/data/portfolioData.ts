// 프로젝트 기여사항 타입
export interface Contribution {
  title: string
  description: string
  technologies: string[]
}

// 수상 경력 타입
export interface Award {
  date: string
  title: string
  grade: string
  project?: string
  organizer: string
}

// 수상 경력 데이터 (프로젝트 정보에서 추출)
export const awardsData: Award[] = [
  {
    date: '2025.10',
    title: 'GreenPoint - AI 자원 순환 가치 플랫폼',
    grade: '장려상',
    project: 'project4',
    organizer:'SW 중심대학 연합 해커톤'
  },
  {
    date: '2025.11',
    title: 'CCTV 영상 데이터를 이용한 도로 노후화 탐지 시스템',
    grade: '은상',
    project: 'project1',
    organizer: 'KOREN NET-챌린지 캠프 시즌 12'
  },
  {
    date: '2025.12',
    title: '헬스케어 웹앱 프로젝트 (LevelUpFit)',
    grade: '우수상',
    project: 'project2',
    organizer: '학술제'
  }
]

// 프로젝트 타입
export interface Project {
  id: string
  title: string
  description: string
  category: string
  period: string
  award?: string
  contributions: Contribution[]
  technologies: string[]
  githubUrl?: string
}

// 스킬 카테고리 타입
export interface SkillCategory {
  title: string
  description: string
  skills: string[]
}

// 프로젝트 데이터 (기존 Projects.tsx에서 가져옴)
export const projectsData: Project[] = [
  {
    id: 'project1',
    title: "CCTV 영상 데이터를 이용한 도로 노후화 탐지 시스템",
    description: "전국 CCTV를 통해 도로 상태를 파악하고 데이터 기반 유지보수 체계를 구축",
    category: "공모전",
    period: "2025.07 - 2025.10",
    award: "은상",
    contributions: [
      { title: "백엔드 서버 설계 및 구현", description: "Spring Boot 기반 RESTful API 설계/구현, 인증/에러 표준화, 페이징/검색 최적화", technologies: ["Spring Boot", "JPA", "MyBatis", "MySQL"] },
      { title: "서버 인프라 구축 및 자동화", description: "Docker·Jenkins·OpenStack으로 CI/CD 파이프라인 구축, 브랜치별 자동 배포 및 롤백", technologies: ["Docker", "Jenkins", "OpenStack"] },
      { title: "Redis 작업 큐 & 성능 개선", description: "Redis Streams + Consumer Group 재설계, 유령 컨슈머 정리·메시지 환수·리트라이·워커 병렬화로 처리량 향상 (4,600건 배치 7h → 1h 24m)", technologies: ["Redis"] },
      { title: "영상 데이터 처리 파이프라인 개발", description: "FastAPI·FFmpeg·OpenCV로 대용량 영상 전처리/프레임 추출 파이프라인 구현, 비동기 처리와 백프레셔 적용", technologies: ["FastAPI", "OpenCV", "FFmpeg"] },
      { title: "AI 모델 서빙 API 구축", description: "YOLO 기반 도로 손상 탐지 모델 서빙, 배치/실시간 추론 엔드포인트 제공 및 로깅/모니터링", technologies: ["FastAPI", "YOLO", "PyTorch"] },
      { title: "데이터베이스 스키마 설계 및 최적화", description: "CCTV·검출결과·이미지 메타데이터 스키마 설계, 복합/공간 인덱스(Point, SPATIAL)로 지역 기반 조회 가속", technologies: ["MySQL", "ERDCloud"] }
    ],
    technologies: ["Spring Boot", "FastAPI", "MySQL", "Redis", "Jenkins", "YOLO", "OpenCV", "PyTorch"],
    githubUrl: "https://github.com/Helios-CCTV/",
  },
  {
    id: 'project2',
    title: "헬스케어 웹앱 프로젝트",
    description: "영상 데이터 기반 운동 자세 분석 및 피드백 웹앱 구축",
    category: "캡스톤디자인",
    period: "2025.03 - 2025.12",
    award: "우수상",
    contributions: [
      { title: "백엔드 서버 설계 및 구현", description: "Spring Boot 기반 RESTful API 설계/구현, 인증/에러 표준화, JWT 기반 인증/인가 구현", technologies: ["Spring Boot", "Spring Security", "JPA", "PostgreSQL", "WebSocket", "Kakao login API"] },
      { title: "AI 기반 운동 자세 분석 및 모델 서빙 시스템", description: "영상 데이터 기반 운동 자세 분석 모델 개발 및 서빙", technologies: ["FastAPI", "MediaPipe", "openCV"] },
      { title: "서버 인프라 구축 및 자동화", description: "Docker·Jenkins·OpenStack으로 CI/CD 파이프라인 구축, 브랜치별 자동 배포", technologies: ["Docker", "Jenkins", "proxmox"] },
      { title: "파일 업로드 및 이미지 처리", description: "AWS S3를 활용한 파일 업로드 및 관리", technologies: ["AWS S3", "MinIO"] }
    ],
    technologies: ["Spring boot", "Spring Security", "JPA", "MyBatis", "WebSocket", "FastAPI", "MediaPipe", "openCV", "OpenAI API", "PostgreSQL", "AWS S3", "Proxmox", "Docker", "Jenkins"],
    githubUrl: "https://github.com/LevelUpFit",
  },
  {
    id: 'project3',
    title: "금융 + 메신저 프로젝트",
    description: "마이크로서비스 아키텍처 기반 모의투자 애플리케이션 구현",
    category: "개인",
    period: "2024.10 - 현재 (진행중)",
    contributions: [
      { title: "상태관리 및 서버 통신 구현", description: "Spring Boot WebSocket을 활용한 실시간 메시징 시스템 개발", technologies: ["React Native", "Zustand", "React Query"] }
    ],
    technologies: ["React Native", "Zustand", "React Query"],
    githubUrl: "https://github.com/ST00CK",
  },
  {
    id: 'project4',
    title: "GreenPoint - AI 자원 순환 가치 플랫폼",
    description: "AI 이미지 인식과 ESG 데이터 자동화를 결합한 자원 순환 플랫폼",
    category: "SW 중심대학 연합 해커톤",
    period: "2025.10 - 2025.10 (2일)",
    contributions: [
      { title: "백엔드 서버 설계 및 구현", description: "Spring Boot 기반 RESTful API 설계/구현, 인증/에러 표준화", technologies: ["Spring Boot", "Spring Security", "MyBatis", "MySQL", "Kakao login API"] }
    ],
    technologies: ["Spring Boot", "Spring Security", "MyBatis", "MySQL", "redis", "Kakao login API", "openAI API"],
    githubUrl: "https://github.com/TreeBomb-01/greenpoint-ai-platform",
  },
  {
    id: 'project5',
    title: "데이트코스 추천 웹앱 프로젝트",
    description: "사용자의 개인의 취미에 맞춰 데이트 코스 추천 및 계획 웹앱 구축",
    category: "캡스톤디자인",
    period: "2023.09 - 2023.12 (3개월)",
    contributions: [
      { title: "기획 및 아키텍처 설계", description: "팀장으로 전체적인 아키텍처의 설계와 운영을 담당", technologies: [] },
      { title: "백엔드 서버 설계 및 구현", description: "Spring Boot 기반 RESTful API 설계/구현, 인증/에러 표준화", technologies: ["Spring Boot", "Spring Security", "MyBatis", "MySQL", "Kakao login API"] }
    ],
    technologies: ["Spring Boot", "Spring Security", "MyBatis", "MySQL", "Kakao login API"],
    githubUrl: "https://github.com/cosecose",
  },
  {
    id: 'project6',
    title: "숙박 예약 시스템",
    description: "숙박 예약 웹 서비스를 벤치마킹하여 Spring Boot을 활용해 구현한 프로젝트입니다.",
    category: "코리아 IT 아카데미",
    period: "2024.02 - 2024.02 (1개월)",
    contributions: [
      { title: "숙박 업소 카테고리 및 정보 관리", description: "숙박 업소 카테고리 분류 및 기본 정보 관리 기능 구현", technologies: ["Spring", "Oracle DB"] }
    ],
    technologies: ["Spring"],
    githubUrl: "https://github.com/TreeBomb-01/web",
  },
  {
    id: 'project7',
    title: "쇼핑몰 서비스 구현",
    description: "Java GUI를 통해 상품 관리, 회원 관리, 주문 관리 기능을 제공하는 쇼핑몰 서비스 구현",
    category: "코리아 IT 아카데미",
    period: "2023.11 - 2023.11 (1개월)",
    contributions: [
      { title: "상품 등록 및 관리 기능 구현", description: "Java GUI를 통해 상품 등록 및 관리 기능을 구현", technologies: ["Java", "SourceTree"] }
    ],
    technologies: ["Java", "SourceTree"],
    githubUrl: "https://github.com/TreeBomb-01/WebMiniProject",
  }
]

// 스킬 데이터 (기존 Skills.tsx에서 가져옴)
export const skillCategories: SkillCategory[] = [
  { title: "🛠 백엔드 개발", description: "안정적이고 확장 가능한 서버 시스템 구축", skills: ["Spring Boot", "FastAPI", "RESTful API"] },
  { title: "🗄 데이터베이스 & 캐싱", description: "효율적인 데이터 저장 및 관리 시스템 설계", skills: ["MySQL", "PostgreSQL", "Redis", "Database Design"] },
  { title: "☁️ 클라우드 & 인프라", description: "확장 가능한 클라우드 인프라 구축 및 관리", skills: ["Docker", "Linux", "Nginx"] },
  { title: "🔄 DevOps & 자동화", description: "CI/CD 파이프라인과 배포 자동화 구현", skills: ["Jenkins", "Git", "GitHub Actions", "Docker Compose", "Shell Script"] },
  { title: "💻 프로그래밍 언어", description: "다양한 언어로 효율적인 백엔드 로직 구현", skills: ["Java", "Python", "SQL"] },
  { title: "🤖 AI & 데이터 처리", description: "머신러닝 모델 서빙 및 대용량 데이터 처리", skills: ["PyTorch", "OpenCV", "Data Pipeline", "Model Serving"] }
]

// 사이드바 파일 정보
export const sidebarFiles = {
  main: [
    { id: 'readme', name: 'README.md', icon: 'fab fa-markdown', iconColor: 'text-[#519aba]' },
    { id: 'about', name: 'About.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]' },
  ],
  mainProjects: [
    { id: 'project1', name: 'CCTV_Detection.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]' },
    { id: 'project2', name: 'HealthCare.py', icon: 'fab fa-python', iconColor: 'text-[#3572A5]' },
    { id: 'project3', name: 'FinanceMessenger.js', icon: 'fab fa-js', iconColor: 'text-[#f1e05a]' },
  ],
  subProjects: [
    { id: 'project4', name: 'DateCourse.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]' },
    { id: 'project5', name: 'Accommodation.ts', icon: 'fas fa-file-code', iconColor: 'text-gray-400' },
    { id: 'project6', name: 'Shopping.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]' },
  ],
  other: [
    { id: 'skills', name: 'Skills.yml', icon: 'fas fa-cogs', iconColor: 'text-[#cb171e]' },
    { id: 'awards', name: 'Awards.log', icon: 'fas fa-trophy', iconColor: 'text-[#E8AE5B]' },
  ]
}

// Quick Access 정보
export const quickAccessItems = [
  { id: 'about', name: 'About.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]', description: '소개 및 철학' },
  { id: 'skills', name: 'Skills.yml', icon: 'fas fa-cogs', iconColor: 'text-[#cb171e]', description: '기술 스택 설정' },
  { id: 'project1', name: 'Projects', icon: 'fas fa-folder-open', iconColor: 'text-[#E8AE5B]', description: '프로젝트 코드' },
  { id: 'awards', name: 'Awards.log', icon: 'fas fa-trophy', iconColor: 'text-[#E8AE5B]', description: '수상 및 자격증' },
]

// 섹션 정보 (TabBar용)
export const sectionInfo: Record<string, { filename: string; icon: string; iconColor: string }> = {
  readme: { filename: 'README.md', icon: 'fab fa-markdown', iconColor: 'text-[#519aba]' },
  about: { filename: 'About.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]' },
  skills: { filename: 'Skills.yml', icon: 'fas fa-cogs', iconColor: 'text-[#cb171e]' },
  awards: { filename: 'Awards.log', icon: 'fas fa-trophy', iconColor: 'text-[#E8AE5B]' },
  project1: { filename: 'CCTV_Detection.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]' },
  project2: { filename: 'HealthCare.py', icon: 'fab fa-python', iconColor: 'text-[#3572A5]' },
  project3: { filename: 'FinanceMessenger.js', icon: 'fab fa-js', iconColor: 'text-[#f1e05a]' },
  project4: { filename: 'DateCourse.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]' },
  project5: { filename: 'Accommodation.ts', icon: 'fas fa-file-code', iconColor: 'text-gray-400' },
  project6: { filename: 'Shopping.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]' },
}

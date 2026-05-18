// 프로젝트 기여사항 타입
export interface Contribution {
  title: string
  description: string
  technologies: string[]
}

// 문제 해결 타입
export interface ProblemSolving {
  title: string
  situation: string
  solution: string
  result: string
  lesson: string
}

// Q&A 타입
export interface QnA {
  question: string
  answer: string
}

// 학력 타입
export interface Education {
  period: string
  institution: string
  detail: string
}

// 개발 철학 타입
export interface Philosophy {
  title: string
  description: string
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
    organizer: 'SW 중심대학 연합 해커톤'
  },
  {
    date: '2025.11',
    title: 'Helios - 전국 CCTV 기반 도로 노후화 탐지 시스템',
    grade: '은상',
    project: 'project2',
    organizer: 'KOREN NET-챌린지 캠프 시즌 12'
  },
  {
    date: '2025.12',
    title: 'LevelUpFit - 영상 데이터 기반 운동 자세 분석 웹앱',
    grade: '우수상',
    project: 'project1',
    organizer: '목원대학교 컴퓨터공학과 학술제'
  }
]

// 프로젝트 타입
export interface Project {
  id: string
  title: string
  topic?: string
  description: string
  category: string
  period: string
  teamSize?: string
  role?: string
  results?: string[]
  award?: string
  contributions: Contribution[]
  technologies: string[]
  problemSolving?: ProblemSolving[]
  qna?: QnA[]
  githubUrl?: string
  deploymentUrl?: string
  testAccount?: {
    id: string
    password: string
    note?: string
  }
}

// 스킬 카테고리 타입
export interface SkillCategory {
  title: string
  description: string
  skills: string[]
}

// 프로젝트 데이터
export const projectsData: Project[] = [
  {
    id: 'project1',
    title: "LevelUpFit",
    topic: "영상 데이터 기반 운동 자세 분석 및 피드백 웹앱",
    description: "운동 자세에 대한 불안감 해소와 효율적인 루틴 관리를 위한 웹 애플리케이션 서비스",
    category: "캡스톤 디자인",
    period: "2025.03 - 2025.11",
    teamSize: "2인 (프론트엔드 1, 백엔드 1)",
    role: "팀장, 백엔드/서버 (기여도 100%)",
    results: [
      "영상 처리 병목 현상 해결 - WebClient 비동기 파이프라인 도입으로 서버 스레드 점유 방지 및 UX 개선",
      "CI/CD 도입으로 개발 민첩성 및 배포 안정성 확보"
    ],
    award: "우수상",
    contributions: [
      {
        title: "인프라 아키텍처 설계 및 CI/CD",
        description: "Proxmox를 활용한 온프레미스 환경 가상화 및 역할별 VM(App, DB, Storage) 분리 구축. Docker와 Jenkins를 연동하여 GitHub Push부터 서버 배포까지 이어지는 무중단 CI/CD 파이프라인 자동화",
        technologies: ["Proxmox", "Docker", "Jenkins"]
      },
      {
        title: "대용량 데이터 처리 및 성능 최적화",
        description: "Spring Boot와 FastAPI(AI 서버) 간 통신에 WebClient를 도입하여 영상 분석 파이프라인을 비동기(Non-blocking)로 처리, 메인 서버의 병목 현상 방지. 대용량 영상 파일 처리를 위해 AWS S3 호환 자체 객체 스토리지(MinIO) 구축 및 스토리지 비용 절감",
        technologies: ["Spring WebClient", "MinIO", "AWS S3"]
      },
      {
        title: "핵심 비즈니스 로직 및 사용자 경험(UX) 개선",
        description: "WebSocket을 활용하여 무거운 영상 분석이 끝나는 즉시 클라이언트에게 새로고침 없이 실시간 알림 푸시. 분석된 데이터를 GPT-4o API와 연동하여 사용자 맞춤형 자연어 코칭 피드백 자동 생성 로직 구현",
        technologies: ["WebSocket", "OpenAI API"]
      }
    ],
    technologies: ["Spring Boot", "Spring Security", "JPA", "WebSocket", "WebClient", "FastAPI", "MediaPipe", "OpenCV", "OpenAI API", "PostgreSQL", "MinIO", "Proxmox", "Docker", "Jenkins"],
    problemSolving: [
      {
        title: "[비동기 아키텍처] 대용량 AI 분석 시 발생하는 서버 병목 및 UX 저하 해결",
        situation: "서버 병목 위험: 대용량 영상 데이터를 AI 서버(FastAPI)로 넘겨 분석하는 무거운 작업을 기존 동기식으로 처리할 경우, 응답을 기다리는 동안 Spring Boot의 스레드가 멈춰(Blocking) 다른 사용자의 API 요청까지 지연될 위험. UX 저하 문제: 사용자 또한 영상 분석이 완료될 때까지 빈 로딩 화면에서 대기해야 하므로, 앱의 다른 기능을 전혀 사용할 수 없는 치명적인 불편함이 존재",
        solution: "Spring WebFlux의 WebClient를 도입하여, AI 서버와의 통신을 비동기 논블로킹 방식으로 전면 개편. 메인 서버는 AI 서버에 분석 요청만 위임한 뒤 즉시 스레드를 반환하고, 분석이 완료되면 WebSocket을 통해 클라이언트에게 새로고침 없이 즉각적인 푸시 알림을 보내도록 설계",
        result: "대규모 트래픽 발생 시 메인 서버의 스레드 풀 고갈(Thread Pool Exhaustion) 문제를 선제적으로 차단하여 안정적인 확장이 가능한 아키텍처 기반 마련. 사용자가 분석을 백그라운드에 맡겨두고 대시보드 등 다른 기능을 즉시 사용할 수 있게 하여, 대기 시간으로 인한 UX 저하를 근본적으로 제거",
        lesson: "단순한 기능 구현을 넘어, 동기식 I/O가 스레드 풀에 미치는 영향을 분석하고 서버의 가용성(Availability)을 방어하는 아키텍처적 사고의 중요성을 배움"
      },
      {
        title: "[인코딩 최적화] 웹/모바일 영상 호환성 및 스트리밍 지연(UX) 해결",
        situation: "AI 분석이 완료된 영상(OpenCV 기본 생성)이 웹 브라우저(Safari, Chrome) 및 모바일 기기에서 재생되지 않는 호환성 문제 발생. 기존 방식(MJPG, mp4v 코덱)은 메타데이터가 파일 끝에 위치하여, 전체 영상 다운로드 전까지 재생 불가",
        solution: "파이프라인에 FFmpeg를 도입하여 웹 표준 코덱인 H.264(libx264)로 재인코딩. FFmpeg의 -movflags +faststart 옵션을 적용하여 메타데이터(moov atom)를 파일 앞부분으로 재배치하는 최적화 수행",
        result: "대부분의 디바이스와 브라우저에서의 영상 재생 호환성 문제를 해결. 대용량 영상의 전체 다운로드 없이 즉시 재생(Streaming)이 가능해져 사용자 체감 대기 시간을 획기적으로 단축",
        lesson: "백엔드 개발자라도 네트워크 스트리밍 원리와 클라이언트(브라우저)의 동작 방식까지 이해해야 완벽한 UX를 만들 수 있음을 깨달음"
      }
    ],
    qna: [
      {
        question: "프로젝트에서 가장 아쉬웠던 점은?",
        answer: "관리를 위해 App 서버와 DB를 한 곳에 둔 결과, 트래픽 증가 시 인프라 확장이 유연하지 못했던 점"
      },
      {
        question: "다음 프로젝트의 목표는?",
        answer: "마이크로서비스 아키텍처(MSA) 철학에 맞게 DB 환경을 독립적으로 분리하여, 진정한 의미의 확장성 있는 백엔드 시스템 구축"
      }
    ],
    githubUrl: "https://github.com/LevelUpFit",
    deploymentUrl: "https://levelupfit.treebomb.org",
    testAccount: {
      id: "test@test.test",
      password: "1234test",
      note: "본 서비스는 모바일 환경에 최적화되어 있습니다. 스마트폰으로 접속하시거나 웹 브라우저 가로 폭을 줄여서 확인해 주시길 권장합니다."
    }
  },
  {
    id: 'project2',
    title: "Helios - 전국 CCTV 기반 도로 노후화 탐지 시스템",
    description: "전국 CCTV를 통해 도로 상태를 파악하고 데이터 기반으로 유지 보수 체계를 구축",
    category: "NET-챌린지 캠프 시즌 12",
    period: "2025.07 - 2025.10",
    teamSize: "2인 (프론트엔드 1, 백엔드 1)",
    role: "백엔드/서버 (기여도 100%)",
    results: [
      "대규모 데이터 처리를 위한 Redis Stream 기반 분산 파이프라인 구축 (영상 처리 시간 86% 단축)",
      "GPU 메모리 가드 및 동시성 제어로 AI 서버 OOM(메모리 초과) 완벽 방지",
      "결함 허용(Fault-Tolerance) 시스템 도입으로 데이터 유실 0% 달성"
    ],
    award: "은상",
    contributions: [
      {
        title: "OpenStack 기반 다중 VM 분산 인프라 설계",
        description: "KOREN OpenStack 환경을 활용하여 메인 서버, AI 워커, DB를 물리적으로 격리한 분산 아키텍처를 설계. Docker와 Jenkins를 연동하여 여러 대의 분산된 VM 환경에서도 신속하고 일관된 무중단 배포 파이프라인을 구축",
        technologies: ["OpenStack", "Docker", "Jenkins"]
      },
      {
        title: "대규모 트래픽 처리를 위한 Redis Stream 비동기 파이프라인 설계",
        description: "동기 처리로 인한 서버 병목 현상을 방지하기 위해, 메인 서버와 AI 워커 간의 결합도를 낮춘 분산 메시징 큐 시스템을 도입하여 영상 처리 시간을 86% 단축",
        technologies: ["Redis Streams", "Consumer Group"]
      },
      {
        title: "자원 모니터링 및 결함 허용 기반 고가용성 확보",
        description: "AI 모델(YOLOv8)의 GPU 메모리 초과(OOM)를 방어하는 메모리 가드 로직을 구현. 장애 발생 시 데이터 유실을 막는 DLQ 및 자가 복구(Auto-Healing) 환경을 구축하여 무중단 영상 분석 시스템을 완성",
        technologies: ["YOLOv8", "DLQ", "Auto-Healing"]
      }
    ],
    technologies: ["Spring Boot", "FastAPI", "MySQL", "Redis Streams", "Docker", "Jenkins", "OpenStack", "YOLOv8", "OpenCV", "FFmpeg", "PyTorch"],
    problemSolving: [
      {
        title: "[정확도 최적화] 동적 장애물(차량) 노이즈 제거 전처리를 통한 AI 오탐지 최소화",
        situation: "실시간 도로 CCTV 영상을 YOLOv8 모델에 그대로 입력할 경우, 주행 중인 차량이 도로의 파손 부위를 가리거나 차량의 일부를 노후화로 오인식하여 전체적인 AI 탐지 정확도가 크게 떨어지는 문제 발생",
        solution: "FastAPI 워커의 전처리 파이프라인에 배경 추출(Background Extraction) 로직을 구현. HLS 스트림을 약 15초간 캡처하여 프레임들을 분석하고, 픽셀별로 가장 빈도수가 높은 RGB 값을 추출하는 방식으로 움직이는 차량을 지워낸 '순수 도로 배경 이미지'를 합성",
        result: "AI 모델에 차량 노이즈가 완벽히 제거된 깨끗한 도로 데이터만을 공급함으로써, 오탐지(False Positive)를 획기적으로 줄이고 도로 노후화 분석의 신뢰성을 극대화",
        lesson: "AI 모델의 성능을 결정짓는 것은 결국 '양질의 데이터'. 차량이 가득한 도로 영상을 그대로 분석 서버로 넘기면 엉뚱한 오탐지가 발생한다는 도메인적 한계를 발견"
      },
      {
        title: "[병목 해결] 불량 영상 URL 무한 재시도 방어 및 DLQ 격리",
        situation: "끊어진 국토부 CCTV 링크(불량 HLS URL)가 유입되었을 때, 워커가 지연 시간 없이 즉각적인 실패-재시도를 무한 반복하며 CPU를 낭비하고 전체 파이프라인을 마비시키는 현상 발생",
        solution: "무의미한 즉시 재시도를 막기 위해 30초의 대기 시간(Backoff)을 부여하고, 최대 실패 횟수를 3회로 제한. 3회 이상 실패한 악성 데이터는 메인 큐에서 삭제하고 별도의 DLQ(Dead Letter Queue)로 격리",
        result: "악성 데이터로 인한 메인 파이프라인의 병목을 원천 차단하고, DLQ를 통해 실패한 데이터의 후속 분석이 가능한 환경을 마련",
        lesson: "메시지 큐 기반의 분산 시스템에서, 예외 처리가 미흡한 단순한 '재시도' 로직은 단 하나의 악성 데이터만으로도 워커의 자원을 모두 고갈시키는 치명적인 '독약'이 될 수 있음을 체감"
      },
      {
        title: "[부하 최적화] 대규모 데이터 Redis 발행 시 발생하는 메모리 스파이크 해결",
        situation: "Spring Boot 메인 서버에서 수만 건의 CCTV 메타데이터를 Redis에 한 번에 발행하려고 시도하자, 메모리 스파이크 현상 및 트랜잭션 지연으로 서버 리소스가 임계점을 초과",
        solution: "JobProducer 클래스에 Guava의 Lists.partition()을 도입하여, 전체 데이터를 500개 단위의 청크(Chunk)로 잘게 분할한 뒤 순차적으로 비동기 발행(enqueueJobs)하도록 로직을 전면 개선",
        result: "메인 서버의 I/O 및 메모리 안정성을 확보하면서도, 방대한 데이터를 빠르고 안전하게 Redis 큐로 적재",
        lesson: "비동기(Asynchronous) 처리가 무조건적인 만능열쇠가 아님을 배움. 대규모 데이터를 무작정 비동기로 밀어 넣으면 I/O 병목이나 메모리 초과(OOM)로 이어질 수 있음을 확인"
      }
    ],
    qna: [
      {
        question: "프로젝트에서 가장 아쉬웠던 점은?",
        answer: "결함 허용 파이프라인을 구축했지만, 이를 시각적으로 실시간 모니터링할 수 있는 대시보드(Prometheus, Grafana 등)를 연동하지 못한 점. DLQ에 쌓인 에러 데이터나 AI 워커의 메모리 상태를 한눈에 파악할 수 있는 '관측성'을 확보했다면 운영 효율이 훨씬 높았을 것"
      },
      {
        question: "다음 프로젝트의 목표는?",
        answer: "Spring Boot 기반의 TDD(테스트 주도 개발)를 체계적으로 적용해 배포 이전 단계부터 코드의 결함을 차단하는 안정적인 서버를 개발. 비동기 분산 파이프라인을 더욱 고도화하여 서비스 간 결합도를 완벽히 낮추고 독립적인 배포가 가능한 MSA 환경을 직접 설계하고 운영"
      }
    ],
    githubUrl: "https://github.com/Helios-CCTV/",
  },
  {
    id: 'project3',
    title: "공시생 및 개발자를 위한 스터디 커뮤니티",
    topic: "의존성 배포 자동화 및 TDD 기반의 스터디 플랫폼", // 구체적 주제
    description: "실시간 채팅과 정보 공유 게시판을 통해 효율적인 학습을 돕는 스터디 커뮤니티 서비스",
    category: "사이드 프로젝트",
    period: "2025.12 - 현재",
    teamSize: "DevOps(1), FE(1), FE·BE(1), BE·AI(2), BE·DevOps(1) — 총 6인",
    role: "Board, Chat Service 개발, CI/CD 파이프라인 구축",
    results: [
      "마이크로서비스(MSA) 아키텍처 기반 시스템 설계",
      "Jenkins를 활용한 빌드/배포 시간 00% 단축 및 자동화",
      "TDD(테스트 주도 개발) 도입으로 코드 안정성 확보"
    ],
    contributions: [
      { title: "Jenkins 파이프라인 설계", description: "Upstream/Downstream 설계를 통한 MSA 배포 자동화", technologies: ["Jenkins", "Docker"] }
    ],
    technologies: ["Spring Boot", "Jenkins"],
    githubUrl: "https://github.com/St-rdy",
    deploymentUrl: ""
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

// 스킬 데이터
export const skillCategories: SkillCategory[] = [
  { title: "🛠 백엔드 개발", description: "안정적이고 확장 가능한 서버 시스템 구축", skills: ["Java", "Spring Boot", "FastAPI", "Python"] },
  { title: "🗄 데이터베이스 & 캐싱", description: "효율적인 데이터 저장 및 관리 시스템 설계", skills: ["MySQL", "PostgreSQL", "Redis"] },
  { title: "☁️ DevOps & 인프라", description: "CI/CD 파이프라인과 배포 자동화, 인프라 구축", skills: ["Docker", "Jenkins", "MinIO", "Proxmox", "OpenStack"] },
  { title: "💡 기타", description: "개발 생산성과 품질 향상을 위한 기술", skills: ["TDD", "WebSocket", "OpenCV", "Git"] }
]

// 개발 철학 데이터
export const philosophyData: Philosophy[] = [
  {
    title: "설계가 확장성을 결정한다",
    description: "당장 돌아가는 코드보다 중요한 것은 구조입니다. 대규모 트래픽 앞에서도 흔들리지 않는 견고한 아키텍처를 고민합니다."
  },
  {
    title: "AI는 대체자가 아닌 '무기'",
    description: "생산성을 위해 AI를 적극 활용하되 맹신하지 않습니다. 원리를 직접 파악하고 최종적인 책임은 개발자인 제가 집니다."
  },
  {
    title: "'왜?'를 묻는 트러블슈팅",
    description: "주어진 명세서에 만족하지 않습니다. 시스템의 병목 현상을 집요하게 파고들어 최상의 사용자 경험(UX)을 만들어냅니다."
  }
]

// 학력 데이터
export const educationData: Education[] = [
  { period: "2020 - 2026", institution: "목원대학교", detail: "컴퓨터공학과 학사 졸업" },
  { period: "2023 - 2024", institution: "코리아 IT 아카데미", detail: "웹 표준 수료" },
  { period: "2017 - 2019", institution: "시흥매화고등학교", detail: "이과 졸업" }
]

// 사이드바 파일 정보
export const sidebarFiles = {
  main: [
    { id: 'readme', name: 'README.md', icon: 'fab fa-markdown', iconColor: 'text-[#519aba]' },
    { id: 'about', name: 'About.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]' },
  ],
  mainProjects: [
    { id: 'project1', name: 'LevelUpFit.py', icon: 'fab fa-python', iconColor: 'text-[#3572A5]' },
    { id: 'project2', name: 'Helios.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]' },
  ],
  subProjects: [
    { id: 'project3', name: 'StudyCommunity.js', icon: 'fab fa-js', iconColor: 'text-[#f1e05a]' },
    { id: 'project4', name: 'GreenPoint.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]' },
    { id: 'project5', name: 'DateCourse.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]' },
    { id: 'project6', name: 'Accommodation.ts', icon: 'fas fa-file-code', iconColor: 'text-gray-400' },
    { id: 'project7', name: 'Shopping.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]' },
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
  project1: { filename: 'LevelUpFit.py', icon: 'fab fa-python', iconColor: 'text-[#3572A5]' },
  project2: { filename: 'Helios.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]' },
  project3: { filename: 'StudyCommunity.js', icon: 'fab fa-js', iconColor: 'text-[#f1e05a]' },
  project4: { filename: 'GreenPoint.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]' },
  project5: { filename: 'DateCourse.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]' },
  project6: { filename: 'Accommodation.ts', icon: 'fas fa-file-code', iconColor: 'text-gray-400' },
  project7: { filename: 'Shopping.java', icon: 'fab fa-java', iconColor: 'text-[#b07219]' },
}

// 연락처 정보
export const contactInfo = {
  phone: "010-5316-4168",
  email: "htb010630@gmail.com",
  github: "github.com/TreeBomb-01",
  portfolio: "portfolio.treebomb.org"
}

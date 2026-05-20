export interface Contribution {
  id: string
  title: string
  situation: string
  solution: string
  result: string
  metric: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  category: string
  period: string
  team: string
  role: string
  technologies: string[]
  githubUrl: string
  award?: string
  contributions: Contribution[]
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Award {
  rank: string
  title: string
  competition: string
  organizer: string
}

export interface Education {
  period: string
  institution: string
  detail: string
  gpa?: string
}

export const contactInfo = {
  phone: '010-5316-4168',
  email: 'htb010630@gmail.com',
  github: 'https://github.com/TreeBomb-01',
  portfolio: 'https://portfolio.treebomb.org',
}

export const values = [
  {
    number: '01',
    title: '코드를 작성한 이유와 근거를 탐구합니다',
    description:
      '주어진 명세서에 만족하지 않고, 기술을 도입할 때 반드시 "왜 이 기술이어야 하는가?"를 스스로에게 묻습니다. 프레임워크 이면의 동작 원리와 CS 지식을 깊이 파고들어, 예기치 못한 트래픽 부하나 에러 앞에서도 논리적으로 원인을 설명하고 시스템을 완벽히 통제할 수 있는 단단한 코드를 작성합니다.',
    keyword: 'Why-First',
  },
  {
    number: '02',
    title: '단순한 구현을 넘어 견고한 아키텍처를 설계합니다',
    description:
      '기능 작동에 만족하지 않고, 대규모 트래픽 앞에서도 무너지지 않는 시스템의 확장성을 고민합니다. 서버의 스레드 고갈이나 메모리 병목을 선제적으로 예측하여 비동기 분산 아키텍처를 설계합니다. 인프라와 배포 자동화까지 전체 숲을 조망하며 최상의 UX를 유지하는 견고한 백엔드를 구축합니다.',
    keyword: 'Scalability',
  },
  {
    number: '03',
    title: '모르는 것을 인정하고, 더 나은 방향으로 빠르게 움직입니다',
    description:
      '완벽한 척하지 않습니다. 막히는 부분은 명확히 인정하고, 공식 문서를 직접 찾아 파고들며 스스로 답을 찾습니다. 선배 개발자의 코드 리뷰와 피드백을 성장의 연료로 삼고, 어제보다 나은 코드를 작성하는 것을 목표로 합니다. 신입이기에 모든 걸 알 수는 없지만, 배우는 속도와 태도만큼은 누구에게도 뒤지지 않겠습니다.',
    keyword: 'Growth Mindset',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript'],
  },
  {
    category: 'Frameworks',
    skills: ['Spring Boot', 'FastAPI', 'React'],
  },
  {
    category: 'Database',
    skills: ['Oracle', 'MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'DevOps / Infra',
    skills: ['Docker', 'Jenkins', 'MinIO', 'OpenStack'],
  },
  {
    category: 'Libraries & Tools',
    skills: ['WebClient', 'WebSocket', 'FFmpeg', 'OpenCV', 'QueryDSL'],
  },
  {
    category: '협업 도구',
    skills: ['Git', 'GitHub', 'Plane'],
  },
]

export const projects: Project[] = [
  {
    id: 'stardy',
    title: 'Stardy',
    subtitle: '공시생을 위한 스터디 커뮤니티',
    description:
      'MSA 환경을 기반으로 실시간 그룹 채팅, 커뮤니티 게시판, 학습 트래킹 기능을 하나로 통합한 공시생 맞춤형 스터디 플랫폼입니다.',
    category: '사이드 프로젝트',
    period: '2025.12 ~ 현재 진행 중',
    team: 'DevOps(1), FE(1), FE·BE(1), BE·AI(2), BE·DevOps(1) — 총 6인',
    role: 'BE-DevOps',
    technologies: [
      'Java 21',
      'Spring Boot 3.4',
      'JPA',
      'TDD',
      'Mockito',
      'PostgreSQL',
      'MSA',
      'Jenkins',
      'Groovy',
      'QueryDSL',
    ],
    githubUrl: 'https://github.com/St-rdy',
    contributions: [
      {
        id: 'stardy-1',
        title: 'QueryDSL + PostgreSQL JSONB 기반 게시글 동적 검색 최적화',
        situation:
          '카테고리를 JSONB 컬럼으로 설계했으나, nativeQuery로 JSONB 함수 호출 시 동적 조건 조합이 문자열 접합 방식으로 전락하여 타입 안전성과 유지보수성에 한계를 확인했습니다.',
        solution:
          'QueryDSL 커스텀 레포지토리에서 jsonb_extract_path_text() 함수를 직접 통합하고, 정렬 필드 whitelist 검증 및 DualQuery 패턴(컨텐츠/카운트 분리)을 적용했습니다.',
        result:
          '타입 안전한 동적 쿼리 구성과 SQL Injection 차단을 동시에 달성하며, 스키마 변경 없이 카테고리 확장이 가능한 구조를 확보했습니다.',
        metric: 'SQL Injection 차단 + 타입 안전성 확보',
      },
      {
        id: 'stardy-2',
        title: '계층형 댓글 N+1 문제 해결 — 배치 로딩 전략 설계',
        situation:
          '루트 댓글 수만큼 대댓글 쿼리가 개별 실행되는 N+1 문제를 확인했습니다. JOIN FETCH 적용 시 Hibernate가 전체 데이터를 메모리에 로드 후 페이지를 자르는 방식으로 동작하여 페이지네이션 병행 사용에 한계가 있었습니다.',
        solution:
          '루트 댓글 페이지 조회 후 ID를 추출하여 대댓글을 단일 IN 쿼리로 일괄 조회하는 배치 로딩 방식을 설계하고, 인메모리 매핑으로 계층 구조 DTO를 조립했습니다.',
        result:
          'DB 호출 횟수를 루트 댓글 수(N)에 비례하던 구조에서 고정 2회로 단축하여 트래픽 증가에도 안정적인 쿼리 성능을 확보했습니다.',
        metric: 'DB 호출 N회 → 고정 2회',
      },
    ],
  },
  {
    id: 'helios',
    title: 'Helios CCTV',
    subtitle: '전국 CCTV 기반 도로 노후화 탐지 시스템',
    description:
      'AI 기반 실시간 도로 파손 탐지 시스템으로, CCTV 영상 데이터를 분석해 파손 위험도를 평가하고 효율적인 유지 보수 체계를 지원하는 서비스입니다.',
    category: 'K-디지털 챌린지 NET 챌린지 캠프 시즌 12',
    period: '2025.07 ~ 2025.11',
    team: 'FE-AI-팀장(1), BE-DevOps(1) — 총 2인',
    role: 'BE-DevOps',
    award: '은상 (국가보안기술연구소 소장상)',
    technologies: [
      'Java 17',
      'Spring Boot 3.5',
      'FastAPI',
      'Redis Stream',
      'PostgreSQL',
      'OpenCV',
      'FFmpeg',
      'Docker',
      'Jenkins',
    ],
    githubUrl: 'https://github.com/Helios-CCTV',
    contributions: [
      {
        id: 'helios-1',
        title: '불량 데이터 유입으로 인한 파이프라인 마비 방지',
        situation:
          '잘못된 CCTV URL 유입 시 무한 재시도로 인해 CPU 점유율이 급증하고 전체 분석 파이프라인이 중단되는 현상이 발생했습니다.',
        solution:
          '무의미한 즉시 재시도로 인한 병목을 막기 위해 30초의 대기 시간(Backoff)을 부여하고, 3회 실패 시 데이터를 DLQ(Dead Letter Queue)로 격리하도록 설계했습니다.',
        result:
          '무한 루프에 빠지던 워커의 CPU 점유율 스파이크를 방어하고, 악성 데이터 유입 시에도 100% 정상 가동되는 무중단 파이프라인 환경을 구축했습니다.',
        metric: '파이프라인 가동률 100% 유지',
      },
      {
        id: 'helios-2',
        title: '비동기 분산 파이프라인 설계로 영상 처리 시간 81% 단축',
        situation:
          '메인 서버와 AI 워커 간의 동기식 통신 구조로 인해, 대규모 CCTV 영상 분석 시 심각한 서버 병목이 발생하고 전체 처리 시간이 지연되는 문제를 확인했습니다.',
        solution:
          'Redis Stream 기반의 비동기 분산 메시징 큐 시스템을 도입하여 서버 간 결합도를 완벽히 낮춘 대용량 데이터 처리 파이프라인을 구축했습니다.',
        result:
          '기존 7시간 30분 소요되던 전체 영상 처리 시간을 1시간 24분으로 대폭 단축하여 약 81% 성능 개선을 달성했습니다.',
        metric: '처리 시간 81% 단축 (7h 30m → 1h 24m)',
      },
    ],
  },
  {
    id: 'levelupfit',
    title: 'LevelUpFit',
    subtitle: '영상 데이터 기반 운동 자세 분석 및 피드백 웹앱',
    description:
      '운동 자세에 대한 불안감 해소와 효율적인 루틴 관리를 위한 웹 애플리케이션 서비스입니다.',
    category: 'AI융합페스티벌 × 컴퓨터공학과 제38회 학술제',
    period: '2025.03 ~ 2025.11',
    team: 'FE(1), BE-DevOps-팀장(1) — 총 2인',
    role: 'BE-DevOps-팀장 (기여도 100%)',
    award: '우수상',
    technologies: [
      'Java 21',
      'Spring Boot 3',
      'FastAPI',
      'MediaPipe',
      'OpenAI API',
      'WebSocket',
      'MinIO',
      'Docker',
      'Jenkins',
    ],
    githubUrl: 'https://github.com/LevelUpFit',
    contributions: [
      {
        id: 'levelupfit-1',
        title: '대용량 AI 분석 시 서버 병목 및 UX 저하 해결',
        situation:
          '대용량 영상의 동기식 AI 분석 처리 시, Spring Boot 스레드 블로킹으로 인한 서버 병목 위험 및 사용자의 긴 대기 시간이 발생했습니다.',
        solution:
          'WebClient 기반의 비동기 논블로킹 파이프라인을 구축하고, 분석 완료 시 WebSocket으로 결과를 즉시 전송하는 백그라운드 알림 시스템을 도입했습니다.',
        result:
          '스레드 풀 고갈을 방지하여 시스템 가용성과 확장성을 확보하고, 분석 중에도 서비스의 다른 기능을 즉시 이용할 수 있는 UX를 구현했습니다.',
        metric: '스레드 블로킹 제거, 서비스 연속성 확보',
      },
      {
        id: 'levelupfit-2',
        title: '웹/모바일 영상 호환성 및 스트리밍 지연 해결',
        situation:
          '모바일 기기로 촬영된 영상의 회전 메타데이터가 분석 라이브러리(OpenCV)에서 반영되지 않아 화면이 기울어 보이는 현상이 발생했습니다.',
        solution:
          'FFmpeg로 회전 정보를 추출하여 프레임을 물리적으로 보정하고, -movflags +faststart 옵션을 적용해 웹 스트리밍 및 분석 환경에 최적화된 인코딩 파이프라인을 구축했습니다.',
        result:
          '대부분의 디바이스에서 올바른 방향으로 영상 재생이 가능한 호환성을 확보하고, 즉시 재생 기능을 통해 사용자 체감 대기 시간을 단축했습니다.',
        metric: '크로스 디바이스 호환성 확보, 즉시 재생 구현',
      },
    ],
  },
]

export const awards: Award[] = [
  {
    rank: '🥈 은상',
    title: '국가보안기술연구소 소장상',
    competition: 'K-디지털 챌린지: NET 챌린지 캠프 시즌 12',
    organizer: 'KOREN / 국가보안기술연구소',
  },
  {
    rank: '🏅 장려상',
    title: '',
    competition: '2025 SUMTECH Hackathon',
    organizer: '한양대학교 ERICA SW중심대학사업단',
  },
  {
    rank: '🏆 우수상',
    title: '',
    competition: 'AI융합페스티벌 × 컴퓨터공학과 제38회 학술제',
    organizer: '목원대학교 SW중심대학사업추진단',
  },
]

export const education: Education[] = [
  {
    period: '2020.03 ~ 2026.02',
    institution: '목원대학교',
    detail: '컴퓨터공학과 졸업',
    gpa: '3.49 / 4.5',
  },
]

export const certifications = ['SQLD (SQL 개발자)']

export const activities = ['교내 해커톤 멘토 — Backend / Architecture 파트 (목원대학교)']

export const courses = [
  '코리아 IT 아카데미 웹 개발 수강 (2023.10 ~ 2024.03)',
  '대전-세종-충남 CNU SW아카데미 웹 프론트엔드 과정 (2024.06 ~ 2024.12)',
]

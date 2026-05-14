export type TroubleCategory = 'design' | 'performance' | 'architecture' | 'devops'

export interface TroubleCard {
  id: number
  title: string
  category: TroubleCategory
  date: string        // "2026.01"
  importance: number  // 낮을수록 중요
  problem: string
  solution: string
  result: string
  learned: string
}

export interface Project {
  slug: string
  number: string        // "01"
  type: string          // "사이드 프로젝트"
  name: string
  subtitle: string
  period: string
  status: 'ongoing' | 'completed'
  techStack: string[]
  role: string
  teamSize: string
  githubUrl: string
  description: string
  highlights: TroubleCard[]   // 메인 페이지에 노출할 항목
  troubleCards: TroubleCard[] // 상세 페이지 전체
}

// ── 카테고리 메타 ──────────────────────────────────────────
export const CATEGORY_META: Record<
  TroubleCategory,
  { label: string; bg: string; text: string }
> = {
  design:       { label: '설계',       bg: '#E1F5EE', text: '#0F6E56' },
  performance:  { label: '성능',       bg: '#E6F1FB', text: '#185FA5' },
  architecture: { label: '아키텍처',   bg: '#EEEDFE', text: '#3C3489' },
  devops:       { label: 'DevOps',     bg: '#FAEEDA', text: '#854F0B' },
}

// ── 데이터 ────────────────────────────────────────────────
export const projectsData: Project[] = [
  {
    slug: 'stardy',
    number: '01',
    type: '사이드 프로젝트',
    name: 'Stardy',
    subtitle: '공시생을 위한 스터디 커뮤니티',
    period: '2025.12 ~ 현재 진행 중',
    status: 'ongoing',
    techStack: ['Java 21', 'Spring Boot 3.4', 'JPA', 'TDD', 'Mockito', 'PostgreSQL', 'MSA', 'Jenkins', 'Groovy', 'QueryDSL'],
    role: 'BE-DevOps (1인)',
    teamSize: '총 10인',
    githubUrl: 'https://github.com/St-rdy',
    description:
      'MSA 환경을 기반으로 실시간 그룹 채팅, 커뮤니티 게시판, 학습 트래킹 기능을 하나로 통합한 공시생 맞춤형 스터디 플랫폼입니다. 각 서비스가 독립적으로 배포되고 확장될 수 있도록 마이크로서비스 아키텍처로 설계했습니다.',
    highlights: [
      {
        id: 1,
        title: 'QueryDSL + PostgreSQL JSONB 기반 게시글 동적 검색 최적화',
        category: 'design',
        date: '2026.01',
        importance: 1,
        problem:
          '카테고리를 JSONB 컬럼으로 설계했으나, nativeQuery로 JSONB 함수 호출 시 동적 조건 조합이 문자열 접합 방식으로 전락하여 타입 안전성과 유지보수성에 한계를 확인했습니다.',
        solution:
          'QueryDSL 커스텀 레포지토리에서 jsonb_extract_path_text() 함수를 직접 통합하고, 정렬 필드 whitelist 검증 및 DualQuery 패턴(컨텐츠/카운트 분리)을 적용했습니다.',
        result:
          '타입 안전한 동적 쿼리 구성과 SQL Injection 차단을 동시에 달성하며, 스키마 변경 없이 카테고리 확장이 가능한 구조를 확보했습니다.',
        learned:
          '타입 시스템의 경계를 명확히 이해하는 것이 중요합니다. nativeQuery는 컴파일 타임 검증을 잃는 trade-off가 있으며, 도메인 요구사항이 ORM을 벗어날 때 QueryDSL의 확장 포인트를 활용하는 것이 유지보수 측면에서 훨씬 유리합니다.',
      },
      {
        id: 2,
        title: '계층형 댓글 N+1 문제 해결 — 배치 로딩 전략 설계',
        category: 'performance',
        date: '2026.02',
        importance: 2,
        problem:
          '루트 댓글 수만큼 대댓글 쿼리가 개별 실행되는 N+1 문제를 확인했습니다. JOIN FETCH 적용 시 Hibernate가 전체 데이터를 메모리에 로드 후 페이지를 자르는 방식으로 동작하여 페이지네이션 병행 사용에 한계가 있었습니다.',
        solution:
          '루트 댓글 페이지 조회 후 ID를 추출하여 대댓글을 단일 IN 쿼리로 일괄 조회하는 배치 로딩 방식을 설계하고, 인메모리 매핑으로 계층 구조 DTO를 조립했습니다.',
        result:
          'DB 호출 횟수를 루트 댓글 수(N)에 비례하던 구조에서 고정 2회로 단축하여 트래픽 증가에도 안정적인 쿼리 성능을 확보했습니다.',
        learned:
          'ORM의 편의성 이면에는 반드시 실행 쿼리를 직접 확인하는 습관이 필요합니다. JOIN FETCH가 만능이 아닌 이유를 Hibernate의 동작 원리 수준에서 이해함으로써, 상황에 맞는 전략(배치 로딩/fetch join/페이지네이션)을 선택하는 기준을 갖게 되었습니다.',
      },
    ],
    troubleCards: [
      {
        id: 1,
        title: 'QueryDSL + PostgreSQL JSONB 기반 게시글 동적 검색 최적화',
        category: 'design',
        date: '2026.01',
        importance: 1,
        problem:
          '카테고리를 JSONB 컬럼으로 설계했으나, nativeQuery로 JSONB 함수 호출 시 동적 조건 조합이 문자열 접합 방식으로 전락하여 타입 안전성과 유지보수성에 한계를 확인했습니다.',
        solution:
          'QueryDSL 커스텀 레포지토리에서 jsonb_extract_path_text() 함수를 직접 통합하고, 정렬 필드 whitelist 검증 및 DualQuery 패턴(컨텐츠/카운트 분리)을 적용했습니다.',
        result:
          '타입 안전한 동적 쿼리 구성과 SQL Injection 차단을 동시에 달성하며, 스키마 변경 없이 카테고리 확장이 가능한 구조를 확보했습니다.',
        learned:
          '타입 시스템의 경계를 명확히 이해하는 것이 중요합니다. nativeQuery는 컴파일 타임 검증을 잃는 trade-off가 있으며, 도메인 요구사항이 ORM을 벗어날 때 QueryDSL의 확장 포인트를 활용하는 것이 유지보수 측면에서 훨씬 유리합니다.',
      },
      {
        id: 2,
        title: '계층형 댓글 N+1 문제 해결 — 배치 로딩 전략 설계',
        category: 'performance',
        date: '2026.02',
        importance: 2,
        problem:
          '루트 댓글 수만큼 대댓글 쿼리가 개별 실행되는 N+1 문제를 확인했습니다. JOIN FETCH 적용 시 Hibernate가 전체 데이터를 메모리에 로드 후 페이지를 자르는 방식으로 동작하여 페이지네이션 병행 사용에 한계가 있었습니다.',
        solution:
          '루트 댓글 페이지 조회 후 ID를 추출하여 대댓글을 단일 IN 쿼리로 일괄 조회하는 배치 로딩 방식을 설계하고, 인메모리 매핑으로 계층 구조 DTO를 조립했습니다.',
        result:
          'DB 호출 횟수를 루트 댓글 수(N)에 비례하던 구조에서 고정 2회로 단축하여 트래픽 증가에도 안정적인 쿼리 성능을 확보했습니다.',
        learned:
          'ORM의 편의성 이면에는 반드시 실행 쿼리를 직접 확인하는 습관이 필요합니다. JOIN FETCH가 만능이 아닌 이유를 Hibernate의 동작 원리 수준에서 이해함으로써, 상황에 맞는 전략(배치 로딩/fetch join/페이지네이션)을 선택하는 기준을 갖게 되었습니다.',
      },
    ],
  },

  {
    slug: 'helios',
    number: '02',
    type: 'K-디지털 챌린지',
    name: 'Helios CCTV',
    subtitle: '전국 CCTV 기반 도로 노후화 탐지 시스템',
    period: '2025.07 ~ 2025.11',
    status: 'completed',
    techStack: ['Java 17', 'Spring Boot 3.5', 'FastAPI', 'Redis Stream', 'PostgreSQL', 'OpenCV', 'FFmpeg', 'Docker', 'Jenkins'],
    role: 'BE-DevOps (1인)',
    teamSize: '총 2인',
    githubUrl: 'https://github.com/Helios-CCTV',
    description:
      'AI 기반 실시간 도로 파손 탐지 시스템으로, 전국 CCTV 영상 데이터를 분석해 파손 위험도를 평가하고 효율적인 유지 보수 체계를 지원합니다. K-디지털 챌린지 NET 챌린지 캠프 시즌12에서 은상을 수상했습니다.',
    highlights: [
      {
        id: 1,
        title: '불량 데이터 유입으로 인한 파이프라인 마비 방지',
        category: 'architecture',
        date: '2025.09',
        importance: 1,
        problem:
          '잘못된 CCTV URL 유입 시 무한 재시도로 인해 CPU 점유율이 급증하고 전체 분석 파이프라인이 중단되는 현상이 발생했습니다.',
        solution:
          '30초의 대기 시간(Backoff)을 부여하고, 3회 실패 시 데이터를 DLQ(Dead Letter Queue)로 격리하도록 설계했습니다.',
        result:
          '무한 루프에 빠지던 워커의 CPU 점유율 스파이크를 방어하고, 악성 데이터 유입 시에도 100% 정상 가동되는 무중단 파이프라인 환경을 구축했습니다.',
        learned:
          '분산 시스템에서 재시도는 단순한 안전장치가 아닙니다. 반드시 지수 백오프(Exponential Backoff)와 최대 시도 횟수, 실패 격리 전략이 함께 설계되어야 파이프라인 전체의 안정성을 보장할 수 있습니다.',
      },
      {
        id: 2,
        title: '비동기 분산 파이프라인 설계로 영상 처리 시간 81% 단축',
        category: 'performance',
        date: '2025.10',
        importance: 2,
        problem:
          '메인 서버와 AI 워커 간의 동기식 통신 구조로 인해, 대규모 CCTV 영상 분석 시 심각한 서버 병목이 발생하고 전체 처리 시간이 지연되는 문제를 확인했습니다.',
        solution:
          'Redis Stream 기반의 비동기 분산 메시징 큐 시스템을 도입하여 서버 간 결합도를 완벽히 낮춘 대용량 데이터 처리 파이프라인을 구축했습니다.',
        result:
          '기존 7시간 30분 소요되던 전체 영상 처리 시간을 1시간 24분으로 대폭 단축하여 약 81% 성능 개선을 달성했습니다.',
        learned:
          '동기 vs 비동기 선택은 단순한 성능 문제가 아닌 아키텍처 설계 문제입니다. 메시지 큐 도입은 성능 개선을 넘어 각 서비스가 독립적으로 스케일링될 수 있는 기반을 마련합니다.',
      },
    ],
    troubleCards: [
      {
        id: 1,
        title: '불량 데이터 유입으로 인한 파이프라인 마비 방지',
        category: 'architecture',
        date: '2025.09',
        importance: 1,
        problem:
          '잘못된 CCTV URL 유입 시 무한 재시도로 인해 CPU 점유율이 급증하고 전체 분석 파이프라인이 중단되는 현상이 발생했습니다.',
        solution:
          '30초의 대기 시간(Backoff)을 부여하고, 3회 실패 시 데이터를 DLQ(Dead Letter Queue)로 격리하도록 설계했습니다.',
        result:
          '무한 루프에 빠지던 워커의 CPU 점유율 스파이크를 방어하고, 악성 데이터 유입 시에도 100% 정상 가동되는 무중단 파이프라인 환경을 구축했습니다.',
        learned:
          '분산 시스템에서 재시도는 단순한 안전장치가 아닙니다. 반드시 지수 백오프(Exponential Backoff)와 최대 시도 횟수, 실패 격리 전략이 함께 설계되어야 파이프라인 전체의 안정성을 보장할 수 있습니다.',
      },
      {
        id: 2,
        title: '비동기 분산 파이프라인 설계로 영상 처리 시간 81% 단축',
        category: 'performance',
        date: '2025.10',
        importance: 2,
        problem:
          '메인 서버와 AI 워커 간의 동기식 통신 구조로 인해, 대규모 CCTV 영상 분석 시 심각한 서버 병목이 발생하고 전체 처리 시간이 지연되는 문제를 확인했습니다.',
        solution:
          'Redis Stream 기반의 비동기 분산 메시징 큐 시스템을 도입하여 서버 간 결합도를 완벽히 낮춘 대용량 데이터 처리 파이프라인을 구축했습니다.',
        result:
          '기존 7시간 30분 소요되던 전체 영상 처리 시간을 1시간 24분으로 대폭 단축하여 약 81% 성능 개선을 달성했습니다.',
        learned:
          '동기 vs 비동기 선택은 단순한 성능 문제가 아닌 아키텍처 설계 문제입니다. 메시지 큐 도입은 성능 개선을 넘어 각 서비스가 독립적으로 스케일링될 수 있는 기반을 마련합니다.',
      },
    ],
  },

  {
    slug: 'levelupfit',
    number: '03',
    type: 'AI융합페스티벌',
    name: 'LevelUpFit',
    subtitle: '영상 데이터 기반 운동 자세 분석 및 피드백 웹앱',
    period: '2025.03 ~ 2025.11',
    status: 'completed',
    techStack: ['Java 21', 'Spring Boot 3', 'FastAPI', 'MediaPipe', 'OpenAI API', 'WebSocket', 'MinIO', 'Docker', 'Jenkins'],
    role: 'BE-DevOps-팀장 (기여도 100%)',
    teamSize: '총 2인',
    githubUrl: 'https://github.com/LevelUpFit',
    description:
      '운동 자세에 대한 불안감 해소와 효율적인 루틴 관리를 위한 웹 애플리케이션 서비스입니다. AI융합페스티벌 × 컴퓨터공학과 제38회 학술제에서 우수상을 수상했으며, BE-DevOps 전체를 단독으로 기여했습니다.',
    highlights: [
      {
        id: 1,
        title: '대용량 AI 분석 시 서버 병목 및 UX 저하 해결',
        category: 'architecture',
        date: '2025.06',
        importance: 1,
        problem:
          '대용량 영상의 동기식 AI 분석 처리 시, Spring Boot 스레드 블로킹으로 인한 서버 병목 위험 및 사용자의 긴 대기 시간이 발생했습니다.',
        solution:
          'WebClient 기반의 비동기 논블로킹 파이프라인을 구축하고, 분석 완료 시 WebSocket으로 결과를 즉시 전송하는 백그라운드 알림 시스템을 도입했습니다.',
        result:
          '스레드 풀 고갈을 방지하여 시스템 가용성과 확장성을 확보하고, 분석 중에도 서비스의 다른 기능을 즉시 이용할 수 있는 UX를 구현했습니다.',
        learned:
          '사용자 경험(UX)은 백엔드 아키텍처 결정에서 비롯됩니다. 스레드 블로킹 제거는 단순한 서버 최적화가 아니라, 사용자가 긴 작업 중에도 서비스를 자유롭게 사용할 수 있는 경험의 차이를 만들어냅니다.',
      },
      {
        id: 2,
        title: '웹/모바일 영상 호환성 및 스트리밍 지연 해결',
        category: 'devops',
        date: '2025.08',
        importance: 2,
        problem:
          '모바일 기기로 촬영된 영상의 회전 메타데이터가 분석 라이브러리(OpenCV)에서 반영되지 않아 화면이 기울어 보이는 현상이 발생했습니다.',
        solution:
          'FFmpeg로 회전 정보를 추출하여 프레임을 물리적으로 보정하고, -movflags +faststart 옵션을 적용해 웹 스트리밍 및 분석 환경에 최적화된 인코딩 파이프라인을 구축했습니다.',
        result:
          '대부분의 디바이스에서 올바른 방향으로 영상 재생이 가능한 호환성을 확보하고, 즉시 재생 기능을 통해 사용자 체감 대기 시간을 단축했습니다.',
        learned:
          '백엔드 개발자도 클라이언트의 동작 방식을 이해해야 합니다. 영상 메타데이터, 코덱, 스트리밍 프로토콜에 대한 이해 없이는 완성도 있는 미디어 서비스를 구현할 수 없습니다.',
      },
    ],
    troubleCards: [
      {
        id: 1,
        title: '대용량 AI 분석 시 서버 병목 및 UX 저하 해결',
        category: 'architecture',
        date: '2025.06',
        importance: 1,
        problem:
          '대용량 영상의 동기식 AI 분석 처리 시, Spring Boot 스레드 블로킹으로 인한 서버 병목 위험 및 사용자의 긴 대기 시간이 발생했습니다.',
        solution:
          'WebClient 기반의 비동기 논블로킹 파이프라인을 구축하고, 분석 완료 시 WebSocket으로 결과를 즉시 전송하는 백그라운드 알림 시스템을 도입했습니다.',
        result:
          '스레드 풀 고갈을 방지하여 시스템 가용성과 확장성을 확보하고, 분석 중에도 서비스의 다른 기능을 즉시 이용할 수 있는 UX를 구현했습니다.',
        learned:
          '사용자 경험(UX)은 백엔드 아키텍처 결정에서 비롯됩니다. 스레드 블로킹 제거는 단순한 서버 최적화가 아니라, 사용자가 긴 작업 중에도 서비스를 자유롭게 사용할 수 있는 경험의 차이를 만들어냅니다.',
      },
      {
        id: 2,
        title: '웹/모바일 영상 호환성 및 스트리밍 지연 해결',
        category: 'devops',
        date: '2025.08',
        importance: 2,
        problem:
          '모바일 기기로 촬영된 영상의 회전 메타데이터가 분석 라이브러리(OpenCV)에서 반영되지 않아 화면이 기울어 보이는 현상이 발생했습니다.',
        solution:
          'FFmpeg로 회전 정보를 추출하여 프레임을 물리적으로 보정하고, -movflags +faststart 옵션을 적용해 웹 스트리밍 및 분석 환경에 최적화된 인코딩 파이프라인을 구축했습니다.',
        result:
          '대부분의 디바이스에서 올바른 방향으로 영상 재생이 가능한 호환성을 확보하고, 즉시 재생 기능을 통해 사용자 체감 대기 시간을 단축했습니다.',
        learned:
          '백엔드 개발자도 클라이언트의 동작 방식을 이해해야 합니다. 영상 메타데이터, 코덱, 스트리밍 프로토콜에 대한 이해 없이는 완성도 있는 미디어 서비스를 구현할 수 없습니다.',
      },
    ],
  },
]

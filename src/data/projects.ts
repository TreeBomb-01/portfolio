export type TroubleCategory = 'design' | 'performance' | 'architecture' | 'devops'

export interface TroubleCard {
  id: number
  title: string
  category: TroubleCategory
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
      {
        id: 3,
        title: 'TDD 및 BDD 도입을 통한 무결점 배포 환경 및 코드 신뢰성 확보',
        category: 'architecture',
        importance: 3,
        problem:
          'MSA 환경 특성상 여러 마이크로서비스(채팅, 게시판 등)가 얽혀 있고 잦은 요구사항 변경이 발생하여, 배포 후 예기치 못한 사이드 이펙트가 발생할 위험성이 존재했습니다.',
        solution:
          '비즈니스 요구사항을 BDD 시나리오로 먼저 구체화하여 구현 범위를 명확히 정의하고, 이를 바탕으로 TDD 사이클(Red → Green → Refactor)을 적용하여 핵심 비즈니스 로직의 테스트 코드를 선제적으로 작성했습니다. 단위 테스트(Mockito), 슬라이스 테스트(@WebMvcTest, @DataJpaTest), 통합 테스트를 계층별로 분리하여 각 레이어의 책임 범위 내에서 결함을 조기에 탐지할 수 있는 테스트 구조를 설계했습니다.',
        result:
          '배포 이전 단계에서 잠재적인 코드 결함을 사전에 차단하여 프로덕션 레벨의 서버 안정성을 확보했으며, 기능 확장 및 리팩토링 시에도 회귀 테스트를 통해 기존 동작의 안정성을 보장하는 지속 가능한 개발 환경을 구축했습니다.',
        learned:
          '테스트는 코드 검증 수단을 넘어 설계 도구입니다. BDD로 요구사항을 시나리오화하면 구현 전 비즈니스 로직의 경계가 명확해지고, TDD 사이클은 과설계를 방지하며 필요한 최소한의 코드만 작성하게 합니다. 계층별 테스트 분리는 결함 위치를 즉시 특정할 수 있게 해 디버깅 비용을 크게 낮춰줍니다.',
      },
      {
        id: 4,
        title: 'Jenkins Shared Library 기반 MSA 맞춤형 배포 프레임워크(CI/CD) 구축',
        category: 'devops',
        importance: 4,
        problem:
          'MSA 환경 특성상 여러 마이크로서비스 간의 빌드 의존성이 복잡하게 얽혀 있으며, 서비스마다 파이프라인 코드가 중복되어 유지보수성이 저하되는 문제를 확인했습니다.',
        solution:
          'Jenkins vars/ 디렉터리 기반의 Shared Library(Groovy)를 직접 개발하고 CI 프레임워크의 엔트리포인트를 설계했습니다. 팀 내 Bazel 빌드 환경과 연동하여, 마이크로서비스 간의 Upstream 및 Downstream 빌드 트리거를 동적으로 제어하는 모듈화된 파이프라인 로직을 구현했습니다.',
        result:
          '파이프라인 코드의 재사용성과 확장성을 극대화하였으며, 복잡한 분산 환경(K8s)에서도 각 서비스가 올바른 의존성 순서에 따라 신속하고 일관되게 배포되는 자동화 인프라를 확보했습니다.',
        learned:
          'CI/CD 파이프라인도 프로덕션 코드와 동일한 수준의 설계 원칙이 필요합니다. 중복 파이프라인은 기술 부채로 빠르게 전환되며, Shared Library를 통한 모듈화는 단순한 코드 재사용을 넘어 팀 전체의 배포 일관성을 보장하는 인프라 설계임을 깨달았습니다.',
      },
      {
        id: 5,
        title: '복합 키(EmbeddedId) + 소프트 딜리트 기반 데이터 무결성 설계',
        category: 'design',
        importance: 5,
        problem:
          '좋아요/스크랩 중복 방지를 애플리케이션 레벨에서만 처리할 경우, 동시 요청 환경에서 Race Condition으로 인한 중복 데이터 발생 위험이 존재했습니다. 또한 댓글 물리 삭제 시 대댓글 스레드와 활동 이력이 함께 소실되어 데이터 일관성이 깨지는 문제를 인식했습니다.',
        solution:
          'PostLike/PostScrap 엔티티에 @EmbeddedId 복합 키(userId + postId)를 적용하여 DB 고유 제약 조건으로 중복 방지를 데이터베이스 레벨에서 최종 보장했습니다. 댓글은 물리 삭제 대신 status 필드(ALIVE/DELETED) 기반 소프트 딜리트로 처리하여 대댓글 스레드 구조와 데이터 이력을 보존하고, 삭제 표시 댓글은 "삭제된 댓글입니다"로 렌더링하여 UX 연속성을 유지했습니다.',
        result:
          '애플리케이션 로직에만 의존하지 않고 DB 제약 조건이 데이터 무결성을 최종 방어하는 이중 보호 구조를 달성했습니다. 소프트 딜리트 적용으로 대댓글 컨텍스트 보존 및 향후 데이터 감사(Audit) 요구사항에도 유연하게 대응 가능한 구조를 확보했습니다.',
        learned:
          '애플리케이션 레벨 검증과 데이터베이스 제약 조건은 역할이 다릅니다. 동시성 환경에서 Race Condition은 트랜잭션과 DB 제약 조건 없이는 완전히 차단할 수 없으며, 소프트 딜리트는 단순한 데이터 보존을 넘어 시스템의 감사 가능성(Auditability)과 UX 연속성을 동시에 확보하는 설계 철학임을 배웠습니다.',
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
      {
        id: 3,
        title: '4,000건 대량 저장 시 단일 트랜잭션 메모리 과부하 해결',
        category: 'performance',
        importance: 3,
        problem:
          '국토교통부 ITS API에서 전국 고속도로 CCTV 데이터 4,000건 이상을 DB에 저장하는 과정에서, 단일 트랜잭션으로 처리하면 JPA 영속성 컨텍스트에 엔티티가 계속 누적되어 메모리 압박이 심해지고, 마지막 한 건이 실패해도 전체가 롤백되는 위험이 있었습니다.',
        solution:
          '데이터를 500개 단위 슬라이스로 나눠 반복 저장하도록 변경했습니다. 각 배치 저장 메서드에 @Transactional(propagation = Propagation.REQUIRES_NEW)를 적용해 호출 시마다 독립적인 트랜잭션이 생성되도록 했고, 배치 저장 후에는 em.clear()로 영속성 컨텍스트를 즉시 해제했습니다.',
        result:
          '특정 배치가 실패하더라도 나머지 배치는 정상 저장되는 부분 성공 구조가 완성됐습니다. 영속성 컨텍스트를 배치 단위로 비워 힙 메모리 사용량이 일정 수준을 유지하게 됐습니다.',
        learned:
          '대량 데이터 처리에서는 트랜잭션 경계와 JPA 영속성 컨텍스트의 생명주기를 분리해서 관리해야 합니다. REQUIRES_NEW를 통한 독립 트랜잭션 분리는 부분 실패 허용 시나리오에 유용한 패턴이며, em.clear()를 배치 단위로 호출해 메모리를 직접 제어하는 것이 중요합니다.',
      },
      {
        id: 4,
        title: 'FFmpeg HLS 스트림 캡처 불안정 문제 — 옵션 설계와 동시성 제어',
        category: 'devops',
        importance: 4,
        problem:
          'AI 분석을 위해 전국 CCTV의 HLS 스트림에서 FFmpeg으로 이미지를 캡처하는 과정에서 빈번한 실패가 발생했습니다. 스트림 초반의 손상된 프레임으로 캡처가 중단되거나, 네트워크 불안정으로 FFmpeg 프로세스가 응답 없이 멈추는 상황이 반복됐습니다. 수천 개의 CCTV를 동시에 처리할 때는 스레드 자원 고갈 문제도 발생했습니다.',
        solution:
          'FFmpeg 실행 옵션을 체계적으로 보강했습니다. -ss 00:00:01로 스트림 초반의 불안정한 프레임을 건너뛰고, -rw_timeout 15000000으로 네트워크 타임아웃을 명시적으로 설정했습니다. -fflags +discardcorrupt와 -err_detect ignore_err로 손상 프레임이 있어도 캡처를 중단하지 않도록 했습니다. 동시성 제어를 위해 ThreadPoolTaskExecutor로 스레드 풀을 고정 크기로 운영했습니다.',
        result:
          '캡처 성공률이 의미 있게 향상됐고, 특정 CCTV 한 건의 실패가 다른 CCTV 처리에 영향을 주지 않는 격리된 구조가 됐습니다. 스레드 풀 크기 제한으로 서버 자원이 한계치를 초과하지 않도록 제어할 수 있게 됐습니다.',
        learned:
          '외부 프로세스를 Java에서 호출할 때는 타임아웃, 오류 처리, 리소스 해제를 코드 레벨에서 명시적으로 설계해야 합니다. 실시간 스트리밍 데이터는 품질이 균일하지 않아, 방어적인 옵션 구성이 안정성에 직접적인 영향을 줍니다.',
      },
      {
        id: 5,
        title: 'Redis Stream 유령 컨슈머(Ghost Consumer) 문제 해결',
        category: 'architecture',
        importance: 5,
        problem:
          '워커 프로세스가 비정상 종료될 경우, Redis Stream 컨슈머 그룹에 해당 consumer가 잔류하면서 pending 상태의 메시지를 아무도 처리하지 않는 상황이 발생했습니다. 유령 컨슈머로 남은 pending 메시지는 재처리되지 않아 분석 누락이 생겼습니다.',
        solution:
          'SIGTERM/SIGINT 핸들러를 등록해 워커 종료 시 XGROUP DELCONSUMER를 호출하여 컨슈머를 명시적으로 해제하도록 했습니다. 정상 종료가 보장되지 않는 경우를 대비해 XAUTOCLAIM으로 일정 시간 idle 상태인 pending 메시지를 살아있는 워커가 재획득하는 visibility timeout 루프도 함께 구현했습니다.',
        result:
          '워커 비정상 종료 이후에도 pending 메시지가 다른 워커로 자동 인계되어 분석 누락 없이 재처리가 가능한 구조를 확보했습니다. 유령 컨슈머가 컨슈머 그룹에 잔류하는 문제도 해소됐습니다.',
        learned:
          '분산 메시지 시스템에서 컨슈머 생명주기 관리는 메시지 발행 로직만큼 중요합니다. 정상 종료 경로와 비정상 종료 경로를 모두 설계해야 하며, XAUTOCLAIM 기반 재획득 루프는 컨슈머 장애를 자동으로 흡수하는 핵심 안전망입니다.',
      },
      {
        id: 6,
        title: '동기 라이브러리를 FastAPI 비동기 환경에서 호출하는 문제 해결',
        category: 'architecture',
        importance: 6,
        problem:
          'FastAPI(비동기 환경)에서 동기 I/O 블로킹 라이브러리인 swiftclient를 직접 호출하면 이벤트 루프 전체가 블로킹되는 문제가 발생했습니다. 반대로 동기 함수 컨텍스트에서 async 업로더 함수를 호출해야 하는 경우도 존재해 단일 해결책으로는 대응이 불가능했습니다.',
        solution:
          '비동기 컨텍스트에서는 loop.run_in_executor()를 사용해 동기 블로킹 호출을 스레드풀로 오프로드했습니다. 동기 컨텍스트에서 async 함수를 호출해야 하는 경우에는 별도 스레드에서 새 이벤트 루프를 생성해 실행하는 방식으로 처리했습니다.',
        result:
          '각 호출 컨텍스트에 맞는 브릿지 패턴을 적용해 이벤트 루프 블로킹 없이 동기·비동기 코드가 공존하는 구조를 완성했습니다.',
        learned:
          '비동기 프레임워크에서 동기 라이브러리를 사용할 때는 이벤트 루프 블로킹 위험을 항상 인식해야 합니다. run_in_executor는 단순하지만 강력한 해결책이며, 동기와 비동기의 경계를 명확히 설계하지 않으면 예상치 못한 곳에서 전체 처리가 멈추는 상황이 발생합니다.',
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
        title: 'AI 분석 비동기 처리 + WebSocket 실시간 알림 구조 설계',
        category: 'architecture',
        importance: 1,
        problem:
          '운동 영상을 업로드하면 FastAPI AI 서버가 포즈를 분석하는데 수 초에서 수십 초가 소요됩니다. 초기에는 Spring Boot에서 FastAPI로 동기 HTTP 요청을 보내고 분석 결과를 기다렸는데, 클라이언트 HTTP 요청이 응답 대기 중 타임아웃으로 끊기거나 그 시간 동안 서버 스레드가 점유되는 문제가 발생했습니다.',
        solution:
          '요청과 결과 수신을 분리하는 구조로 전환했습니다. 피드백 초안 레코드를 먼저 DB에 저장해 feedback_id를 발급하고, WebClient.subscribe()로 FastAPI에 비동기 전송 후 클라이언트에 즉시 201 Created를 반환합니다. 클라이언트는 feedback_id 기준으로 WebSocket 연결을 맺고 대기하며, 분석 완료 시 FeedbackWebSocketHandler가 해당 세션에 완료 메시지를 전송하고 연결을 종료합니다. WebSocket 세션은 ConcurrentHashMap으로 feedbackId 기준 격리해 다수의 동시 요청을 안전하게 처리했습니다.',
        result:
          '클라이언트가 업로드 직후 즉시 응답을 받고, 분석 완료 시 WebSocket 메시지로 결과를 수신할 수 있게 되었습니다. 서버 스레드 점유 문제도 함께 해소되었습니다.',
        learned:
          '처리 시간이 긴 외부 서비스 연동에서는 요청-처리-응답을 동기로 묶지 않고, 즉시 응답 + 비동기 처리 + 완료 알림 푸시의 세 단계로 분리하는 것이 더 안정적입니다. ConcurrentHashMap으로 세션을 격리한 경험을 통해 자료구조 선택이 동시성 설계와 직결됨을 직접 체감했습니다.',
      },
      {
        id: 3,
        title: '브라우저 영상 재생 불가 — 코덱·컨테이너 구조 문제 해결',
        category: 'devops',
        importance: 2,
        problem:
          '분석 완료된 영상을 MinIO에 업로드 후 URL을 반환했는데 브라우저에서 영상이 전혀 재생되지 않았습니다. 원인은 두 가지였습니다. OpenCV 기본 코덱인 MJPG는 AVI 전용으로 브라우저가 인식하지 못하고, mp4v는 H.264가 아닌 MPEG-4 Part 2 계열이라 호환성이 낮았습니다. 또한 MP4 파일의 메타데이터 블록(moov atom)이 파일 끝에 위치하면 브라우저가 파일을 전부 내려받아야만 재생을 시작할 수 있어 스트리밍이 불가능했습니다.',
        solution:
          'OpenCV만으로 H.264 직접 인코딩을 시도했지만 환경마다 코덱 이름이 달라 불안정했습니다. 2단계 인코딩 파이프라인으로 전환해, OpenCV로 분석·드로잉된 프레임을 임시 파일로 저장한 뒤 FFmpeg으로 H.264 재인코딩과 함께 moov atom을 파일 앞으로 재배치하는 faststart 옵션을 적용했습니다. FFmpeg 실패 시 원본 파일로 폴백하는 안전 분기도 추가했습니다.',
        result:
          '영상 URL을 받는 즉시 버퍼링 없이 브라우저 재생이 시작되고, Chrome·Firefox·Safari 전 브라우저 호환성을 확보했습니다. 파일 크기도 MJPG 대비 약 60~70% 수준으로 감소했습니다.',
        learned:
          '파일 확장자가 .mp4라고 해서 브라우저에서 재생되는 것이 아닙니다. 코덱, 컨테이너 구조, 브라우저 미디어 스펙이 함께 맞아야 합니다. 서버에서 파일을 생성할 때부터 어떤 클라이언트가 소비할 것인지를 고려한 인코딩 전략이 필요하다는 것을 배웠습니다.',
      },
    ],
    troubleCards: [
      {
        id: 1,
        title: 'AI 분석 비동기 처리 + WebSocket 실시간 알림 구조 설계',
        category: 'architecture',
        importance: 1,
        problem:
          '운동 영상을 업로드하면 FastAPI AI 서버가 포즈를 분석하는데 수 초에서 수십 초가 소요됩니다. 초기에는 Spring Boot에서 FastAPI로 동기 HTTP 요청을 보내고 분석 결과를 기다렸는데, 클라이언트 HTTP 요청이 응답 대기 중 타임아웃으로 끊기거나 그 시간 동안 서버 스레드가 점유되는 문제가 발생했습니다.',
        solution:
          '요청과 결과 수신을 분리하는 구조로 전환했습니다. 피드백 초안 레코드를 먼저 DB에 저장해 feedback_id를 발급하고, WebClient.subscribe()로 FastAPI에 비동기 전송 후 클라이언트에 즉시 201 Created를 반환합니다. 클라이언트는 feedback_id 기준으로 WebSocket 연결을 맺고 대기하며, 분석 완료 시 FeedbackWebSocketHandler가 해당 세션에 완료 메시지를 전송하고 연결을 종료합니다. WebSocket 세션은 ConcurrentHashMap으로 feedbackId 기준 격리해 다수의 동시 요청을 안전하게 처리했습니다.',
        result:
          '클라이언트가 업로드 직후 즉시 응답을 받고, 분석 완료 시 WebSocket 메시지로 결과를 수신할 수 있게 되었습니다. 서버 스레드 점유 문제도 함께 해소되었습니다.',
        learned:
          '처리 시간이 긴 외부 서비스 연동에서는 요청-처리-응답을 동기로 묶지 않고, 즉시 응답 + 비동기 처리 + 완료 알림 푸시의 세 단계로 분리하는 것이 더 안정적입니다. ConcurrentHashMap으로 세션을 격리한 경험을 통해 자료구조 선택이 동시성 설계와 직결됨을 직접 체감했습니다.',
      },
      {
        id: 2,
        title: '이기종 테이블 통합 조회의 JPA 한계와 JPA·MyBatis 혼용 전략',
        category: 'architecture',
        importance: 3,
        problem:
          '캘린더 화면에서 날짜를 선택하면 운동 기록과 루틴 수행 기록을 하나의 목록으로 묶어서 내려줘야 했습니다. JPA Repository로 구현을 시도했는데, 서로 다른 엔티티를 UNION으로 합치는 쿼리는 JPQL로 작성할 수 없었고, 네이티브 쿼리로는 결과를 공통 DTO로 매핑하는 과정이 번거롭고 타입 안전성도 낮았습니다.',
        solution:
          '단순 CRUD는 JPA Repository를 유지하고, 통합 조회 쿼리만 MyBatis XML 매퍼로 분리했습니다. UnifiedLogMapper.xml에 UNION ALL 쿼리를 작성하고, 두 테이블의 공통 컬럼과 루틴 전용 컬럼을 포함하는 UnifiedLogDto에 결과를 매핑했습니다. 루틴 기록에 없는 컬럼은 NULL AS feedback 형태로 채워 스키마를 맞췄습니다.',
        result:
          '별도 테이블 구조를 건드리지 않고 두 기록 유형을 하나의 응답으로 통합 반환할 수 있게 되었습니다. 날짜별 조회, 월별 기록 날짜 목록, 단건 조회를 모두 동일한 DTO 구조로 처리합니다.',
        learned:
          'JPA는 단일 엔티티 CRUD와 연관관계 탐색에 강하지만, 이기종 테이블 집계나 UNION 조회에는 한계가 있습니다. 두 기술을 혼용할 때 어떤 경우에 어떤 기술을 선택할 것인가의 기준을 정해두지 않으면 나중에 어느 쪽에서 어떤 쿼리를 찾아야 하는지 파악하기 어려워진다는 것을 직접 경험했습니다.',
      },
      {
        id: 3,
        title: '브라우저 영상 재생 불가 — 코덱·컨테이너 구조 문제 해결',
        category: 'devops',
        importance: 2,
        problem:
          '분석 완료된 영상을 MinIO에 업로드 후 URL을 반환했는데 브라우저에서 영상이 전혀 재생되지 않았습니다. 원인은 두 가지였습니다. OpenCV 기본 코덱인 MJPG는 AVI 전용으로 브라우저가 인식하지 못하고, mp4v는 H.264가 아닌 MPEG-4 Part 2 계열이라 호환성이 낮았습니다. 또한 MP4 파일의 메타데이터 블록(moov atom)이 파일 끝에 위치하면 브라우저가 파일을 전부 내려받아야만 재생을 시작할 수 있어 스트리밍이 불가능했습니다.',
        solution:
          'OpenCV만으로 H.264 직접 인코딩을 시도했지만 환경마다 코덱 이름이 달라 불안정했습니다. 2단계 인코딩 파이프라인으로 전환해, OpenCV로 분석·드로잉된 프레임을 임시 파일로 저장한 뒤 FFmpeg으로 H.264 재인코딩과 함께 moov atom을 파일 앞으로 재배치하는 faststart 옵션을 적용했습니다. FFmpeg 실패 시 원본 파일로 폴백하는 안전 분기도 추가했습니다.',
        result:
          '영상 URL을 받는 즉시 버퍼링 없이 브라우저 재생이 시작되고, Chrome·Firefox·Safari 전 브라우저 호환성을 확보했습니다. 파일 크기도 MJPG 대비 약 60~70% 수준으로 감소했습니다.',
        learned:
          '파일 확장자가 .mp4라고 해서 브라우저에서 재생되는 것이 아닙니다. 코덱, 컨테이너 구조, 브라우저 미디어 스펙이 함께 맞아야 합니다. 서버에서 파일을 생성할 때부터 어떤 클라이언트가 소비할 것인지를 고려한 인코딩 전략이 필요하다는 것을 배웠습니다.',
      },
      {
        id: 4,
        title: '모바일 세로 촬영 영상의 자동 회전 처리',
        category: 'architecture',
        importance: 4,
        problem:
          '스마트폰으로 촬영한 운동 영상을 분석하면 MediaPipe가 랜드마크를 엉뚱한 위치에서 감지하거나 아예 감지에 실패하는 케이스가 발생했습니다. iOS/Android 카메라 앱은 실제 픽셀 데이터를 가로 방향으로 저장하면서 90도 회전해서 보여달라는 플래그를 메타데이터에 심어두는데, OpenCV의 VideoCapture는 이 메타데이터를 무시하고 원시 픽셀을 그대로 읽어 MediaPipe에 사람이 90도 누워있는 프레임이 입력되어 포즈 추정이 실패했습니다.',
        solution:
          'FFprobe로 영상의 회전 메타데이터를 먼저 파싱한 뒤, OpenCV 프레임 읽기 직후 해당 각도만큼 역회전을 적용하는 전처리 단계를 파이프라인에 추가했습니다. 영상 처리 시작 시 한 번만 회전 값을 파악하고, 이후 모든 프레임에 일관되게 적용합니다.',
        result:
          'iOS/Android 모바일 세로 촬영 영상에서도 MediaPipe 랜드마크 감지가 정상화되었습니다. 사용자에게 "가로로 찍어주세요" 안내 없이도 다양한 촬영 방향을 자동으로 지원할 수 있게 되었습니다.',
        learned:
          '영상 데이터는 픽셀 배열과 메타데이터의 복합 구조입니다. OpenCV처럼 저수준 라이브러리는 메타데이터를 처리하지 않기 때문에 파이프라인 설계 시 미디어 메타데이터 파싱 단계를 명시적으로 포함해야 합니다. 사용자가 직접 촬영한 콘텐츠를 다루는 서비스라면 기기마다 다른 촬영 방향을 전처리 단계에서 정규화하는 것이 필수입니다.',
      },
    ],
  },
]

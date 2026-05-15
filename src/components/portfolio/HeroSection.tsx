'use client'

import { contactInfo, skillGroups } from '@/data/resumeData'

const HERO_SKILLS = [
  { label: 'Languages', value: 'Java · Python · JavaScript' },
  { label: 'Frameworks', value: 'Spring Boot · FastAPI · React' },
  { label: 'Database', value: 'MySQL · PostgreSQL · Redis' },
  { label: 'DevOps', value: 'Docker · Jenkins · OpenStack' },
  { label: 'Libraries & Tools', value: 'WebClient · WebSocket · FFmpeg · OpenCV · MinIO', full: true },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-14 flex items-center"
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      <div className="w-full max-w-5xl mx-auto px-6 py-20">
        {/* lg 이상: 2열(이름|스킬카드), 그 아래: 세로 스택 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── 좌측: 이름 / 슬로건 / 버튼 ── */}
          <div>
            {/* eyebrow */}
            <p
              className="text-xs tracking-widest uppercase mb-5 flex items-center gap-2"
              style={{ color: 'var(--accent-primary)' }}
            >
              <span
                className="inline-block w-7 h-px"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              />
              Backend Developer
            </p>

            {/* 이름 */}
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              허<span style={{ color: 'var(--accent-primary)' }}>태범</span>
            </h1>

            {/* 부제 */}
            <p
              className="text-base mb-6 italic"
              style={{ color: 'var(--text-secondary)' }}
            >
              코드에 근거를 두는 개발자
            </p>

            {/* 설명 */}
            <p
              className="text-sm leading-relaxed mb-8 pl-4 border-l-2 max-w-md"
              style={{
                color: 'var(--text-secondary)',
                borderColor: 'var(--accent-secondary)',
              }}
            >
              단순한 기능 구현을 넘어, 기술 도입의 이유와 근거를 탐구합니다.
              <br />
              대규모 트래픽에도 무너지지 않는 확장 가능한 백엔드 아키텍처를 설계하며,
              인프라부터 배포 자동화까지 전체를 조망합니다.
            </p>

            {/* CTA 버튼 */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded text-sm font-semibold transition-all"
                style={{ backgroundColor: 'var(--accent-primary)', color: '#fff' }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#0F6E56'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    'var(--accent-primary)'
                }}
              >
                프로젝트 보기
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="px-5 py-2.5 rounded text-sm font-semibold border transition-all"
                style={{
                  color: 'var(--text-primary)',
                  borderColor: 'rgba(28,28,26,0.22)',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'var(--accent-primary)'
                  el.style.color = 'var(--accent-primary)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'rgba(28,28,26,0.22)'
                  el.style.color = 'var(--text-primary)'
                }}
              >
                연락하기
              </a>
            </div>
          </div>

          {/* ── 우측: 스킬 카드 (항상 표시, lg 이상에서 우측 정렬) ── */}
          <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div
              className="w-full max-w-sm rounded-xl relative"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid rgba(28,28,26,0.18)',
              }}
            >
              {/* 상단 액센트 바 */}
              <div
                className="absolute top-0 left-8 right-8 h-0.5 rounded-b"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              />

              {/* 카드 헤더 */}
              <div
                className="px-6 pt-5 pb-4 flex items-center gap-2 text-xs"
                style={{ color: 'var(--text-muted)' }}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--accent-secondary)' }}
                />
                skills.json
              </div>

              {/* 스킬 그리드 */}
              <div className="px-5 pb-5 grid grid-cols-2 gap-2.5">
                {HERO_SKILLS.map((skill) => (
                  <div
                    key={skill.label}
                    className={`rounded-lg p-3 ${skill.full ? 'col-span-2' : ''}`}
                    style={{
                      backgroundColor: 'var(--bg-main)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <p
                      className="text-xs uppercase tracking-widest mb-1.5"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      {skill.label}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {skill.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projectsData, CATEGORY_META, type TroubleCard, type Project } from '@/data/projects'

// ── 아코디언 카드 ─────────────────────────────────────────
function HighlightCard({ card }: { card: TroubleCard }) {
  const [open, setOpen] = useState(false)
  const cat = CATEGORY_META[card.category]

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{ border: '0.5px solid var(--border)', backgroundColor: 'var(--bg-card)' }}
    >
      {/* 헤더 */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left flex items-center gap-3 px-4 py-3.5 transition-colors"
        style={{ backgroundColor: open ? '#F5F0E8' : 'var(--bg-main)' }}
      >
        {/* 아이콘 박스 26×26 */}
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-md"
          style={{ width: 26, height: 26, backgroundColor: '#E1F5EE', color: '#1D9E75' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>

        {/* 제목 */}
        <span className="flex-1 text-xs font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
          {card.title}
        </span>

        {/* 카테고리 칩 + chevron */}
        <div className="flex items-center gap-2 flex-shrink-0 ml-1">
          <span
            className="hidden sm:inline text-xs px-2 py-0.5 rounded"
            style={{ backgroundColor: cat.bg, color: cat.text }}
          >
            {cat.label}
          </span>
          <svg
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            style={{
              width: 14, height: 14,
              color: 'var(--accent-primary)',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      {/* 바디 */}
      {open && (
        <div className="px-4 pb-4 pt-3 border-t accordion-open" style={{ borderColor: 'var(--border)' }}>
          <div className="flex flex-col gap-3">
            {(
              [
                { label: '문제 인식', text: card.problem,   color: '#993C1D', border: 'var(--border)',  special: false },
                { label: '해결 방안', text: card.solution,  color: '#185FA5', border: 'var(--border)',  special: false },
                { label: '결과',     text: card.result,    color: '#0F6E56', border: '#5DCAA5',        special: false },
                { label: '회고',     text: card.learned,   color: '#533AB7', border: 'var(--border)',  special: true  },
              ] as { label: string; text: string; color: string; border: string; special: boolean }[]
            ).map(({ label, text, color, border, special }) => (
              <div key={label} className="grid gap-2.5" style={{ gridTemplateColumns: '56px 1fr' }}>
                <span
                  className="text-xs uppercase tracking-wider text-right pt-0.5"
                  style={{ color }}
                >
                  {label}
                </span>
                <p
                  className={`text-xs leading-relaxed pl-3 border-l ${special ? 'italic rounded-r' : ''}`}
                  style={{
                    color: special ? '#3C3489' : 'var(--text-secondary)',
                    borderColor: border,
                    backgroundColor: special ? '#EEEDFE' : 'transparent',
                    paddingTop: special ? 4 : 0,
                    paddingBottom: special ? 4 : 0,
                    paddingRight: special ? 8 : 0,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ── 프로젝트 단일 항목 ────────────────────────────────────
function ProjectItem({ project }: { project: Project }) {
  return (
    <div
      className="py-12 border-b last:border-b-0"
      style={{ borderColor: 'var(--border)' }}
    >
      {/* 모바일: 1단 / md 이상: 사이드바(210px) + 메인 */}
      <div className="flex flex-col md:grid md:gap-0" style={{ gridTemplateColumns: '210px 1fr' } as React.CSSProperties}>

        {/* ── 좌측 사이드바 ── */}
        <div
          className="mb-8 md:mb-0 md:pr-8 md:border-r flex-shrink-0"
          style={{ borderColor: 'var(--border)' }}
        >
          {/* eyebrow */}
          <p className="text-xs tracking-widest mb-2.5" style={{ color: '#1D9E75' }}>
            {project.number} / {project.type}
          </p>

          {/* 프로젝트명 */}
          <h3 className="mb-1 leading-tight" style={{ fontSize: 22, fontWeight: 500, color: 'var(--text-primary)' }}>
            {project.name}
          </h3>

          {/* 한줄 설명 */}
          <p className="mb-3" style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            {project.subtitle}
          </p>

          {/* 기간 */}
          <p className="mb-4" style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            {project.period}
          </p>

          {/* 기술 스택 태그 */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded"
                style={{
                  fontSize: 11,
                  padding: '2px 8px',
                  backgroundColor: '#E1F5EE',
                  color: '#0F6E56',
                  border: '0.5px solid rgba(29,158,117,0.3)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 담당/팀 태그 */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {[project.role, project.teamSize].map((tag) => (
              <span
                key={tag}
                className="rounded"
                style={{
                  fontSize: 11,
                  padding: '2px 8px',
                  backgroundColor: 'var(--bg-main)',
                  color: 'var(--text-secondary)',
                  border: '0.5px solid var(--border)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* GitHub 버튼 */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded transition-colors"
            style={{
              fontSize: 11,
              padding: '4px 12px',
              color: 'var(--text-secondary)',
              border: '0.5px solid var(--border)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.color = '#1D9E75'
              el.style.borderColor = '#1D9E75'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.color = 'var(--text-secondary)'
              el.style.borderColor = 'var(--border)'
            }}
          >
            GitHub →
          </a>
        </div>

        {/* ── 우측 메인 영역 ── */}
        <div className="md:pl-8">
          {/* 설명 블록 */}
          <p
            className="text-sm leading-relaxed mb-5 px-4 py-3.5 rounded-r-lg"
            style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              fontSize: 13.5,
              backgroundColor: 'var(--bg-card)',
              borderLeft: '2px solid #5DCAA5',
              border: '0.5px solid var(--border)',
              borderLeftWidth: 2,
              borderLeftColor: '#5DCAA5',
            }}
          >
            {project.description}
          </p>

          {/* 핵심 기여 카드 */}
          <div className="flex flex-col gap-2.5 mb-4">
            {project.highlights.map((card) => (
              <HighlightCard key={card.id} card={card} />
            ))}
          </div>

          {/* 카드 푸터 */}
          <div
            className="flex items-center justify-between px-1 pt-3 border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
              <span style={{ color: '#1D9E75', fontWeight: 600 }}>
                {project.troubleCards.length - project.highlights.length}
              </span>
              개가 더 있습니다
            </span>

            <Link
              href={`/projects/${project.slug}`}
              className="rounded transition-colors"
              style={{
                fontSize: 12,
                padding: '4px 12px',
                color: 'var(--text-secondary)',
                border: '0.5px solid var(--border)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.color = '#1D9E75'
                el.style.borderColor = '#1D9E75'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.color = 'var(--text-secondary)'
                el.style.borderColor = 'var(--border)'
              }}
            >
              트러블슈팅 더 보러가기 →
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

// ── 메인 섹션 ─────────────────────────────────────────────
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p
            className="text-xs tracking-widest uppercase mb-2 flex items-center gap-2"
            style={{ color: '#1D9E75' }}
          >
            <span style={{ color: '#5DCAA5' }}>//</span> Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            프로젝트 경험
          </h2>
        </div>

        <div>
          {projectsData.map((project) => (
            <ProjectItem key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

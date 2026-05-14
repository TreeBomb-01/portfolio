'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { CATEGORY_META, type TroubleCard, type Project } from '@/data/projects'

// ── 카테고리 칩 ───────────────────────────────────────────
function CategoryChip({ category }: { category: TroubleCard['category'] }) {
  const { label, bg, text } = CATEGORY_META[category]
  return (
    <span
      className="font-mono rounded"
      style={{ fontSize: 11, padding: '2px 8px', backgroundColor: bg, color: text }}
    >
      {label}
    </span>
  )
}

// ── 아코디언 카드 ─────────────────────────────────────────
function TroubleCardItem({ card, index }: { card: TroubleCard; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{ border: '0.5px solid var(--border)', backgroundColor: 'var(--bg-card)' }}
    >
      {/* 헤더 */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left flex items-start gap-3 px-5 py-4 transition-colors"
        style={{ backgroundColor: open ? '#F5F0E8' : 'var(--bg-main)', cursor: 'pointer' }}
      >
        {/* 번호 뱃지 22×22 원형 */}
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-full font-mono font-semibold"
          style={{
            width: 22, height: 22,
            backgroundColor: '#E1F5EE',
            color: '#0F6E56',
            fontSize: 10,
            marginTop: 1,
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* 제목 + 칩 + 날짜 */}
        <div className="flex-1 min-w-0">
          <span className="text-sm font-semibold leading-snug block" style={{ color: 'var(--text-primary)' }}>
            {card.title}
          </span>
          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
            <CategoryChip category={card.category} />
            <span className="font-mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>
              {card.date}
            </span>
          </div>
        </div>

        {/* chevron */}
        <svg
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          style={{
            width: 14, height: 14, flexShrink: 0,
            color: '#1D9E75', marginTop: 4,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* 바디 */}
      {open && (
        <div className="px-5 pb-5 pt-4 border-t accordion-open" style={{ borderColor: 'var(--border)' }}>
          <div className="flex flex-col gap-3.5">
            {(
              [
                { label: '문제 인식', text: card.problem,  color: '#993C1D', border: 'var(--border)',  special: false },
                { label: '해결 방안', text: card.solution, color: '#185FA5', border: 'var(--border)',  special: false },
                { label: '결과',     text: card.result,   color: '#0F6E56', border: '#5DCAA5',        special: false },
                { label: '배운 점',  text: card.learned,  color: '#533AB7', border: 'var(--border)',  special: true  },
              ] as { label: string; text: string; color: string; border: string; special: boolean }[]
            ).map(({ label, text, color, border, special }) => (
              <div key={label} className="grid gap-3" style={{ gridTemplateColumns: '56px 1fr' }}>
                <span
                  className="font-mono text-xs uppercase tracking-wider text-right pt-0.5"
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
                    paddingTop: special ? 6 : 0,
                    paddingBottom: special ? 6 : 0,
                    paddingRight: special ? 10 : 0,
                    lineHeight: 1.8,
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

// ── 메인 클라이언트 컴포넌트 ──────────────────────────────
export default function ProjectDetail({ project }: { project: Project }) {
  const [sortBy, setSortBy] = useState<'importance' | 'date'>('importance')

  const sorted = useMemo(() => {
    return [...project.troubleCards].sort((a, b) =>
      sortBy === 'importance'
        ? a.importance - b.importance
        : b.date.localeCompare(a.date)
    )
  }, [project.troubleCards, sortBy])

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      {/* ── 상단 헤더 영역 ── */}
      <div
        className="border-b"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
      >
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* 브레드크럼 */}
          <div className="flex items-center gap-1.5 mb-5 font-mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>
            <Link
              href="/#projects"
              style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#1D9E75' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)' }}
            >
              프로젝트
            </Link>
            <span>›</span>
            <span style={{ color: 'var(--text-primary)' }}>{project.name}</span>
          </div>

          {/* 프로젝트명 */}
          <h1 className="mb-1.5" style={{ fontSize: 20, fontWeight: 500, color: 'var(--text-primary)' }}>
            {project.name}
          </h1>

          {/* 한줄 설명 */}
          <p className="font-mono mb-5" style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            {project.subtitle}
          </p>

          {/* 배지 행 */}
          <div className="flex flex-wrap gap-2">
            {/* 상태 */}
            <span
              className="font-mono rounded"
              style={{
                fontSize: 11, padding: '3px 10px',
                backgroundColor: project.status === 'ongoing' ? '#FAEEDA' : 'var(--bg-main)',
                color: project.status === 'ongoing' ? '#854F0B' : 'var(--text-secondary)',
                border: `0.5px solid ${project.status === 'ongoing' ? '#F0C07A' : 'var(--border)'}`,
              }}
            >
              {project.status === 'ongoing' ? '진행 중' : '완료'}
            </span>

            {/* 역할 */}
            <span
              className="font-mono rounded"
              style={{
                fontSize: 11, padding: '3px 10px',
                backgroundColor: 'var(--bg-main)',
                color: 'var(--text-secondary)',
                border: '0.5px solid var(--border)',
              }}
            >
              {project.role}
            </span>

            {/* 기간 */}
            <span
              className="font-mono rounded"
              style={{
                fontSize: 11, padding: '3px 10px',
                backgroundColor: 'var(--bg-main)',
                color: 'var(--text-secondary)',
                border: '0.5px solid var(--border)',
              }}
            >
              {project.period}
            </span>

            {/* 팀 구성 */}
            <span
              className="font-mono rounded"
              style={{
                fontSize: 11, padding: '3px 10px',
                backgroundColor: 'var(--bg-main)',
                color: 'var(--text-secondary)',
                border: '0.5px solid var(--border)',
              }}
            >
              {project.teamSize}
            </span>
          </div>
        </div>
      </div>

      {/* ── 정렬 바 ── */}
      <div
        className="border-b sticky top-0 z-10"
        style={{
          borderColor: 'var(--border)',
          backgroundColor: 'var(--bg-card)',
          borderTop: `0.5px solid var(--border)`,
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>
              정렬
            </span>
            <div className="flex rounded overflow-hidden" style={{ border: '0.5px solid var(--border)' }}>
              {(['importance', 'date'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setSortBy(key)}
                  className="font-mono transition-colors"
                  style={{
                    fontSize: 11,
                    padding: '4px 12px',
                    backgroundColor: sortBy === key ? '#E1F5EE' : '#fff',
                    color: sortBy === key ? '#0F6E56' : 'var(--text-secondary)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {key === 'importance' ? '중요도순' : '최신순'}
                </button>
              ))}
            </div>
          </div>

          <span className="font-mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>
            <span style={{ color: '#1D9E75', fontWeight: 600 }}>{sorted.length}</span>개
          </span>
        </div>
      </div>

      {/* ── 카드 목록 ── */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-3">
          {sorted.map((card, i) => (
            <TroubleCardItem key={card.id} card={card} index={i} />
          ))}
        </div>

        {/* 하단 back 링크 */}
        <div className="mt-12 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
          <Link
            href="/#projects"
            className="font-mono inline-flex items-center gap-1.5 transition-colors"
            style={{ fontSize: 12, color: 'var(--text-muted)', textDecoration: 'none' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#1D9E75' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)' }}
          >
            ← 포트폴리오로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}

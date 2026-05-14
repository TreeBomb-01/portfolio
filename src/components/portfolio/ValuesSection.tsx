import { values } from '@/data/resumeData'

export default function ValuesSection() {
  return (
    <section id="values" className="py-24" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2
            className="text-3xl font-bold section-heading"
            style={{ color: 'var(--text-primary)' }}
          >
            Values
          </h2>
          <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>
            개발 철학
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.number}
              className="portfolio-card p-7 flex flex-col gap-4"
            >
              {/* Number + keyword row */}
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-4xl font-bold leading-none"
                  style={{ color: 'var(--border)' }}
                >
                  {v.number}
                </span>
                <span className="tech-tag">{v.keyword}</span>
              </div>

              {/* Title */}
              <h3
                className="text-base font-semibold leading-snug"
                style={{ color: 'var(--text-primary)' }}
              >
                {v.title}
              </h3>

              {/* Divider */}
              <div
                className="w-8 h-0.5 rounded"
                style={{ backgroundColor: 'var(--accent-secondary)' }}
              />

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { awards, education, certifications, activities, courses } from '@/data/resumeData'

export default function AwardsSection() {
  return (
    <section
      id="awards"
      className="py-24"
      style={{ backgroundColor: 'var(--bg-card)' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2
            className="text-3xl font-bold section-heading"
            style={{ color: 'var(--text-primary)' }}
          >
            Awards & Education
          </h2>
          <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>
            수상 및 교육
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* 좌측: 수상 경력 */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest font-mono mb-5"
              style={{ color: 'var(--accent-primary)' }}
            >
              수상 경력
            </h3>
            <div className="space-y-4">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="portfolio-card p-5 flex items-start gap-4"
                  style={{ backgroundColor: 'var(--bg-main)' }}
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">{award.rank.split(' ')[0]}</span>
                  <div>
                    <p
                      className="font-semibold text-sm leading-snug"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {award.rank.split(' ').slice(1).join(' ')}
                      {award.title && <span style={{ color: 'var(--text-muted)' }}> — {award.title}</span>}
                    </p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                      {award.competition}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                      {award.organizer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 우측: 학력 + 자격증 + 기타 활동 + 직무 교육 */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3
                className="text-xs font-semibold uppercase tracking-widest font-mono mb-5"
                style={{ color: 'var(--accent-primary)' }}
              >
                학력
              </h3>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="portfolio-card p-5"
                    style={{ backgroundColor: 'var(--bg-main)' }}
                  >
                    <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                      {edu.institution}
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                      {edu.detail}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {edu.period}
                      </span>
                      {edu.gpa && (
                        <span className="tech-tag">GPA {edu.gpa}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Certifications */}
            <div>
              <h3
                className="text-xs font-semibold uppercase tracking-widest font-mono mb-5"
                style={{ color: 'var(--accent-primary)' }}
              >
                자격증
              </h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, i) => (
                  <span
                    key={i}
                    className="portfolio-card px-4 py-2 text-sm font-medium"
                    style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-primary)' }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div>
              <h3
                className="text-xs font-semibold uppercase tracking-widest font-mono mb-5"
                style={{ color: 'var(--accent-primary)' }}
              >
                기타 활동
              </h3>
              <div className="space-y-2">
                {activities.map((act, i) => (
                  <p key={i} className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    — {act}
                  </p>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div>
              <h3
                className="text-xs font-semibold uppercase tracking-widest font-mono mb-5"
                style={{ color: 'var(--accent-primary)' }}
              >
                직무 교육
              </h3>
              <div className="space-y-2">
                {courses.map((course, i) => (
                  <p key={i} className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    — {course}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

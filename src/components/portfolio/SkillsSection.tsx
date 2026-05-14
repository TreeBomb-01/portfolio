import { skillGroups } from '@/data/resumeData'

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="xl:hidden py-24"
      style={{ backgroundColor: 'var(--bg-card)' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2
            className="text-3xl font-bold section-heading"
            style={{ color: 'var(--text-primary)' }}
          >
            Skills
          </h2>
          <p className="mt-4 text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
            기술 스택
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="portfolio-card p-6"
              style={{ backgroundColor: 'var(--bg-main)' }}
            >
              <h3
                className="font-mono text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'var(--accent-primary)' }}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

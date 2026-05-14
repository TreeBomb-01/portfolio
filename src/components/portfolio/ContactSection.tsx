import { contactInfo } from '@/data/resumeData'

const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.42 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/TreeBomb-01',
    href: contactInfo.github,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-24" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2
            className="text-3xl font-bold section-heading"
            style={{ color: 'var(--text-primary)' }}
          >
            Contact
          </h2>
          <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>
            연락처
          </p>
        </div>

        <div className="max-w-xl">
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            새로운 기회나 협업 제안을 환영합니다.
            <br />
            언제든지 연락 주세요.
          </p>

          <div className="space-y-3">
            {CONTACT_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'GitHub' ? '_blank' : undefined}
                rel={item.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-5 portfolio-card rounded-xl transition-all group"
              >
                <span
                  className="flex-shrink-0 transition-colors"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  {item.icon}
                </span>
                <div>
                  <p
                    className="text-xs uppercase tracking-widest mb-0.5"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.value}
                  </p>
                </div>
                <svg
                  className="ml-auto"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: 'var(--accent-secondary)' }}
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="max-w-5xl mx-auto px-6 mt-20 pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
        style={{ borderColor: 'var(--border)' }}
      >
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          © 2025 허태범
        </p>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          Built with Next.js + Tailwind CSS
        </p>
      </div>
    </section>
  )
}

import AppWrapper from '@/components/AppWrapper'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'

// ── DATA ──────────────────────────────────────────────

const SKILLS = [
  'Project Management', 'Business Development', 'Web3 / Crypto',
  'DeFi', 'NFT', 'GameFi', 'Go-to-Market', 'Community Growth',
  'KOL Management', 'Tokenomics', 'Marketing Strategy', 'Team Leadership',
]

const EXPERIENCE = [
  {
    period: 'Nov 2025 — Present',
    current: true,
    company: 'Nexira DAEP',
    role: 'Head of Business Development',
    project: null,
    tags: ['BD Strategy', 'Community', 'Airdrop Campaign', 'Team Lead'],
    bullets: [
      'Managed and trained a BD team of 7+ members',
      'Owned end-to-end marketing — community events, seeding, and BD to attract users and boost product sales',
      'Drove rapid growth: 130K X followers and 120K Telegram members in 1 month during airdrop campaign, cost <$1K',
    ],
  },
  {
    period: 'Dec 2024 — Nov 2025',
    current: false,
    company: 'Sovic Labs',
    role: 'Project Manager',
    project: 'Monster Kombat — GameFi',
    tags: ['IAP', 'Agile / Scrum', 'Tokenomics', 'GameFi', '15-person Team'],
    bullets: [
      'Managed a 15-member team (devs, designers, BD, QA) to deliver a blockchain-based game',
      'Led sprints, tracked progress, and resolved blockers to keep development on schedule',
      'Worked with tokenomics and game design to align gameplay with crypto incentives',
      'Community growth: 100K+ users, $100K USD in volume sales',
    ],
  },
  {
    period: 'Oct 2024 — Feb 2025',
    current: false,
    company: 'XOX Labs',
    role: 'Marketing Lead',
    project: 'Gemsfun — Telegram Miniapp',
    tags: ['Marketing', 'KOL Management', 'Telegram', 'TON Ecosystem'],
    bullets: [
      'Developed product launch plans and user acquisition strategies for Telegram miniapp',
      'Created content and campaign ideas to attract and retain users',
      'Managed and grew community channels on Telegram and Twitter',
      'Booked and coordinated KOLs to boost visibility and reach',
      'Outcome: 300K+ in-app users, 100K+ Telegram followers in 1 month with only $600 budget',
    ],
  },
  {
    period: 'Feb 2024 — Nov 2024',
    current: false,
    company: 'Marchi Labs',
    role: 'Head of Business Development',
    project: null,
    tags: ['Head of BD', 'Cross-Marketing', 'Global KOLs', 'Team 10+'],
    bullets: [
      'Managed and trained a BD team of 10+ members',
      'Built marketing strategies to attract users, boost product sales, and optimize cost',
      'Collaborated with ecosystem partners to launch cross-marketing campaigns',
      'Booked and coordinated Global KOLs to amplify project visibility in the crypto community',
    ],
  },
  {
    period: 'Apr 2023 — Feb 2024',
    current: false,
    company: 'Marchi Labs',
    role: 'Team Leader — Marchi Media',
    project: null,
    tags: ['Media Agency', 'Content Strategy', 'Partnerships', 'Revenue Gen'],
    bullets: [
      'Built a Media Agency with 10+ social channels across Base Holic, Arbitrum Holic, Sui Holic, and Scroll Build — each averaging 30K followers',
      'Led planning and strategy for content creation and user acquisition campaigns',
      'Sourced and negotiated partnerships with Web3 projects for marketing support',
      'Generated $10K+ monthly revenue through booking and promotional services',
    ],
  },
  {
    period: 'Apr 2023 — Feb 2024',
    current: false,
    company: 'Defikit',
    role: 'Business Analyst',
    project: 'Rocket Launch — Meme Launchpad',
    tags: ['Business Analysis', 'Product Design', 'QA', 'Berachain'],
    bullets: [
      'Researched market trends and analyzed Pump.fun to design improved features and UX',
      'Worked with CEO, developers, and designers to build and refine the product',
      'Led testing, QA, and iterative feedback to meet product goals',
      'Outcome: Selected for funding by Berachain Foundation as an ecosystem-backed project',
    ],
  },
  {
    period: 'Apr 2022 — Mar 2023',
    current: false,
    company: 'VGS Studio',
    role: 'Researcher · BD · CM · Marketing',
    project: 'Galaxy Survival & Dansa — GameFi',
    tags: ['Research', 'Whitepaper', 'Community Mgmt', 'GameFi'],
    bullets: [
      'Conducted in-depth market and trend research on the GameFi and crypto gaming landscape',
      'Contributed to whitepaper development including game mechanics, tokenomics, and business model',
      'Supported KOL outreach and booking efforts, coordinating promotional campaigns',
      'Managed and nurtured the project\'s community across social platforms',
    ],
  },
]

const ACHIEVEMENTS = [
  {
    stat: '$2.5M',
    label: 'NavyAI Volume Sales',
    desc: '$400K in token sales, 100K+ users acquired through strategic BD campaigns',
  },
  {
    stat: '2M+',
    label: 'In-App Users — Pehe Kingdom',
    desc: 'Telegram Miniapp scaled to 2M+ users on a budget of just $2K',
  },
  {
    stat: '300K+',
    label: 'Users — Gemsfun Miniapp',
    desc: '100K+ Telegram followers in 1 month. Total acquisition cost: only $600',
  },
  {
    stat: '130K',
    label: 'X Followers in 1 Month',
    desc: 'Plus 120K Telegram members during Nexira airdrop campaign — under $1K spend',
  },
  {
    stat: '$500K',
    label: 'Deboard Volume Sales',
    desc: '$70K in token sales, 30K+ users for Deboard product',
  },
  {
    stat: '⚡',
    label: 'Berachain Foundation Funding',
    desc: 'Rocket Launch selected for ecosystem funding by Berachain Foundation',
  },
  {
    stat: '$10K+',
    label: 'Monthly Agency Revenue',
    desc: 'Built Marchi Media to generate $10K+ MRR through promotional services',
  },
  {
    stat: '1.5M+',
    label: 'Users — Panie Miniapp',
    desc: 'Another Telegram Miniapp success story, scaled on ultra-low $1K budget',
  },
]

// ── COMPONENTS ────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--muted)' }}>
      {children}
    </p>
  )
}

function Divider() {
  return <div className="w-full h-px my-20 md:my-28" style={{ background: 'var(--stroke)' }} />
}

// ── ABOUT SECTION ─────────────────────────────────────

function AboutSection() {
  return (
    <section id="about" className="px-6 py-20 md:py-28 max-w-5xl mx-auto">
      <SectionLabel>About Me</SectionLabel>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic leading-tight mb-10" style={{ color: 'var(--text)' }}>
        Web3 Native{' '}
        <span
          style={{
            background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Builder
        </span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
          <p>
            <strong style={{ color: 'var(--text)' }}>Web3 leader with 5+ years of experience</strong> managing teams and shipping products across{' '}
            <strong style={{ color: 'var(--text)' }}>10+ crypto projects</strong> in DeFi, NFTs, and GameFi since 2020.
          </p>
          <p>
            Skilled at planning creative go-to-market strategies, solving real-time product issues, and optimizing every part of the user and operational journey.
          </p>
          <p>
            Led teams of 10+ people with a focus on speed, quality, and efficiency — consistently delivering results in fast-moving environments.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--muted)' }}>
            Core Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1.5 rounded-full border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  color: 'var(--muted)',
                  borderColor: 'var(--stroke)',
                  background: 'var(--surface)',
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { n: '5+', label: 'Years in Crypto' },
              { n: '10+', label: 'Crypto Projects' },
              { n: '$2.5M', label: 'Volume Generated' },
              { n: '2M+', label: 'Users Reached' },
            ].map(({ n, label }) => (
              <div
                key={label}
                className="p-4 rounded-xl border"
                style={{ background: 'var(--surface)', borderColor: 'var(--stroke)' }}
              >
                <div
                  className="text-2xl font-display italic mb-1"
                  style={{
                    background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {n}
                </div>
                <div className="text-xs" style={{ color: 'var(--muted)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── EXPERIENCE SECTION ────────────────────────────────

function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-20 md:py-28 max-w-5xl mx-auto">
      <SectionLabel>Career</SectionLabel>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic leading-tight mb-4" style={{ color: 'var(--text)' }}>
        Work{' '}
        <span
          style={{
            background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Experience
        </span>
      </h2>
      <p className="text-sm md:text-base mb-14" style={{ color: 'var(--muted)' }}>
        A track record of shipping products and growing communities in the Web3 space.
      </p>

      <div className="relative pl-6 md:pl-8">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-px" style={{ background: 'var(--stroke)' }} />

        <div className="space-y-12">
          {EXPERIENCE.map((job, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <div
                className="absolute -left-[25px] md:-left-[33px] top-1.5 w-2 h-2 rounded-full border"
                style={{
                  background: job.current
                    ? 'linear-gradient(90deg, #89AACC, #4E85BF)'
                    : 'var(--bg)',
                  borderColor: job.current ? '#89AACC' : 'var(--stroke)',
                }}
              />

              <div
                className="rounded-xl border p-5 md:p-6 transition-colors duration-200 hover:border-white/10"
                style={{ background: 'var(--surface)', borderColor: 'var(--stroke)' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                        {job.role}
                      </span>
                      {job.current && (
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full"
                          style={{
                            background: 'rgba(137,170,204,0.15)',
                            color: '#89AACC',
                          }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-sm" style={{ color: 'var(--muted)' }}>
                      {job.company}
                      {job.project && (
                        <span className="ml-2 text-xs opacity-60">· {job.project}</span>
                      )}
                    </div>
                  </div>
                  <span className="text-xs whitespace-nowrap flex-shrink-0 mt-0.5" style={{ color: 'var(--muted)' }}>
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-1.5 mb-4">
                  {job.bullets.map((b, bi) => (
                    <li key={bi} className="text-sm flex gap-2" style={{ color: 'var(--muted)' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--stroke)' }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-full border"
                      style={{
                        color: 'var(--muted)',
                        borderColor: 'var(--stroke)',
                        background: 'rgba(255,255,255,0.03)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── ACHIEVEMENTS SECTION ──────────────────────────────

function AchievementsSection() {
  return (
    <section id="achievements" className="px-6 py-20 md:py-28 max-w-5xl mx-auto">
      <SectionLabel>Results</SectionLabel>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic leading-tight mb-4" style={{ color: 'var(--text)' }}>
        Key{' '}
        <span
          style={{
            background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Achievements
        </span>
      </h2>
      <p className="text-sm md:text-base mb-14" style={{ color: 'var(--muted)' }}>
        Numbers speak louder than words. Here are the results that define my career.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ACHIEVEMENTS.map(({ stat, label, desc }) => (
          <div
            key={label}
            className="p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:border-white/10 group"
            style={{ background: 'var(--surface)', borderColor: 'var(--stroke)' }}
          >
            <div
              className="text-3xl md:text-4xl font-display italic mb-2 transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {stat}
            </div>
            <div className="text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
              {label}
            </div>
            <div className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
              {desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── EDUCATION SECTION ─────────────────────────────────

function EducationSection() {
  return (
    <section id="education" className="px-6 py-20 md:py-28 max-w-5xl mx-auto">
      <SectionLabel>Academic Background</SectionLabel>
      <h2 className="text-4xl md:text-5xl font-display italic leading-tight mb-10" style={{ color: 'var(--text)' }}>
        Education
      </h2>

      <div
        className="rounded-xl border p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        style={{ background: 'var(--surface)', borderColor: 'var(--stroke)' }}
      >
        <div>
          <div className="text-lg font-medium mb-1" style={{ color: 'var(--text)' }}>
            Hanoi University of Science and Technology
          </div>
          <div className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
            Major: Control Automation Engineering
          </div>
          <div
            className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border"
            style={{ color: 'var(--muted)', borderColor: 'var(--stroke)', background: 'rgba(255,255,255,0.03)' }}
          >
            GPA: 2.9 / 4.0
          </div>
        </div>
        <div className="text-sm flex-shrink-0" style={{ color: 'var(--muted)' }}>
          Oct 2017 — May 2022
        </div>
      </div>
    </section>
  )
}

// ── CONTACT SECTION ───────────────────────────────────

function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 md:py-28 max-w-5xl mx-auto">
      <SectionLabel>Get in Touch</SectionLabel>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic leading-tight mb-4" style={{ color: 'var(--text)' }}>
        Let&apos;s{' '}
        <span
          style={{
            background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Connect
        </span>
      </h2>
      <p className="text-sm md:text-base mb-14 max-w-md" style={{ color: 'var(--muted)' }}>
        Whether you have a Web3 project, a business opportunity, or just want to talk crypto — I&apos;m open to conversations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {[
          { icon: '✉', label: 'Email', value: 'codyethwork@gmail.com', href: 'mailto:codyethwork@gmail.com' },
          { icon: '📱', label: 'Phone', value: '+84 354 770 896', href: 'tel:+84354770896' },
          { icon: '📍', label: 'Location', value: 'Thanh Xuan, Hanoi, Vietnam', href: null },
          { icon: '✈', label: 'Telegram', value: '@Codydoteth', href: 'https://t.me/Codydoteth' },
          { icon: '𝕏', label: 'Twitter / X', value: '@Codydoteth', href: 'https://x.com/Codydoteth' },
        ].map(({ icon, label, value, href }) => (
          <div
            key={label}
            className="p-5 rounded-xl border transition-all duration-200 hover:border-white/10"
            style={{ background: 'var(--surface)', borderColor: 'var(--stroke)' }}
          >
            <div className="text-xl mb-2">{icon}</div>
            <div className="text-xs uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--muted)' }}>
              {label}
            </div>
            {href ? (
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: 'var(--text)' }}
              >
                {value}
              </a>
            ) : (
              <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                {value}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Availability banner */}
      <div
        className="rounded-xl border p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        style={{ background: 'var(--surface)', borderColor: 'var(--stroke)' }}
      >
        <div>
          <div
            className="text-xs uppercase tracking-[0.2em] mb-2"
            style={{
              background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Open to Opportunities
          </div>
          <div className="text-sm" style={{ color: 'var(--muted)' }}>
            Currently open to{' '}
            <strong style={{ color: 'var(--text)' }}>PM, BDM, and Web3 leadership roles</strong>. If you&apos;re building something in the crypto space, let&apos;s talk.
          </div>
        </div>
        <div className="group relative inline-flex rounded-full flex-shrink-0">
          <span
            className="absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ inset: '-2px', background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)' }}
          />
          <a
            href="mailto:codyethwork@gmail.com"
            className="relative z-10 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300"
            style={{ background: 'var(--text)', color: 'var(--bg)' }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

// ── FOOTER ────────────────────────────────────────────

function Footer() {
  return (
    <footer
      className="border-t px-6 py-8 text-center"
      style={{ borderColor: 'var(--stroke)' }}
    >
      <p className="text-xs" style={{ color: 'var(--muted)' }}>
        © 2026 Nguyen Van Quan · Web3 PM &amp; BDM · Built with passion for the decentralized future
      </p>
    </footer>
  )
}

// ── PAGE ──────────────────────────────────────────────

export default function Page() {
  return (
    <AppWrapper>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <Divider />
        <ExperienceSection />
        <Divider />
        <AchievementsSection />
        <Divider />
        <EducationSection />
        <Divider />
        <ContactSection />
      </main>
      <Footer />
    </AppWrapper>
  )
}

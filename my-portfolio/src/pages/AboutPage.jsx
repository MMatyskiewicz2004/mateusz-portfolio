import '../App.css'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

const SKILLS = [
  'Figma',
  'Adobe XD',
  'Photoshop',
  'Illustrator',
  'InDesign',
  'Wireframing',
  'Prototyping',
  'User Research',
  'Agile',
]

const EXPERIENCE = [
  {
    year: '20XX',
    title: 'Role / Position Title',
    org: 'Company or Organization',
    description: 'Brief description of what you did and the impact you had. Replace this with your real experience.',
  },
  {
    year: '20XX',
    title: 'Role / Position Title',
    org: 'Company or Organization',
    description: 'Add another role, internship, freelance project, or relevant experience here.',
  },
]

function AboutPage() {
  return (
    <div className="app about-page">
      <SiteHeader />

      <main className="about-main">
        <h1 className="about-page-title">ABOUT ME</h1>

        <section className="about-intro" aria-labelledby="about-intro-heading">
          <div className="about-photo-placeholder" aria-label="Profile photo placeholder">
            <span className="about-photo-label">Your photo here</span>
          </div>

          <div className="about-intro-content">
            <h2 id="about-intro-heading" className="about-intro-heading">
              Hey, I&apos;m <span className="about-intro-name">Mateusz</span>
            </h2>
            <p className="about-intro-role">UI/UX Designer</p>
            <p className="about-intro-lead">
              I use my illustration skills to create impactful and visually engaging digital
              experiences. Replace this paragraph with your own intro — who you are, what you
              care about, and what kind of work you&apos;re looking for.
            </p>
          </div>
        </section>

        <section className="about-block" aria-labelledby="about-story-heading">
          <h2 id="about-story-heading" className="about-section-title">
            My Story
          </h2>
          <div className="about-story">
            <p>
              Write 2–3 short paragraphs about your background: how you got into design, what
              motivates you, and what you&apos;re working toward. This is a good place to mention
              school, self-taught journey, or a project that changed how you think about UX.
            </p>
            <p>
              Second paragraph: talk about your process, collaboration style, or what you enjoy
              outside of design. Keep it personal but professional — recruiters and hiring managers
              read this section closely.
            </p>
          </div>
        </section>

        <section className="about-block" aria-labelledby="about-skills-heading">
          <h2 id="about-skills-heading" className="about-section-title">
            Skills &amp; Tools
          </h2>
          <p className="about-section-lead">
            Tools and methods I use most often in my design work.
          </p>
          <ul className="about-skills-list">
            {SKILLS.map((skill) => (
              <li key={skill} className="about-skill-pill">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className="about-block" aria-labelledby="about-experience-heading">
          <h2 id="about-experience-heading" className="about-section-title">
            Experience
          </h2>
          <p className="about-section-lead">
            Roles, internships, and projects that shaped my path in design.
          </p>
          <ol className="about-timeline">
            {EXPERIENCE.map((item) => (
              <li key={`${item.year}-${item.title}`} className="about-timeline-item">
                <span className="about-timeline-year">{item.year}</span>
                <div className="about-timeline-body">
                  <h3 className="about-timeline-title">{item.title}</h3>
                  <p className="about-timeline-org">{item.org}</p>
                  <p className="about-timeline-desc">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="about-cta" aria-labelledby="about-cta-heading">
          <h2 id="about-cta-heading" className="about-cta-title">
            Let&apos;s work together
          </h2>
          <p className="about-cta-text">
            Open to internships, freelance, and full-time UX/UI roles. Say hello — I&apos;d love to
            hear from you.
          </p>
          <div className="about-cta-links">
            <a className="about-cta-btn" href="mailto:mateuszma12004@gmail.com">
              Email me
            </a>
            <a
              className="about-cta-btn about-cta-btn--outline"
              href="https://www.linkedin.com/in/mateusz-motyskiewicz"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <SiteFooter active="about" />
    </div>
  )
}

export default AboutPage

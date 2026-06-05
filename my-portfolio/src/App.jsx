import { useRef } from 'react'
import './App.css'
import Logo from './components/Logo'
import capyThumb from '../capy_assets/thumbnail_page.PNG'
import pfp from '../aboutme_assets/pfp.webp'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'

const HIGHLIGHT_SKILLS = [
  'Figma',
  'Photoshop',
  'Illustrator',
  'Adobe XD',
  'Wireframing & Prototyping',
]

function App() {
  const skillsRef = useRef(null)

  return (
    <div className="app" id="home">
      {/* Header */}
      <SiteHeader />

      {/* Main Content */}
      <main className="main-content">
        <div className="hero-section">
          <Logo />
          <h1 className="main-heading">
            <span className="heading-text">Hey, I'm </span>
            <span className="heading-name">Mateusz</span>
          </h1>
          <div className="hero-dots" aria-hidden="true">
            <span className="hero-dot" />
            <span className="hero-dot" />
            <span className="hero-dot" />
          </div>
          <p className="subheading">
            I am a <span className="subheading-strong">UI/UX Designer</span> using my illustration skills to create
            <br />
            impactful and visually engaging digital experiences.
          </p>
          
          {/* Skills Strip */}
          <div className="skills-strip" ref={skillsRef}>
            <div className="skills-fade-left"></div>
            <div className="skills-wrapper">
              <div className="skills-content">
                Figma • Photoshop • Illustrator • InDesign • Agile Methodology • Adobe XD • Wireframing &amp; Prototyping •{' '}
                Figma • Photoshop • Illustrator • InDesign • Agile Methodology • Adobe XD • Wireframing &amp; Prototyping •{' '}
                Figma • Photoshop • Illustrator • InDesign • Agile Methodology • Adobe XD • Wireframing &amp; Prototyping •
              </div>
            </div>
            <div className="skills-fade-right"></div>
          </div>
        </div>
      </main>

      <section className="home-about-preview" aria-labelledby="home-about-heading">
        <div className="home-about-preview-inner">
          <div className="home-about-layout">
            <figure className="home-about-photo">
              <img src={pfp} alt="Portrait of Mateusz" className="home-about-photo-image" />
            </figure>

            <div className="home-about-copy">
              <h2 id="home-about-heading" className="home-about-title">
                About Me
              </h2>
              <p className="home-about-summary">
                I love illustration, drawing, and design, and understanding why something is made the way
                it is. That curiosity shapes how I approach UX/UI on projects like Solace and CapyCare.
              </p>

              <ul className="home-about-skills" aria-label="Highlighted skills">
                {HIGHLIGHT_SKILLS.map((skill) => (
                  <li key={skill} className="home-about-skill-pill">
                    {skill}
                  </li>
                ))}
              </ul>

              <a href="#/about" className="home-about-link">
                See more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <h2 className="projects-title">Featured Projects</h2>

        <div className="projects-grid">
          <a href="#/projects/solace" className="project-card project-card-solace">
            <div className="project-card-media">
              <img
                src="/solace_assets/solace_card.png"
                alt="Solace project preview"
                className="project-card-image"
              />
            </div>
            <h3 className="project-card-title">Solace</h3>
            <p className="project-card-subtitle">Case Study • UX Design • Figma</p>
            <p className="project-card-description">
              Solace is a wellness app built for workers, tackling physical strain, irregular schedules,
              and stigma around self-care with practical, industry-relevant support.
            </p>
          </a>

          <a href="#/projects/capycare" className="project-card project-card-capycare">
            <div className="project-card-media">
              <img
                src={capyThumb}
                alt="CapyCare project preview"
                className="project-card-image"
              />
            </div>
            <h3 className="project-card-title">CapyCare</h3>
            <p className="project-card-subtitle">Case Study • Web Game • Asset Design</p>
            <p className="project-card-description">
              A browser-based pet care game where players look after a capybara through feeding, rest,
              mood, and cleanliness, backed by a full visual state and asset system.
            </p>
          </a>
        </div>
      </section>

      <SiteFooter active="home" />
    </div>
  )
}

export default App

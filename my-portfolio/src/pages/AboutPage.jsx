import '../App.css'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import pfp from '../../aboutme_assets/pfp.webp'

const SKILLS = [
  'Figma',
  'Photoshop',
  'Illustrator',
  'InDesign',
  'Agile Methodology',
  'Adobe XD',
  'Wireframing & Prototyping',
]

function AboutPage() {
  return (
    <div className="app about-page">
      <SiteHeader />

      <main className="about-main">
        <div className="about-layout">
          <aside className="about-sidebar">
            <figure className="about-photo">
              <img src={pfp} alt="Portrait of Mateusz" className="about-photo-image" />
            </figure>
          </aside>

          <div className="about-content">
            <section className="about-bio" aria-labelledby="about-bio-heading">
              <h1 id="about-bio-heading" className="about-bio-heading">
                Hello, I am Mateusz!
              </h1>
              <p className="about-bio-tagline">
                I am a <strong>UI/UX Designer</strong> using my illustration skills to create impactful
                and visually engaging digital experiences.
              </p>
              <p className="about-body-text">
                I have always enjoyed illustration, drawing, and designing. A big part of that for me is
                wanting to learn and understand why something is made the way it is, which has helped me
                a lot in figuring out what users want or need and where they struggle.
              </p>
              <p className="about-body-text">
                I work across UX/UI design, wireframing, prototyping, and visual design in tools like
                Figma, Photoshop, and Illustrator. Through projects like Solace and CapyCare, I have
                practiced research, wireframing, prototyping, and visual systems end to end.
              </p>
            </section>

            <section className="about-leisure" aria-labelledby="about-leisure-heading">
              <h2 id="about-leisure-heading" className="about-section-title">
                What keeps me inspired
              </h2>
              <p className="about-body-text">
                A lot of it comes from a love of concepts, sketches, stories, and games. I still love to
                draw and teach myself new techniques and design ideas, and from time to time I like to game
                as well. That mix of curiosity and making things is usually what pulls me back to the next
                project.
              </p>
            </section>

            <section className="about-skills-block" aria-labelledby="about-skills-heading">
              <h2 id="about-skills-heading" className="about-section-title">
                Skills &amp; Tools
              </h2>
              <ul className="about-skills-list">
                {SKILLS.map((skill) => (
                  <li key={skill} className="about-skill-pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter active="about" />
    </div>
  )
}

export default AboutPage

import '../App.css'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import daybreakThumb from '../../daybreak_assets/daybreak_thumbnail.png'
import daybreakRole from '../../daybreak_assets/my_role_daybreak.png'

function DaybreakCaseStudyPage() {
  return (
    <div className="app daybreak-case-page">
      <SiteHeader />

      <main className="daybreak-case-main">
        <h1 className="daybreak-case-title">Daybreak</h1>

        <section className="daybreak-hero-card">
          <img
            src={daybreakThumb}
            alt="Daybreak thumbnail"
            className="daybreak-hero-image"
          />
        </section>

        <section className="daybreak-details-grid">
          <article>
            <h2 className="daybreak-section-heading">Overview</h2>
            <p className="daybreak-body-text">
              This project explored the design of a{' '}
              <strong>multiplayer tabletop inspired game</strong> centered around strategy,
              competition, and light sabotage. The game follows a group of outcast critters attempting
              to escape an island after a mysterious creature awakens and begins pursuing them.
            </p>
            <p className="daybreak-body-text">
              Players move along a linear board toward a lighthouse, the only safe place on the island.
              Along the way, players collect and use cards to boost their own progress or disrupt other
              players. Each card also carries a point value, meaning players must balance survival with
              strategy in order to finish the game with the highest total value.
            </p>
            <p className="daybreak-body-text">
              The system encourages thoughtful decisions between helping yourself advance or slowing others
              in order to gain a competitive advantage.
            </p>
          </article>

          <aside className="daybreak-meta">
            <h3>Timeline</h3>
            <p>Jan – May 2025</p>
            <h3>Team Size</h3>
            <p>9 Members</p>
            <h3>Disciplines</h3>
            <p>Product Owner/Designer</p>
            <p>Lead Designer</p>
            <p>UI/UX Research</p>
            <p>User Research</p>
            <p>Wireframing</p>
            <p>Prototyping</p>
          </aside>
        </section>

        <section className="daybreak-steps">
          {/* 01 • My Role */}
          <article className="daybreak-step-card daybreak-role-card">
            <div className="daybreak-role-left">
              <div className="daybreak-step-title">
                <span className="daybreak-step-index">01 •</span> My Role
              </div>

              <h3>Project Management</h3>
              <ul>
                <li>Coordinated team workflow</li>
                <li>Communicated with external development team</li>
              </ul>

              <h3>Game Mechanics Design</h3>
              <ul>
                <li>Designed core gameplay systems and card mechanics</li>
                <li>Documented rules and systems for development</li>
              </ul>

              <h3>Art Direction &amp; Character Design</h3>
              <ul>
                <li>Led visual direction for the game world</li>
                <li>Designed characters, assets, and visual concepts</li>
              </ul>
            </div>

            <div className="daybreak-role-right">
              <img className="daybreak-role-illustration" src={daybreakRole} alt="Daybreak role illustration" />
            </div>
          </article>
        </section>
      </main>

      <SiteFooter active="projects" />
    </div>
  )
}

export default DaybreakCaseStudyPage

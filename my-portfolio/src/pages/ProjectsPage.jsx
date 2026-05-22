import '../App.css'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import daybreakThumb from '../../daybreak_assets/daybreak_thumbnail.png'

function ProjectsPage() {
  return (
    <div className="app projects-page">
      <SiteHeader />

      <main className="projects-main">
        <h1 className="projects-page-title">PROJECTS</h1>

        <section className="projects-layout">
          <a href="#/projects/solace" className="project-card project-card-solace project-card-large">
            <div className="project-card-media">
              <img
                src="/solace_assets/solace_card.png"
                alt="Solace project preview"
                className="project-card-image"
              />
            </div>
            <h3 className="project-card-title">Solace</h3>
            <p className="project-card-subtitle">Case Study + UX Design + Figma</p>
          </a>

          {/* Small 1 */}
          <article className="project-card project-card-template project-card-small">
            <div className="project-card-media project-card-media-template" />
            <h3 className="project-card-title">CapyCare</h3>
            <p className="project-card-subtitle">Case Study + UX Design + Figma</p>
          </article>

          {/* Large 2 */}
          <a href="#/projects/daybreak" className="project-card project-card-daybreak project-card-large">
            <div className="project-card-media">
              <img
                src={daybreakThumb}
                alt="Daybreak project preview"
                className="project-card-image"
              />
            </div>
            <h3 className="project-card-title">Daybreak</h3>
            <p className="project-card-subtitle">Case Study • UI/UX Design • Figma</p>
          </a>

          {/* Small 2 */}
          <article className="project-card project-card-template project-card-small">
            <div className="project-card-media project-card-media-template" />
            <h3 className="project-card-title">Smaller Prj</h3>
            <p className="project-card-subtitle">Case Study + UX Design + Figma</p>
          </article>

          {/* Large 3 */}
          <article className="project-card project-card-template project-card-large">
            <div className="project-card-media project-card-media-template" />
            <h3 className="project-card-title">Big Case Study</h3>
            <p className="project-card-subtitle">Case Study + UX Design + Figma</p>
          </article>

          {/* Small 3 */}
          <article className="project-card project-card-template project-card-small">
            <div className="project-card-media project-card-media-template" />
            <h3 className="project-card-title">Smaller Prj</h3>
            <p className="project-card-subtitle">Case Study + UX Design + Figma</p>
          </article>
        </section>
      </main>

      <SiteFooter active="projects" />
    </div>
  )
}

export default ProjectsPage

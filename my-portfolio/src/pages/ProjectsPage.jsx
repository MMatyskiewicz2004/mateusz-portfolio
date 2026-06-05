import '../App.css'

import SiteHeader from '../components/SiteHeader'

import SiteFooter from '../components/SiteFooter'

import daybreakThumb from '../../daybreak_assets/daybreak_thumbnail.png'

import capyThumb from '../../capy_assets/thumbnail_page.PNG'

import screamThumb from '../../ghost_poster_assets/mockup_02.png'

import canMockupThumb from '../../can_assets/mockup_all.png'



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

            <p className="project-card-subtitle">Case Study • UX Design • Figma</p>

          </a>



          <a href="#/projects/scream-poster" className="project-card project-card-scream project-card-small">

            <div className="project-card-media">

              <img

                src={screamThumb}

                alt="Scream Poster Design preview"

                className="project-card-image"

              />

            </div>

            <h3 className="project-card-title">Scream Poster Design</h3>

            <p className="project-card-subtitle">Poster Design • Graphic Design</p>

          </a>



          <a href="#/projects/capycare" className="project-card project-card-capycare project-card-large">

            <div className="project-card-media">

              <img

                src={capyThumb}

                alt="CapyCare project preview"

                className="project-card-image"

              />

            </div>

            <h3 className="project-card-title">CapyCare</h3>

            <p className="project-card-subtitle">Case Study • Web Game • Asset Design</p>

          </a>



          <a href="#/projects/can-design" className="project-card project-card-can project-card-small">

            <div className="project-card-media">

              <img

                src={canMockupThumb}

                alt="Can design mockups preview"

                className="project-card-image"

              />

            </div>

            <h3 className="project-card-title">Devil Energy Can Design</h3>

            <p className="project-card-subtitle">Illustrator • Photoshop • Mockups</p>

          </a>



          <article className="project-card project-card-daybreak project-card-small">

            <div className="project-card-media">

              <img

                src={daybreakThumb}

                alt="Daybreak project preview"

                className="project-card-image"

              />

              <div className="project-card-construction-overlay" aria-hidden="true">

                <span className="project-card-construction-text">UNDER CONSTRUCTION</span>

              </div>

            </div>

            <h3 className="project-card-title">Daybreak</h3>

            <p className="project-card-subtitle">Case Study • UI/UX Design • Figma</p>

          </article>

        </section>

      </main>



      <SiteFooter active="projects" />

    </div>

  )

}



export default ProjectsPage


import { useEffect, useState } from 'react'
import '../App.css'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import mockupAll from '../../can_assets/mockup_all.png'
import mockupRed from '../../can_assets/mockup_red.png'
import mockupOrange from '../../can_assets/mockup_orange.png'
import mockupBlue from '../../can_assets/mockup_blue.png'
import candesignOrange from '../../can_assets/candesign_orange.png'
import candesignRed from '../../can_assets/candesign_red.png'
import candesignBlue from '../../can_assets/candesign_blue.png'

const FLAVOR_MOCKUPS = [
  { src: mockupRed, label: 'Raspberry flavor mockup' },
  { src: mockupOrange, label: 'Orange flavor mockup' },
  { src: mockupBlue, label: 'Blueberry flavor mockup' },
]

const DIELINE_ITEMS = [
  { src: candesignOrange, label: 'Orange dieline' },
  { src: candesignRed, label: 'Raspberry dieline' },
  { src: candesignBlue, label: 'Blueberry dieline' },
]

const LIGHTBOX_ANIM_MS = 360

function getDielineDirection(fromIndex, toIndex) {
  if (fromIndex === toIndex) return 'next'

  const total = DIELINE_ITEMS.length
  const forwardSteps = (toIndex - fromIndex + total) % total
  const backwardSteps = (fromIndex - toIndex + total) % total

  return forwardSteps <= backwardSteps ? 'next' : 'prev'
}

function CanDesignCaseStudyPage() {
  const [flavorIndex, setFlavorIndex] = useState(0)
  const [dielineIndex, setDielineIndex] = useState(0)
  const [dielineDirection, setDielineDirection] = useState('next')
  const [selectedDieline, setSelectedDieline] = useState(null)
  const [isLightboxClosing, setIsLightboxClosing] = useState(false)
  const activeFlavor = FLAVOR_MOCKUPS[flavorIndex]
  const activeDieline = DIELINE_ITEMS[dielineIndex]

  const closeLightbox = () => {
    if (isLightboxClosing) return

    setIsLightboxClosing(true)
    window.setTimeout(() => {
      setSelectedDieline(null)
      setIsLightboxClosing(false)
    }, LIGHTBOX_ANIM_MS)
  }

  const openLightbox = (item) => {
    setSelectedDieline(item)
  }

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setFlavorIndex((index) => (index + 1) % FLAVOR_MOCKUPS.length)
    }, 1400)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (!selectedDieline) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedDieline])

  const goToDieline = (nextIndex) => {
    if (nextIndex === dielineIndex) return
    setDielineDirection(getDielineDirection(dielineIndex, nextIndex))
    setDielineIndex(nextIndex)
  }

  const showPrevDieline = () => {
    setDielineDirection('prev')
    setDielineIndex((index) => (index === 0 ? DIELINE_ITEMS.length - 1 : index - 1))
  }

  const showNextDieline = () => {
    setDielineDirection('next')
    setDielineIndex((index) => (index === DIELINE_ITEMS.length - 1 ? 0 : index + 1))
  }

  return (
    <div className="app can-case-page">
      <SiteHeader />

      <main className="can-case-main">
        <section className="can-intro-layout">
          <figure className="can-intro-image-panel">
            <img src={mockupAll} alt="Devil Energy can mockups" className="can-intro-image" />
          </figure>

          <div className="can-intro-copy">
            <h2 className="can-section-heading">Devil Energy Can Design</h2>
            <p className="can-body-text">
              A packaging project built around <strong>three flavor concepts</strong> for a fictional energy
              drink. I wanted to explore a fun, bold look across raspberry, orange, and blueberry variants
              while keeping the brand feel consistent from can to can.
            </p>
            <p className="can-body-text">
              Along the way I learned how to build the label art in <strong>Adobe Illustrator</strong>, polish
              textures and presentation in <strong>Photoshop</strong>, and turn the final designs into
              realistic product mockups.
            </p>

            <div className="can-intro-details">
              <div className="can-intro-details-group">
                <h3 className="can-details-heading">Tools Used</h3>
                <p>Photoshop</p>
                <p>Adobe Illustrator</p>
              </div>

              <div className="can-intro-details-group">
                <h3 className="can-details-heading">Skills Used</h3>
                <p>Graphic Design</p>
                <p>Adobe Suite</p>
              </div>
            </div>
          </div>
        </section>

        <section className="can-process-layout">
          <div className="can-process-copy">
            <h2 className="can-section-heading">Design Process</h2>
            <p className="can-body-text">
              I wanted this to feel like a <strong>fun, loud energy drink</strong> people would actually want
              to pick up off a shelf. <strong>Liquid Death</strong> was a big inspiration for the attitude:
              playful branding, bold type, and a sense of humor that still reads as a real product.
            </p>
            <p className="can-body-text">
              The look leans into <strong>cartoony, illustrated graphics</strong>: a little devil mascot,
              chunky type, and bright flavor colors that feel playful without getting too silly. Each can
              keeps the same layout and character, but switches up the fruit and palette so the three
              flavors read like a set you'd actually find on a shelf together.
            </p>
          </div>

          <figure className="can-process-mockup-panel">
            <img
              key={activeFlavor.src}
              src={activeFlavor.src}
              alt={activeFlavor.label}
              className="can-process-cycle-image"
            />
          </figure>
        </section>

        <section className="can-dielines-section">
          <h2 className="can-section-heading can-dielines-heading">Dielines &amp; Mockups</h2>

          <div className="can-dieline-carousel">
            <div className="can-dieline-stage">
              <div className="can-dieline-slider-row">
                <button
                  type="button"
                  className="can-dieline-nav can-dieline-nav--prev"
                  onClick={showPrevDieline}
                  aria-label="Previous dieline"
                >
                  <svg className="can-dieline-nav-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M15 18l-6-6 6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  className={`can-dieline-image-frame can-dieline-image-frame--clickable can-dieline-image-frame--${dielineDirection}`}
                  onClick={() => openLightbox(activeDieline)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      openLightbox(activeDieline)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View full ${activeDieline.label}`}
                >
                  <img
                    key={dielineIndex}
                    src={activeDieline.src}
                    alt={activeDieline.label}
                    className="can-dieline-stage-image"
                  />
                </div>

                <button
                  type="button"
                  className="can-dieline-nav can-dieline-nav--next"
                  onClick={showNextDieline}
                  aria-label="Next dieline"
                >
                  <svg className="can-dieline-nav-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M9 18l6-6-6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="can-dieline-thumbs" role="tablist" aria-label="Dieline thumbnails">
              {DIELINE_ITEMS.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  role="tab"
                  aria-selected={index === dielineIndex}
                  aria-label={item.label}
                  className={`can-dieline-thumb ${index === dielineIndex ? 'can-dieline-thumb--active' : ''}`}
                  onClick={() => goToDieline(index)}
                >
                  <img src={item.src} alt="" className="can-dieline-thumb-image" />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {selectedDieline && (
        <div
          className={`can-dieline-lightbox ${isLightboxClosing ? 'can-dieline-lightbox--closing' : 'can-dieline-lightbox--opening'}`}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={selectedDieline.label}
        >
          <div
            className={`can-dieline-lightbox-content ${isLightboxClosing ? 'can-dieline-lightbox-content--closing' : 'can-dieline-lightbox-content--opening'}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="can-dieline-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={selectedDieline.src}
              alt={selectedDieline.label}
              className="can-dieline-lightbox-image"
            />
          </div>
        </div>
      )}

      <SiteFooter active="projects" />
    </div>
  )
}

export default CanDesignCaseStudyPage

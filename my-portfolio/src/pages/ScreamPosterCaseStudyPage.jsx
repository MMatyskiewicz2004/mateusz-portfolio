import { useEffect, useState } from 'react'
import '../App.css'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import posterArt from '../../ghost_poster_assets/ghostface_poster.png'
import mockup01 from '../../ghost_poster_assets/mockup_01.png'
import mockup02 from '../../ghost_poster_assets/mockup_02.png'
import mockup04 from '../../ghost_poster_assets/mockup_04.png'
import mockup05 from '../../ghost_poster_assets/mockup_05.png'
import mockup06 from '../../ghost_poster_assets/mockup_06.png'

const MOCKUP_ITEMS = [
  { src: mockup01, label: 'Wall mockup' },
  { src: mockup02, label: 'Studio mockup' },
  { src: mockup04, label: 'Frame mockup' },
  { src: mockup05, label: 'Room mockup' },
  { src: mockup06, label: 'Close-up mockup' },
]

const POSTER_ART_ITEM = {
  src: posterArt,
  label: 'Scream fan poster featuring Ghostface',
}

const LIGHTBOX_ANIM_MS = 360

function getMockupDirection(fromIndex, toIndex) {
  if (fromIndex === toIndex) return 'next'

  const total = MOCKUP_ITEMS.length
  const forwardSteps = (toIndex - fromIndex + total) % total
  const backwardSteps = (fromIndex - toIndex + total) % total

  return forwardSteps <= backwardSteps ? 'next' : 'prev'
}

function ScreamPosterCaseStudyPage() {
  const [mockupIndex, setMockupIndex] = useState(0)
  const [mockupDirection, setMockupDirection] = useState('next')
  const [selectedMockup, setSelectedMockup] = useState(null)
  const [isLightboxClosing, setIsLightboxClosing] = useState(false)
  const activeMockup = MOCKUP_ITEMS[mockupIndex]

  const closeLightbox = () => {
    if (isLightboxClosing) return

    setIsLightboxClosing(true)
    window.setTimeout(() => {
      setSelectedMockup(null)
      setIsLightboxClosing(false)
    }, LIGHTBOX_ANIM_MS)
  }

  const openLightbox = (item) => {
    setSelectedMockup(item)
  }

  useEffect(() => {
    if (!selectedMockup) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedMockup])

  const goToMockup = (nextIndex) => {
    if (nextIndex === mockupIndex) return
    setMockupDirection(getMockupDirection(mockupIndex, nextIndex))
    setMockupIndex(nextIndex)
  }

  const showPrevMockup = () => {
    setMockupDirection('prev')
    setMockupIndex((index) => (index === 0 ? MOCKUP_ITEMS.length - 1 : index - 1))
  }

  const showNextMockup = () => {
    setMockupDirection('next')
    setMockupIndex((index) => (index === MOCKUP_ITEMS.length - 1 ? 0 : index + 1))
  }

  return (
    <div className="app scream-case-page">
      <SiteHeader />

      <main className="scream-case-main">
        <section className="scream-intro-layout">
          <figure className="scream-intro-poster">
            <img src={mockup05} alt="Scream poster room mockup" className="scream-poster-image" />
          </figure>

          <div className="scream-intro-copy">
            <h2 className="scream-section-heading">Scream Poster Design</h2>
            <p className="scream-body-text">
              A fan poster for <strong>Scream</strong> fans who might actually want to buy and hang it. It
              spotlights <strong>Ghostface</strong> from one of the most iconic slasher films, with an eerie
              palette and a comic-book edge.
            </p>
            <p className="scream-body-text">
              The goal was simple: make something that feels like merch for people who love the franchise, not
              just a class exercise.
            </p>

            <div className="scream-intro-details">
              <div className="scream-intro-details-group">
                <h3 className="scream-details-heading">Tools Used</h3>
                <p>Photoshop</p>
                <p>Adobe Illustrator</p>
              </div>

              <div className="scream-intro-details-group">
                <h3 className="scream-details-heading">Skills Used</h3>
                <p>Graphic Design</p>
                <p>Adobe Suite</p>
              </div>
            </div>
          </div>
        </section>

        <section className="scream-process-layout">
          <div className="scream-process-copy">
            <h2 className="scream-section-heading">Design Process</h2>
            <p className="scream-body-text">
              I leaned on <strong>black and white</strong> so the <strong>red</strong> would pop. Halftone
              dots and sketchy shading on Ghostface and the knife give it that comic feel, while a custom
              blood splatter (hand-painted with a brush) sits on the title type I picked to match the mood.
            </p>
            <p className="scream-body-text">
              A wrinkle texture on top ties it together. As a fan myself, I wanted a poster other fans would
              actually put on a wall.
            </p>
          </div>

          <figure className="scream-process-mockup">
            <div
              className="scream-mockup-image-frame scream-mockup-image-frame--clickable"
              onClick={() => openLightbox(POSTER_ART_ITEM)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  openLightbox(POSTER_ART_ITEM)
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View full ${POSTER_ART_ITEM.label}`}
            >
              <img src={posterArt} alt={POSTER_ART_ITEM.label} className="scream-mockup-image" />
            </div>
          </figure>
        </section>

        <section className="scream-mockups-section">
          <h2 className="scream-section-heading scream-mockups-heading">Mockups</h2>

          <div className="scream-mockup-carousel">
            <div className="scream-mockup-viewport">
              <div className="scream-mockup-stage">
                <div className="scream-mockup-slider-row">
                  <button
                    type="button"
                    className="scream-mockup-nav scream-mockup-nav--prev"
                    onClick={showPrevMockup}
                    aria-label="Previous mockup"
                  >
                    <svg className="scream-mockup-nav-icon" viewBox="0 0 24 24" aria-hidden="true">
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
                    className={`scream-mockup-image-frame scream-mockup-image-frame--clickable scream-mockup-image-frame--${mockupDirection}`}
                    onClick={() => openLightbox(activeMockup)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        openLightbox(activeMockup)
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`View full ${activeMockup.label}`}
                  >
                    <img
                      key={mockupIndex}
                      src={activeMockup.src}
                      alt={activeMockup.label}
                      className="scream-mockup-stage-image"
                    />
                  </div>

                  <button
                    type="button"
                    className="scream-mockup-nav scream-mockup-nav--next"
                    onClick={showNextMockup}
                    aria-label="Next mockup"
                  >
                    <svg className="scream-mockup-nav-icon" viewBox="0 0 24 24" aria-hidden="true">
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
            </div>

            <div className="scream-mockup-thumbs" role="tablist" aria-label="Mockup thumbnails">
              {MOCKUP_ITEMS.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  role="tab"
                  aria-selected={index === mockupIndex}
                  aria-label={item.label}
                  className={`scream-mockup-thumb ${index === mockupIndex ? 'scream-mockup-thumb--active' : ''}`}
                  onClick={() => goToMockup(index)}
                >
                  <img src={item.src} alt="" className="scream-mockup-thumb-image" />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {selectedMockup && (
        <div
          className={`scream-mockup-lightbox ${isLightboxClosing ? 'scream-mockup-lightbox--closing' : 'scream-mockup-lightbox--opening'}`}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={selectedMockup.label}
        >
          <div
            className={`scream-mockup-lightbox-content ${isLightboxClosing ? 'scream-mockup-lightbox-content--closing' : 'scream-mockup-lightbox-content--opening'}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="scream-mockup-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={selectedMockup.src}
              alt={selectedMockup.label}
              className="scream-mockup-lightbox-image"
            />
          </div>
        </div>
      )}

      <SiteFooter active="projects" />
    </div>
  )
}

export default ScreamPosterCaseStudyPage

import { useEffect, useState } from 'react'
import '../App.css'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

const STATE_GROUPS = [
  {
    title: 'Base states',
    items: [
      { file: 'idle.PNG', label: 'Idle' },
      { file: 'hungry.PNG', label: 'Hungry' },
      { file: 'sad.PNG', label: 'Low mood' },
      { file: 'sleepy.PNG', label: 'Low energy' },
      { file: 'sleeping.PNG', label: 'Sleeping' },
      { file: 'dirty.PNG', label: 'Dirty' },
      { file: 'dead.PNG', label: 'Dead' },
    ],
  },
  {
    title: 'Combined states',
    items: [
      { file: 'hungry_dirty.PNG', label: 'Hungry + Dirty' },
      { file: 'dirty_sad.PNG', label: 'Dirty + Sad' },
      { file: 'dirty_sleepy.PNG', label: 'Dirty + Sleepy' },
      { file: 'dirty_sleeping.PNG', label: 'Dirty + Sleeping' },
      { file: 'hungry_sad.PNG', label: 'Hungry + Sad' },
      { file: 'hungry_sleeping.PNG', label: 'Hungry + Sleeping' },
      { file: 'sad_sleepy.PNG', label: 'Sad + Sleepy' },
      { file: 'hungry_sad_sleepy.PNG', label: 'Hungry + Sad + Sleepy' },
      { file: 'dirty_sleepy_sad.PNG', label: 'Dirty + Sleepy + Sad' },
      { file: 'dirty_hungry_sleepy.PNG', label: 'Dirty + Hungry + Sleepy' },
      { file: 'hungry_dirty_sleeping.PNG', label: 'Hungry + Dirty + Sleeping' },
      { file: 'dirty_hungry_sad_tired.PNG', label: 'Dirty + Hungry + Sad + Tired' },
    ],
  },
]

const ALL_STATE_FRAMES = STATE_GROUPS.flatMap((group) => group.items)
const LIGHTBOX_ANIM_MS = 360

const ANIMAL_SKETCHES = [
  {
    src: '/capy_assets/unusedassets/early_capy_sketch.png',
    caption: 'Early capybara sketch',
  },
  {
    src: '/capy_assets/unusedassets/redpanda_sketch.PNG',
    caption: 'Red panda exploration',
  },
  {
    src: '/capy_assets/unusedassets/bunny_sketch.PNG',
    caption: 'Bunny concept sketches',
  },
]

const UNUSED_FOOD_ITEMS = [
  { src: '/capy_assets/unusedassets/nuts.PNG', label: 'Nuts' },
  { src: '/capy_assets/unusedassets/berry.PNG', label: 'Berries' },
  { src: '/capy_assets/unusedassets/cookie.PNG', label: 'Cookie' },
  { src: '/capy_assets/unusedassets/starfruit.PNG', label: 'Starfruit' },
]

const UNUSED_REDPANDA_GROUPS = [
  {
    title: 'Red Panda',
    items: [
      { src: '/capy_assets/unusedassets/unused_panda.PNG', label: 'Idle' },
      { src: '/capy_assets/unusedassets/unused_panda_hungry.PNG', label: 'Hungry' },
      { src: '/capy_assets/unusedassets/unused_panda_dirty.PNG', label: 'Dirty' },
      { src: '/capy_assets/unusedassets/unused_panda_tired.PNG', label: 'Tired' },
      { src: '/capy_assets/unusedassets/unused_panda_sleeping.PNG', label: 'Sleeping' },
    ],
  },
]

const UNUSED_BUNNY_GROUPS = [
  {
    title: 'Bunny',
    items: [
      { src: '/capy_assets/unusedassets/unused_bunny.PNG', label: 'Idle' },
      { src: '/capy_assets/unusedassets/unused_bunny_hungry.PNG', label: 'Hungry' },
      { src: '/capy_assets/unusedassets/unused_bunny_dirty.PNG', label: 'Dirty' },
      { src: '/capy_assets/unusedassets/unused_bunny_tired.PNG', label: 'Tired' },
      { src: '/capy_assets/unusedassets/unused_bun_sleeping.PNG', label: 'Sleeping' },
    ],
  },
]

const getCapyAssetSrc = (item) => item.src ?? `/capy_assets/${item.file}`

const UNUSED_TUTORIAL_ASSETS = [
  {
    src: '/capy_assets/unusedassets/tutorial_icon.PNG',
    label: 'Robot icon',
    caption: 'Icon',
  },
  {
    src: '/capy_assets/unusedassets/tutorial_help.PNG',
    label: 'Robot helper with chat bubble',
    caption: 'Full body',
  },
]

function CapyUnusedPetGallery({ groups, onSelect, petName }) {
  return groups.map((group) => (
    <div key={group.title} className="capy-state-group">
      <h3 className="capy-subsection-title">{group.title}</h3>
      <div className="capy-state-gallery">
        {group.items.map((item) => (
          <figure
            key={item.src ?? item.file}
            className="capy-state-gallery-item capy-state-gallery-item--clickable"
            onClick={() => onSelect(item)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onSelect(item)
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`View full ${petName} ${item.label} asset`}
          >
            <img src={getCapyAssetSrc(item)} alt={`${petName}, ${item.label}`} className="capy-state-image" />
            <figcaption className="capy-state-label">{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  ))
}

function CapyCareCaseStudyPage() {
  const [stateIndex, setStateIndex] = useState(0)
  const [selectedState, setSelectedState] = useState(null)
  const [isLightboxClosing, setIsLightboxClosing] = useState(false)
  const currentState = ALL_STATE_FRAMES[stateIndex]

  const closeLightbox = () => {
    if (isLightboxClosing) return

    setIsLightboxClosing(true)
    window.setTimeout(() => {
      setSelectedState(null)
      setIsLightboxClosing(false)
    }, LIGHTBOX_ANIM_MS)
  }

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setStateIndex((index) => (index + 1) % ALL_STATE_FRAMES.length)
    }, 1400)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (!selectedState) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedState])

  return (
    <div className="app capy-case-page">
      <SiteHeader />

      <main className="capy-case-main">
        <h1 className="capy-case-title">CapyCare</h1>

        <section className="capy-hero-card">
          <img
            src="/capy_assets/thumbnail_page.PNG"
            alt="CapyCare thumbnail"
            className="capy-hero-image"
          />
        </section>

        <section className="capy-details-grid">
          <article>
            <h2 className="capy-section-heading">What is CapyCare?</h2>
            <p className="capy-body-text">
              CapyCare is a <strong>browser-based pet care web game</strong> where players look after a
              capybara by managing its basic needs (feeding, rest, mood, and cleanliness) through
              simple interactions and clear visual feedback.
            </p>
            <p className="capy-body-text">
              With only <strong>two weeks</strong> and a team of <strong>four</strong>, we focused on a
              tight core loop: make the capy feel alive, make needs obvious, and make the art system
              flexible enough to ship fast without losing charm.
            </p>
          </article>

          <aside className="capy-meta">
            <h3>Timeline</h3>
            <p>2 Weeks</p>
            <h3>Team Size</h3>
            <p>4 Members</p>
            <h3>Format</h3>
            <p>Web Game</p>
            <h3>My Focus</h3>
            <p>Character Design</p>
            <p>Asset Creation</p>
            <p>Visual States</p>
            <p>UI Illustration</p>
          </aside>
        </section>

        <section className="capy-steps">
          <article className="capy-step-card capy-role-card">
            <div className="capy-role-left">
              <div className="capy-step-title">
                <span className="capy-step-index">01 •</span> My Role
              </div>

              <h3>Character &amp; Asset Design</h3>
              <ul>
                <li>Had creative liberty to design the creature assets and visual direction</li>
                <li>Built the capy mascot and core emotional states for the shipped game</li>
                <li>Created environment art for the main room scene</li>
              </ul>

              <h3>Design Thinking</h3>
              <ul>
                <li>Started with the creature as the main attraction of the game</li>
                <li>Prioritized clarity over complexity because of the short timeline</li>
                <li>Documented which states shipped vs. which were cut for scope</li>
              </ul>
            </div>

            <div className="capy-role-right">
              <img
                className="capy-role-image"
                src="/capy_assets/capyicon.PNG"
                alt="CapyCare capybara icon"
              />
            </div>
          </article>
        </section>

        <section className="capy-asset-section">
          <div className="capy-story-layout">
            <div className="capy-story-layout-left">
              <h2 className="capy-section-heading capy-section-heading--inline">02 • Early Iterations</h2>

              <div className="capy-story">
                <p>
                  At first, we wanted a game where you take care of a creature, something in the spirit of
                  those <strong>Tamagotchi</strong> toys. I explored a capybara, red panda, and bunny, plus
                  a feeding system, but we scoped down so the team could finish in two weeks.
                </p>
                <p>
                  My team and I also researched other web games similar to our concept to get an idea of
                  what our UI should look like and what seemed intuitive to players.
                </p>
                <p>
                  I suggested we focus on <strong>one animal</strong> instead of several. That&apos;s how we
                  landed on <strong>CapyCare</strong>, a game where you take care of your own capybara.
                </p>
                <p>
                  I had creative liberty over the assets and started with the creatures themselves. Each
                  animal needed its own moods and care states, so I eventually stuck with one capybara to
                  keep the workload manageable for our team of four. The unused drafts are shown below.
                </p>
              </div>
            </div>

            <aside className="capy-sketch-panel" aria-label="Early animal sketches">
              {ANIMAL_SKETCHES.map((sketch) => (
                <figure key={sketch.src} className="capy-sketch-item">
                  <img src={sketch.src} alt={sketch.caption} className="capy-sketch-image" />
                  <figcaption className="capy-sketch-caption">{sketch.caption}</figcaption>
                </figure>
              ))}
            </aside>
          </div>

          <div className="capy-state-section">
            <div className="capy-state-intro-layout">
              <div className="capy-state-intro-left">
                <h2 className="capy-section-heading capy-section-heading--inline">
                  03 • Capybara State Assets
                </h2>

                <div className="capy-story">
                  <p>
                    I focused on the capybara assets and had to think about the game logic behind all the
                    different states. There were <strong>4 needs</strong> the player had to manage:{' '}
                    <strong>energy</strong>, <strong>hunger</strong>, <strong>mood</strong>, and{' '}
                    <strong>hygiene</strong>, which meant building sprites for every variation that could
                    come up in play.
                  </p>
                  <p>
                    First I broke down how many states we actually needed. For example, if the pet is dirty{' '}
                    <em>and</em> hungry, the capybara had to show both of those states active at the same
                    time. The gallery below maps out the base needs and the combined states I designed for
                    that system.
                  </p>
                </div>
              </div>

              <aside className="capy-state-cycle-panel" aria-live="polite">
                <img
                  key={currentState.file}
                  src={`/capy_assets/${currentState.file}`}
                  alt={currentState.label}
                  className="capy-state-cycle-image"
                />
                <p className="capy-state-cycle-label">{currentState.label}</p>
              </aside>
            </div>

            {STATE_GROUPS.map((group) => (
              <div key={group.title} className="capy-state-group">
                <h3 className="capy-subsection-title">{group.title}</h3>
                <div className="capy-state-gallery">
                  {group.items.map((item) => (
                    <figure
                      key={item.file}
                      className="capy-state-gallery-item capy-state-gallery-item--clickable"
                      onClick={() => setSelectedState(item)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          setSelectedState(item)
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={`View full ${item.label} asset`}
                    >
                      <img
                        src={`/capy_assets/${item.file}`}
                        alt={item.label}
                        className="capy-state-image"
                      />
                      <figcaption className="capy-state-label">{item.label}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <section className="capy-room-section">
            <div className="capy-room-intro-layout">
              <div className="capy-room-intro-left">
                <h2 className="capy-section-heading capy-section-heading--inline">
                  04 • Room &amp; Setting
                </h2>

                <div className="capy-room-story">
                  <p>
                    Another important aspect of the game was the <strong>setting</strong>. I wanted a small room
                    for the pet to live in, and it mattered how that space was built, not just as a backdrop,
                    but as part of the experience.
                  </p>
                  <p>
                    I used <strong>pastel-like colors</strong> and soft lines, and kept the room from feeling
                    too busy so the background art never took attention away from the main attraction: the
                    capybara.
                  </p>
                </div>
              </div>

              <aside className="capy-room-image-panel" aria-label="Room environment">
                <figure className="capy-room-hero">
                  <img
                    src="/capy_assets/room.PNG"
                    alt="CapyCare room environment with space for the pet and UI"
                    className="capy-room-hero-image"
                  />
                  <figcaption className="capy-room-caption">
                    The room layout: open floor space for the capybara and UI around the edges.
                  </figcaption>
                </figure>
              </aside>
            </div>

            <div className="capy-room-block">
              <h3 className="capy-subsection-title">Lights on &amp; lights off</h3>
              <div className="capy-room-block-copy">
                <p className="capy-section-lead">
                  When the player puts the capy to sleep, the room switches from a bright daytime feel to a
                  darker, restful state.
                </p>
                <p>
                  I also wanted the room to <strong>react when the pet sleeps</strong>. When you press the
                  button to put it to rest, the lights dim and the curtains close. The layout also left clear
                  space for UI on screen.
                </p>
              </div>
              <div className="capy-room-duo">
                <figure className="capy-room-duo-item">
                  <img
                    src="/capy_assets/light_on.PNG"
                    alt="Room with lights on"
                    className="capy-room-duo-image"
                  />
                  <figcaption>Lights on</figcaption>
                </figure>
                <figure className="capy-room-duo-item">
                  <img
                    src="/capy_assets/light_off.PNG"
                    alt="Room with lights off and curtains closed"
                    className="capy-room-duo-image"
                  />
                  <figcaption>Lights off</figcaption>
                </figure>
              </div>
            </div>

            <div className="capy-room-block">
              <h3 className="capy-subsection-title">UI on the map</h3>
              <div className="capy-room-block-copy">
                <p className="capy-section-lead">
                  I made room in the environment for the stat bars and action buttons so gameplay stayed
                  readable without covering the pet.
                </p>
              </div>
              <div className="capy-room-duo capy-room-duo--ui">
                <figure className="capy-room-duo-item">
                  <img
                    src="/capy_assets/pet_stats.PNG"
                    alt="Pet stats UI: hunger, energy, hygiene, happiness"
                    className="capy-room-duo-image capy-room-duo-image--ui"
                  />
                  <figcaption>Pet stats</figcaption>
                </figure>
                <figure className="capy-room-duo-item">
                  <img
                    src="/capy_assets/pet_buttons.PNG"
                    alt="Pet action buttons UI"
                    className="capy-room-duo-image capy-room-duo-image--ui"
                  />
                  <figcaption>Pet buttons</figcaption>
                </figure>
              </div>
            </div>
          </section>

          <section className="capy-unused-section">
            <div className="capy-unused-intro-layout">
              <div className="capy-unused-intro-left">
                <h2 className="capy-section-heading capy-section-heading--inline">
                  05 • Unused &amp; Potential Updates
                </h2>

                <div className="capy-room-block-copy capy-unused-intro">
                <p>
                  We cut a lot of ideas to ship CapyCare in two weeks, but several directions still felt worth
                  exploring, especially if the game ever grew beyond a single capybara. I drafted assets for
                  features we never implemented; they are shown below as cut work and possible future updates.
                </p>
                <p>
                  Before we locked in the capybara, I also built out <strong>red panda</strong> and{' '}
                  <strong>bunny</strong> sprite sets, each with their own moods and care states. We cut them
                  when we scoped to one pet, but the drafts are below.
                </p>
                <p>
                  Other cut ideas included a <strong>food system</strong> (snacks tied to pet type or personality
                  preferences) and an in-game <strong>tutorial</strong>, a small robot helper you could click
                  for tips. All scrapped for the two-week deadline, but worth keeping on record.
                </p>
                </div>
              </div>

              <div className="capy-unused-food-panel" aria-label="Food item sprites">
                <div className="capy-unused-food-grid">
                  {UNUSED_FOOD_ITEMS.map((item) => (
                    <figure key={item.label} className="capy-unused-food-item">
                      <img src={item.src} alt={item.label} className="capy-unused-food-image" />
                      <figcaption>{item.label}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>

            <div className="capy-unused-block">
              <CapyUnusedPetGallery
                groups={UNUSED_REDPANDA_GROUPS}
                onSelect={setSelectedState}
                petName="Red Panda"
              />
            </div>

            <div className="capy-unused-block">
              <CapyUnusedPetGallery
                groups={UNUSED_BUNNY_GROUPS}
                onSelect={setSelectedState}
                petName="Bunny"
              />
            </div>

            <div className="capy-unused-block">
              <div className="capy-unused-tutorial-layout">
                <div className="capy-unused-tutorial-left">
                  <h3 className="capy-subsection-title">Tutorial helper</h3>
                  <div className="capy-room-block-copy">
                    <p>
                      I also explored a <strong>robot nurse</strong> to help players learn the game and answer
                      questions along the way. You would tap the small <strong>icon</strong> in the UI to call
                      them in, and the <strong>full-body robot</strong> would show up with a chat bubble to walk
                      you through the tutorial or help with anything else while you play.
                    </p>
                  </div>
                </div>

                <div className="capy-unused-tutorial-images" aria-label="Tutorial robot assets">
                  <div className="capy-room-duo capy-unused-tutorial-duo">
                    {UNUSED_TUTORIAL_ASSETS.map((asset) => (
                      <figure key={asset.label} className="capy-unused-tutorial-item">
                        <img src={asset.src} alt={asset.label} className="capy-unused-tutorial-image" />
                        <figcaption>{asset.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="capy-results-section">
            <h2 className="capy-section-heading">06 • Results</h2>

            <div className="capy-results-layout">
              <div className="capy-results-copy">
                <p className="capy-body-text">
                  With only <strong>two weeks</strong> and a team of <strong>four</strong>, my team and I still
                  managed to ship something we liked and were proud of. We cut scope where we had to, but the
                  final build felt playful, readable, and true to the capybara care loop we set out to make.
                </p>

                <div className="capy-results-block">
                  <h3 className="capy-subsection-title">What I learned</h3>
                  <p className="capy-body-text">
                    CapyCare pushed me beyond just drawing characters. I had to plan what art the game actually
                    needed and make sure it would work in production.
                  </p>
                  <ul className="capy-results-list">
                    <li>
                      <strong>Planning assets early:</strong> organizing which states, UI pieces, and
                      environment art had to exist before the team could build around them
                    </li>
                    <li>
                      <strong>Managing a growing library:</strong> keeping track of sprites, combinations, and
                      cut ideas without losing clarity
                    </li>
                    <li>
                      <strong>Design for feasibility:</strong> choosing colors, line weight, and layout so the
                      game stayed easy to build and easy to read on screen
                    </li>
                    <li>
                      <strong>Player-first visuals:</strong> thinking about what the user is actually looking at
                      during play, not just what looks good as a standalone illustration
                    </li>
                  </ul>
                </div>
              </div>

              <div className="capy-results-panel">
                <img
                  src="/capy_assets/unusedassets/capycare.PNG"
                  alt="CapyCare logo"
                  className="capy-results-image"
                />
                <a
                  href="https://capycare.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="capy-results-play-btn"
                >
                  Click to play
                </a>
              </div>
            </div>
          </section>
        </section>
      </main>

      {selectedState && (
        <div
          className={`capy-state-lightbox ${isLightboxClosing ? 'capy-state-lightbox--closing' : 'capy-state-lightbox--opening'}`}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={selectedState.label}
        >
          <div
            className={`capy-state-lightbox-content ${isLightboxClosing ? 'capy-state-lightbox-content--closing' : 'capy-state-lightbox-content--opening'}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="capy-state-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={getCapyAssetSrc(selectedState)}
              alt={selectedState.label}
              className="capy-state-lightbox-image"
            />
            <p className="capy-state-lightbox-label">{selectedState.label}</p>
          </div>
        </div>
      )}

      <SiteFooter active="projects" />
    </div>
  )
}

export default CapyCareCaseStudyPage

import '../App.css'

function SiteFooter({ active }) {
  const isHome = active === 'home'
  const isProjects = active === 'projects'
  const isAbout = active === 'about'

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">
          Let&apos;s
          <br />
          Connect!
        </h2>

        <div className="footer-contact-row">
          <a className="footer-contact-pill" href="mailto:mateuszma12004@gmail.com">
            <img src="/folioassets/mail-logo.svg" alt="Mail" className="footer-contact-icon" />
            <span>mateuszma12004@gmail.com</span>
          </a>
          <a
            className="footer-contact-pill"
            href="https://www.linkedin.com/in/mateusz-motyskiewicz"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/folioassets/linkdin-logo.svg" alt="LinkedIn" className="footer-contact-icon" />
            <span>in/mateusz-motyskiewicz</span>
          </a>
        </div>

        <div className="footer-divider" />

        <nav className="footer-nav">
          <a href="#/" className={`footer-nav-link ${isHome ? 'footer-nav-link--active' : ''}`}>HOME</a>
          <a href="#/about" className={`footer-nav-link ${isAbout ? 'footer-nav-link--active' : ''}`}>ABOUT</a>
          <a href="#/projects" className={`footer-nav-link ${isProjects ? 'footer-nav-link--active' : ''}`}>PROJECTS</a>
        </nav>
      </div>
    </footer>
  )
}

export default SiteFooter

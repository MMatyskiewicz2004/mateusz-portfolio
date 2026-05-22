import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function SiteHeader() {
  const location = useLocation()
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY

      if (currentY > lastScrollY + 10) {
        setIsHidden(true)
      } else if (currentY < lastScrollY - 10) {
        setIsHidden(false)
      }

      setLastScrollY(currentY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const path = location.pathname
  const isHome = path === '/' || path === ''
  const isProjects = path.startsWith('/projects')
  const isAbout = path.startsWith('/about')

  return (
    <header className={`header ${isHidden ? 'header--hidden' : ''}`}>
      <div className="header-left">
        <img src="/folioassets/mateuszlogo.svg" alt="Logo" className="header-logo" />
        <span className="header-name">mateusz matyskiewicz</span>
      </div>
      <nav className="header-nav">
        <a href="#/" className={`nav-link ${isHome ? 'nav-link--active' : ''}`}>HOME</a>
        <a href="#/about" className={`nav-link ${isAbout ? 'nav-link--active' : ''}`}>ABOUT</a>
        <a href="#/projects" className={`nav-link ${isProjects ? 'nav-link--active' : ''}`}>PROJECTS</a>
      </nav>
    </header>
  )
}

export default SiteHeader

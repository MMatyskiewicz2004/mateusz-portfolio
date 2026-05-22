import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import SolaceCaseStudyPage from './pages/SolaceCaseStudyPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import DaybreakCaseStudyPage from './pages/DaybreakCaseStudyPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/solace" element={<SolaceCaseStudyPage />} />
        <Route path="/projects/daybreak" element={<DaybreakCaseStudyPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)

import { Routes, Route } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import HomePage from './pages/HomePage'
import LessonsPage from './pages/LessonsPage'
import CafePage from './pages/CafePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/cafe" element={<CafePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

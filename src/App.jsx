import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'
import Header from './components/Header'

import Home from './pages/LandingPage/Home'
import About from './pages/LandingPage/About'
import Skill from './pages/LandingPage/Skill'
import Project from './pages/LandingPage/Project'
import Contact from './pages/LandingPage/Contact'

function App() {
  return (
    <>
      <div className="bg-page">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
      </div>
    </>
  )
}

export default App

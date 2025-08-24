
import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Resume from './components/Resume'
import './App.css'

function App() {
  

  return (
    
    <Router>
<Navbar />
<div className="container mt-5 pt-4">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/about" element={<About />} />
    <Route path="/resume" element={<Resume />} />
  </Routes>
</div>



    </Router>
     

    
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom';

import './index.css'
import App from './App.jsx'
import Navbar from '../components/Navbar.jsx'
import About from '../components/About.jsx'
import Tools from '../components/Tools.jsx'
import Projects from '../components/Projects.jsx'
import Sertifikat from '../components/Sertifikat.jsx'
createRoot(document.getElementById('root')).render(
  <>
    <Router>
      <div className='container mx-auto px-5 lg:px-30'>
        <Navbar />
        <App />
        <About />
        <Tools />
        <Projects />
        <Sertifikat />
      </div>
    </Router>
  </>,
)

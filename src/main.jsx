import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from '../components/navbar.jsx'
import About from '../components/About.jsx'
import Tools from '../components/Tools.jsx'
import Projects from '../components/Projects.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container mx-auto px-4'>
      <Navbar />
      <App />
      <About/>
      <Tools/>
      <Projects/>
    </div>
  </StrictMode>,
)

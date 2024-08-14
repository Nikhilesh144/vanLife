import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={ <Home />}/>
      <Route  path="/about" element={ <About />} />
    </Routes>
    
    </BrowserRouter>
  
  </StrictMode>,
)

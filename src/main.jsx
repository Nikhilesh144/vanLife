import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Vans from './components/vans.jsx'
import '../server.js';
import Description from './components/Description.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={ <Home />}/>
      <Route  path="/about" element={ <About />} />
      <Route  path="/vans" element={ <Vans  />}/> 
      <Route  path='/vans/:id' element={<Description />}/>
        </Routes>
    
    </BrowserRouter>
  
  </StrictMode>,
)

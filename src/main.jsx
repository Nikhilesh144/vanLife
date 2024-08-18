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
import Layout from './components/Layout.jsx'
import Host from './components/host/host.jsx'
import Income from './components/host/Income.jsx'
import Reviews from './components/host/Reviews.jsx'
import HostLayout from './components/host/hostLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route  path="/" element={ <Home />}/>
      <Route  path="/about" element={ <About />} />
      <Route  path="/vans" element={ <Vans  />}/> 
      <Route  path='/vans/:id' element={<Description />}/>
      <Route    element={<HostLayout/>}>
      {/* <Route path='/host' element={<Host />} */}
      <Route  path='/host' element={<Host />}/>
        <Route  path='/host/income' element={<Income />}/>
        <Route  path='/host/reviews' element={<Reviews/>}/>
      </Route>
      </Route >
        </Routes>
    </BrowserRouter>
  
  </StrictMode>,
)

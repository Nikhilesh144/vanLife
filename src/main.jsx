import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,Routes,Route,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Vans,{loader as vansLoader}  from './components/vans.jsx'
import '../server.js';
import Description from './components/Description.jsx'
import Layout from './components/Layout.jsx'
import Host from './components/host/Host.jsx'
import Income from './components/host/Income.jsx'
import Reviews from './components/host/Reviews.jsx'
import HostLayout from './components/host/hostLayout.jsx'
import HostVans from './components/host/HostVans.jsx'
import HostVanDetails from './components/host/HostVanDetails.jsx'
import HostDetails from './components/host/HostDetails.jsx'
import HostPricing from './components/host/HostPricing.jsx'
import HostPhotos from './components/host/HostPhotos.jsx'
import NotFound from './components/NotFound.jsx'
import Error from './components/Error.jsx'
import Login from './components/host/Login.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <Route  path="/" element={<Layout/>}>
   <Route index  element={ <Home />}/>
   <Route  path="about" element={ <About />} />
  <Route  path="vans" element={ <Vans  />} errorElement={<Error />} loader={vansLoader}/> 
  <Route  path='vans/:id' element={<Description />}/>
  <Route path='login' element={<Login/>}/>
  <Route path='*' element={<NotFound/>}/>
  <Route path='host'   element={<HostLayout/>}>
  {/* <Route path='/host' element={<Host />} */}
     <Route  index element={<Host />}/>
     <Route  path='income' element={<Income />}/>
     <Route path='vans'element={<HostVans/>} />
       <Route path='vans/:id'element={<HostVanDetails/>} >
         <Route index element={< HostDetails/>} />
         <Route path='pricing' element={< HostPricing/>} />
         <Route path='photos' element={< HostPhotos/>} />
      </Route>
     <Route  path='reviews' element={<Reviews/>}/>
    
  </Route>
  </Route >
  
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  
  </StrictMode>,
)

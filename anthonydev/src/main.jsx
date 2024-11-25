
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Conatct'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/resume' element={<Resume/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/contact-us' element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
)

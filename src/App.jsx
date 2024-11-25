import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Books from './pages/Books'
import About from './pages/Abouts'
import Contacts from './pages/Contacts'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='/Books' element={<Books />} />
            <Route path='/Abouts' element={<About />} />
            <Route path='/Contacts' element={<Contacts />} />
          </Route>



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

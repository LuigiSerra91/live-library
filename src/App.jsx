import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Books from './pages/Books'
import Abouts from './pages/Abouts'
import Contacts from './pages/Contacts'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='/books' element={<Books />} />
            <Route path='/abouts' element={<Abouts />} />
            <Route path='/contacts' element={<Contacts />} />
          </Route>



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

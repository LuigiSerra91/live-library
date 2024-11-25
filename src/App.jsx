import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Books from './pages/Books'
import About from './pages/About'
import Contacts from './pages/Contacts'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          
            <Route path='/' element={<Home />} >
            <Route path='/Books' element={<Books />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contacts' element={<Contacts />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

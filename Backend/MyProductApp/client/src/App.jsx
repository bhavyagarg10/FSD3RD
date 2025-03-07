import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Viewusers from './pages/Viewusers'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>}/>
        <Route path='/viewusers' element={<Viewusers/>}/> //page name should be in capital
        <Route path="*" element={<h1>404 Error</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage}></Route>
          <Route path="/chisiamo" Component={ChiSiamo}></Route>
          <Route path="/prodotti" Component={Prodotti}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

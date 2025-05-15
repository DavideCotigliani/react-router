import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/chisiamo" Component={ChiSiamo}></Route>
          <Route path="/prodotti" Component={Prodotti}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

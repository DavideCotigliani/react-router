import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/products/Prodotti'
import DefaultLayout from './layouts/DefaultLayout'
import DetailsProduct from './pages/products/DetailsProduct'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Homepage}></Route>
            <Route path="/chisiamo" Component={ChiSiamo}></Route>
            <Route path="/prodotti" >
              <Route index Component={Prodotti} />
              <Route path=':id' Component={DetailsProduct} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router'
import LayoutMain from './pages/layout-main'
import Home from './pages/home'
import CreateProduct from './pages/create-product'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

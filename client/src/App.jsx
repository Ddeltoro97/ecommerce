import { Routes, Route} from 'react-router-dom'
import TopBar from './components/TopBar/TopBar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import User from './pages/User/User'
import Product from './pages/Product/Product'
import Products from './pages/Products/Products';
import Search from './pages/Search/Search'
import About from './pages/About/About'
import Categories from './components/Categories/Categories'

import { useState } from 'react'
import './App.css'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const renderCat = () =>{
    setIsOpen(!isOpen)
  }

  const [category, setCategory] = useState("")

  return (
    <div>
      <TopBar
      isOpen={isOpen}
      renderCat={renderCat}/>
      <Categories
      isOpen={isOpen}
      renderCat={renderCat}
      setCategory={setCategory}>
        <div className='routeHolder'>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/user/:id' element={<User/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products
        category={category}/>}></Route>
      </Routes>
        </div>
      </Categories>
    </div>
  )
}

export default App

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
import Cart from './pages/Cart/Cart'


import { CloudinaryContext } from 'cloudinary-react';

import { useState } from 'react'
import './App.css'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const renderCat = () =>{
    setIsOpen(!isOpen)
  }

  const [category, setCategory] = useState("")

  const [name, setName] = useState("");
  const [searchString, setSearchString] = useState("");

  const handleName = (event) =>{
    event.preventDefault();
    setName(event.target.value);
  }

  const handleSearch = () =>{
    setSearchString(name)
  };

  return (
    <CloudinaryContext>
      <div>
        <TopBar
        isOpen={isOpen}
        renderCat={renderCat}
        setCategory={setCategory}
        name={name}
        handleName={handleName}
        searchString={searchString}
        handleSearch={handleSearch}/>
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
          <Route path='/search' element={<Search
          searchString={searchString}/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/products' element={<Products
          category={category} setCategory={setCategory}/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
          </div>
        </Categories>
      </div>
    </CloudinaryContext>
  )
}

export default App

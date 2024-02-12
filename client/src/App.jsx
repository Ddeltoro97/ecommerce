import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import User from './pages/User/User'
import Product from './pages/Product/Product'
import Search from './pages/Search/Search'
import './App.css'

function App() {



  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/user/:id' element={<User/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
      </Routes>
    </div>
  )
}

export default App

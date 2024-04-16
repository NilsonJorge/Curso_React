import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import {BrowserRouter,  Routes, Route, Router, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>    
    </BrowserRouter>

    </>
  )
}

export default App

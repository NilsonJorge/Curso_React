import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

//components
import Footer from './components/Footer';
import NavBar from './components/NavBar';


//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>

        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

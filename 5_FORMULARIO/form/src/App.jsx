import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h2>Forms</h2>
      <MyForm user = {{name:"Nilson", email:"nilson@gmail.com", bio:"Eu sou programador", role: "admin"}}/>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Este é o meu <strong>PRIMEIRO</strong> exercício</h1>
      <div className='teste'>Teste</div>
    </>
  )
}

export default App

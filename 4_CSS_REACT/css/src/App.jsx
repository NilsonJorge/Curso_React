import { useState } from 'react'

import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const n = 12
  const [name] = useState("Nilson")

  const redTitle = false

  return (
    <div className='App'>
      {/*Css Global */}
      <h1>React com CSS</h1>
      {/*Css de componete */}
      <MyComponent/>
      <p>Paragrafo do App.js</p>
      {/* Inline Css */}
      <p style={{color: 'blue', padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      {/*CSS Inline Dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}):({color:"pink"})}>CSS Dimamico</h2>
      <h2 style={name === "Nilson" ? ({color: "green", backgroundColor: "#000"}):null}>CSS Dimamico</h2>
      {/*Classe dinâmica */}
      <h2 className={redTitle ?("red-title"):("title")}>Este titulo vai ter classe dinamica</h2>
      {/* CSS Modules */}
      <Title/>
    </div>
  )
}

export default App

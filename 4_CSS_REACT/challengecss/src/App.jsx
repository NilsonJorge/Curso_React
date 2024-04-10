import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const [count, setCount] = useState(0)
  const cars = [
    {id:1, nome:"Pulse",marca:"Fiat",ano:2024},
    {id:2, nome:"Polo",marca:"VW",ano:2022},
    {id:3, nome:"HB20",marca:"Hyndai",ano:2020},
  ]
  return (
    <>
      <h1>Projeto CSS em React</h1>
      
      {cars.map((car)=>(
        <CarDetails
        key={car.id}
        nome = {car.nome}
        marca = {car.marca}
        ano = {car.ano}
        />
      ))}
      
    </>
  )
}

export default App

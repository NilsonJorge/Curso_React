import { useState } from 'react'
import Yami from './assets/yami.jpg'
import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFuction from './components/ExecuteFuction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'

function App() {
  //const name = "Nilson"
  const[userName] = useState('Nilson')

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar : true, km:0},
    {id: 1, brand: "KIA", color: "Branca", newCar : false, km:4535},
    {id: 1, brand: "Lamborghini", color: "Verde", newCar : false, km:6345},
  ];

  const people = [
    {id: 1, name: "Nilson", idade: 21, profissao: "Dev"},
    {id: 2, name: "Joel", idade: 43, profissao: "Tratorista"},
    {id: 3, name: "Bastião", idade: 12, profissao: "Estudante"},
    
  ]

  function showMessage(){
    console.log("Evento componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <>
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <div>
        <img src="/gjo.jpg" alt="Satoru Gojo" />
      </div>
      {/*Imagem em asset*/}
      <div>
        <img id='yami' src={Yami} alt="Yami Sukehero" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/*Props*/}
      <ShowUserName name = {userName}/>
      {/*Destructuring*/}
      <CarDetails brand = 'VW' km={100000} color = 'Azul' newCar = {false}/>
      {/*reaproveitamento*/}
      <CarDetails brand = 'Ford' km={0} color = 'Vermelha' newCar = {true}/>
      <CarDetails brand = 'Fiat' km={4500} color = 'Preta' newCar = {false}/>
      {/* Loop em array de objetos */}
      {cars.map((car) =>(
        <CarDetails
        key={car.id} 
        brand ={car.brand} 
        color = {car.color}
        km = {car.km}
        newCar = {car.newCar}
        />
      ))}
      {/*Fragment */}
      <Fragment/>
      {/*Children */}
      <Container myValue = "Teste">
        <p>Este é o conteudo</p>
      </Container>
      {/* executar funcao*/}
      <ExecuteFuction myFunction = {showMessage}/>
      {/*state lift */}
      <Message msg = {message}/>
      <ChangeMessageState handleMessage = {handleMessage}/>
      {/*Desafio 4*/}
      {people.map((person)=>(
        <UserDetails
        key={person.id}
        name = {person.name}
        idade = {person.idade}
        profissao = {person.profissao}
        />
      ))}

    </>
  )
}

export default App

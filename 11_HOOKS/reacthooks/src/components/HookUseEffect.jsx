import {useEffect, useState} from 'react'

const HookUseEffect = () => {
    //1 - useEffect, sem dependência

    useEffect(()=>{
        console.log("Estou sendo executar")
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number+1);
    }

    // 2 - array de dependencia vazio
    useEffect(()=> {
        console.log("Serei executado apenas uma vez")
    },[]);

    // 3 - item no array de dependencia
    const [anotherNumber, setAnotherNumber] = useState(0)
    
    useEffect(()=>{
        if(anotherNumber > 0){
            console.log("Sou executando apenas quando o anotherNumber muda!")
        }
        
    },[anotherNumber])

    // 4 - cleanup do useEffect
    useEffect(()=>{
        // const time = setTimeout(()=>{
        //     console.log('Hello World');
        //     setAnotherNumber(anotherNumber+1);
        // },2000);
        // return () => clearTimeout(time);
    },[anotherNumber])

  return (
    <div>
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Executar</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={()=>setAnotherNumber(anotherNumber+1)}>Mudar anotherNumber!</button>
        <hr />
    </div>
  )
}

export default HookUseEffect
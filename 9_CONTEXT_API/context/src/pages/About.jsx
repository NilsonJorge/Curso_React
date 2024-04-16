import React from 'react'
//4 - refatorando com hook
import {useCounterContext} from "../hooks/useCounterContext";
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const About = () => {

  const { counter } = useCounterContext();

  //5 - context mais complexo
  const {color} = useTitleColorContext();

  return (
    <div>
      <h1 style={{color:color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default About
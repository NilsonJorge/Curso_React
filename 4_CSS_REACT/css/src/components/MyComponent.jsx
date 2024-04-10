import React from 'react'
import "./MyComponent.css"
const MyComponent = () => {
  return (
    <div>
        <h1>Css de componente</h1>
        <p>Esse é o paragrafo do componente</p>
        <p className='my-comp-paragraph'>Esse também é paragrafo do componente</p>
    </div>
  )
}

export default MyComponent
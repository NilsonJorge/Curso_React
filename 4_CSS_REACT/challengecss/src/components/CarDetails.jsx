import React from 'react'
import styles from './CarDetails.module.css'

const CarDetails = ({nome,marca,ano}) => {
  return (
    <div className={styles.carro}>
        <h2>{nome} - {marca}</h2>
        <p>Ano:{ano}</p>
    </div>
  )
}

export default CarDetails
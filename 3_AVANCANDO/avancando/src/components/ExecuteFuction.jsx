import React from 'react'

const ExecuteFuction = ({myFunction}) => {
  return (
    <div>
        <button onClick={myFunction}>Clique aqui para executar a função!</button>
    </div>
  )
}

export default ExecuteFuction
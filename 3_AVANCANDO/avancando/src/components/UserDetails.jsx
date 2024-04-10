import React from 'react'

const UserDetails = ({name, idade, profissao}) => {
  return (
    <div>
        <h2>Pessoa:</h2>
        <p>Nome: {name}</p>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
        {idade >= 18 &&<p>Pode tirar carteira!</p>}
    </div>
  )
}

export default UserDetails
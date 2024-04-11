import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
  // 6-Controlled input
  /*3-Gerenciamento de dados */
  const [name,setName] = useState(user ? user.name: "");
  const [email,setEmail] = useState(user ? user.email: "");
  const [bio, setBio] = useState(user ? user.bio: "")
  const [role,setRole] = useState(user ? user.role: "")
  const hadleName = (e) =>{
    setName(e.target.value)
  }
  //console.log(name)
  //console.log(email)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Enviando o formulario')
    
    console.log(name, email,bio,role)

    // 7 - Limpar fomulario
    setEmail('')
    setName('')
    setBio('')
  }
  return (
    <div>
        {/*5-Envio de form */}
        {/*1-Criacao de form */}

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name='name' value={name} placeholder='Digite o seu nome' onChange={hadleName}/>
          </div>
          {/*1-label envolvendo input */}
          <label>
            <span>E-mail</span>
            {/* 4 - Simplificação de manipulação de state */}
            <input type="email" name="email" value={email} placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)} />
          </label>
          {/* 8 - Textarea */}
          <label>
            <span>Bio:</span>
            <textarea name="bio" placeholder='Descriçao do usuário' onChange={(e)=> setBio(e.target.value)} value={bio}></textarea>
          </label>
          {/* 9 -select */}
          <label>
              <span>Função no sistema</span>
              <select name="role" onChange={(e)=> setRole(e.target.value)} value={role}>  
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
              </select>
          </label>
          <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm

import NavBar from '../components/NavBar'
import {useContext} from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import React from 'react'

function Home() {
  const {usuarioLogado, usuarios, setUsuarios}= useContext(GlobalContext)

  function adicionarUsuario(){
    let usuario = {
      id: Date.now(),
      nome:"Capitão Ganso",
      email:"capitao@juliaroger.com"
    }
    setUsuarios([...usuarios,usuario])
  }



  return (
    <div>
     <NavBar/>
     <h1>Home page do site</h1>
     <p>
     Olá {usuarioLogado}
     </p>
     
     <div>
          {
            usuarios.map((usuario) => (
              <div key={usuario.id}>
                <p>Nome: {usuario.nome}</p>
                <p>E-mail: {usuario.email}</p>
                <p>{usuario.id}</p>
              </div>
              
            ))
          }
     </div>
     <div>
      <button onClick={adicionarUsuario}> Adicionar usuário </button>
     </div>

     <p>abduhaidhoiasdhoihsdoihsdoisancisncisnaocnaosyeuyvfehvfcyvscVYSAIPVCISV</p>
    </div>
  )
}

export default Home

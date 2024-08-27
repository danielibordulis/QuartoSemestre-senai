import { useState } from 'react'
import './App.css'

function App() {
  const[inputNome, setInputNome] = useState('');
  const[inputIdade, setInputIdade]= useState(0);
  const[usuarios, setUsuarios]=useState([]);

  function mudouNome(event){
    setInputNome(event.target.value) //click, toque enfim é um evento 
  }

  function mudouIdade(event){
    setInputIdade(event.target.value)
  }

  function cadastrarUsuario(){
    
    let usuario={
      id: Date.now(),
      nome:inputNome,
      idade:inputIdade
    }
    console.log(usuario);
    setUsuarios([...usuarios,usuario])//os tres pontinhos extrae os elementos("espalhar")

    setInputIdade('')
    setInputNome('')
  }

  return (
    <>
      <h1 className='titulo'>Inputs controlados</h1>

      <div className="inputContainer">
          <label htmlFor='inpNome'>Nome</label>
          <input
          value={inputNome}
          onChange={mudouNome}
          id='inpNome' type="text"/>
      </div>

      <div className="inputContainer">
        <label htmlFor='inpIdade'>Idade</label>
        <input
        value={inputIdade}
        onChange={mudouIdade}
        type="text" id='inpIdade'/>
      </div>

      <button onClick={cadastrarUsuario}>Cadastrar</button>

        <div>
          <p>
            Nome digitado: {inputNome}
          </p>
          <p>
            Idade: {inputIdade}
            </p>
            <div>
              Usuarios:{
                usuarios.map((usuario)=>(
                <div key={usuario.id}>
                  <p>{usuario.nome}</p>
                  <p>{usuario.idade}</p>
                </div>
              ))}
            </div>
        </div>
    </>
  )
}

export default App

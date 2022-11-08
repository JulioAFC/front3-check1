import { useState } from "react";
import "./index.css";
import{Card} from './Card.jsx'
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente


function App() {
  // Aqui você irá criar os Estados para manipular os Inputs

  //Validação
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [allColors, setAllColors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const containsNumber = (str) => {
    return /[0-9]/.test(str);
  }

  const handleClick = () =>{
    if (name && name.length < 3) setIsValid(false)
    if (color && color.length < 6 && !containsNumber(color)) setIsValid(false)
  }

  return (
    (
      <div className="App">
        <h1>ADICIONAR NOVA COR</h1>
        <form onSubmit={handleSubmit}>
          {/* Comece a desenvolver o seu Código por aqui :) */}
          <InputName name={name} setName={setName} />
          <InputColor color={color} setColor={setColor}/>
          <button type="submit" onClick={handleClick}>ADICIONAR</button>
        </form>
      </div>
  ) )
}

export default App;


// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
import classNames from 'classnames';
import { useState } from "react";
import { Cards } from "./components/CardsProducts/Cards";
import styles from './Styles.module.css';


function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [colorName, setColorName] = useState("");
  const [hexColor, setHexColor] = useState("");
  const [allColors, setAllColors] = useState([]);
  const [error, setError] = useState(false);

  //Validação de caracteres 
  const containsNumber = (number) => { 
    return /[0-9]/.test(number);
  }

  //Validação formulário
  function validateForm(){
    if(colorName === null || colorName === undefined) return true;

    var nameWithoutSpace = colorName.trim();

    if(nameWithoutSpace.length < 3) return true;

    if (hexColor.length < 6 && !containsNumber(hexColor))return true;

    return false;
  }

  //Adicionando uma nova cor
  function addColor(event) {
    event.preventDefault()
    let validation = validateForm();
    const coloring = {
      colorName: colorName,
      hexColor: hexColor
    }
    
    setError(validation)

    if (validation) return;

    setAllColors([...allColors, coloring])
  }

  return (
    <div className="App">
     <h1>ADICIONAR NOVA COR</h1>
     <form className="formCadastro"  onSubmit={event => addColor(event)}>

            <input type="text" 
      className="form-control" 
      value={colorName} 
      onChange={event => setColorName(event.target.value)} 
      placeholder="Digite aqui o nome da cor"/>

            <input type="color" 
      className="form-control" 
      value={hexColor} 
      onChange={event => setHexColor(event.target.value)} 
      placeholder="Escolha a sua cor em formato hexadecimal"/>

            <button type="submit" className="btn btn-primary">ADICIONAR</button>
        </form>
    <small 
      className={classNames({
          [styles.error]: error
      })}
    >
      Por favor, verifique os dados inseridos no formulário
    </small>

     <Cards cores = {allColors}/>

    </div>
  )
  }

export default App
//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {

  function imprimirCor(){
    console.log(props.colorData)
  }

  return (
    <div className="new-color">
        <p>{props.colorData.colorName}</p>
        <h3>{props.colorData.colorCode}</h3>
    </div>
  )
}
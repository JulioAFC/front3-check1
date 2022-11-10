//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card(props) {
  return (
    <div
      className="card-container"
      style={{ backgroundColor: props.corData.hexColor }}
    >
      <div className="card-body">
        <h1>{props.corData.colorName}</h1>
        <span>{props.corData.hexColor}</span>
      </div>
    </div>
  );
}

//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card(props) {
  return (
    <div
      className="card-container"
      style={{ 
        backgroundColor: props.corData.hexColor , 
        padding:'20px',
        paddingRight:'100%',
        borderStyle: 'unset',
        borderRadius: '5px',
        paddingTop:'60px',
        marginTop: '20px',
        marginRight:'200px',
        paddingBottom: '20px',
        
      }} 
    >
      <div className="card-body" style={{backgroundColor: props.corData.hexColor}}>
        <h3 style={{backgroundColor: props.corData.hexColor}}>{props.corData.colorName}</h3>
        <span style={{backgroundColor: props.corData.hexColor}}>{props.corData.hexColor}</span>
      </div>
    </div>
  );
}



function Onibus(props) {
    let onibus=props.onibus
  return (
    <div>
      <h2>MODELO:{onibus.modelo}</h2>
      <p>PLACA:{onibus.placa}</p>
      <p>ANO:{onibus.ano}</p>
      <p>ID:{onibus.id}</p>
    </div>
  )
}

export default Onibus

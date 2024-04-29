
type Props = {
    imagen: string,
    descripcion: string
}

const Cards = (props: Props) => {
  return (
    <div className="card">
        <img src={props.imagen} alt="imagen XD" />
        <div>
            <p>{props.descripcion}</p>
        </div>
    </div>
  )
}

export default Cards
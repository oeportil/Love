import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
       <div className="errores">
            <h2>¿Qué estas Buscando?</h2>
            <Link className="er" to={"/"}>Redirigir a pagina principal</Link>
       </div>
    </>
  )
}

export default NotFound
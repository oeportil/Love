import Cards from "./components/Cards"

const Principal = () => {
  return (
    <>
      <div className="foreground">
        <div className="box">
          <div className="contenedor_principal">
            <h1>Nuestro Aniversario</h1>
            <p>Un año y contando sobre nuestras aventuras</p>
          </div>
        </div>        
      </div>
      <div className="container">
        <h2>Hechando un vistazo</h2>
        <div className="grid c2">
          <Cards imagen={"../../../public/1-1.jpg"} descripcion={"Karen y Oscar en su primera foto recien novios"} />
          <Cards imagen={"../../../public/1-2.jpg"} descripcion={"Oscar y Karen en el edificio H de Unicaes"} />
          <Cards imagen={"../../../public/1-3.jpg"} descripcion={"Karen y Oscar, cuando ella se hacia cosas en el pelo cerca de casa de Oscar"} />
          <Cards imagen={"../../../public/1-4.jpg"} descripcion={"Oscar y Karen en su primera Navidad Juntos Poniendo el Arbol"} />
          <Cards imagen={"../../../public/1-5.jpg"} descripcion={"Mejor foto de ambos tomada por Gaby, hermana de Oscar"} />
        </div>
      </div>   
    </>
  )
}

export default Principal
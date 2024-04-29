import karen from './img/karen.jpg'
import oscar from './img/oscar.jpg'

const AboutUs = () => {
  return (
    <div className="container center">
        <h2>Sobre Nosotros</h2>
        <div className="aboutus">
            <img src={karen} alt="Karen foto" />
            <div>
                <p>Ella es Karen ELizabeth Figueroa Campos, la novia, le encantan muchos los tacos, su pasatiempo favorito es leer
                  ademas que es una buena diseñadora, la mejor de todas, aunque su pasatiempo favorito es leer, le encanta pasar tiempo con sus libros
                  ademas que se entusiasma hablar sobre ello, pero si le preguntan sobre sus libros favoritos siempre te dira que es la seleccion, sus peliculas 
                  favoritas son los juegos del hambre, su animal es la jirafa y los lobos, tambien le gusta dormir por las tardes y le cuesta levantarse temprano,
                  su color favorito es el verde menta y el gris, sus palabras que dice son, "Es muy top", "Chale", "Heavy", finalmente sus artistas favoritos son Beret, Aitana 
                  y Taylor Swift.
                </p>
            </div>
            <div>
                <p>
                  El es Oscar Ernesto Portillo Cerón, el novio, le encantan mucho las alitas del Buffalo wings, su pasatiempo favorito es tocar la guitarra 
                  y jugar videojuegos, su color favorito es el negro y el rojo, su animal favorito por mas gracioso que parezca es el pato, él no tiene pelicula
                  favoritas pero si le preguntan él dira que es Kingsman, despues de comer le da el famoso mal del puerco, a cada rato dice palabras como increible u otros, sus artistas
                  favoritos son Michale Jackson y Ghost, usa mucho las "chanclas", le gusta cargar a Karen a pesar de que ella siempre le dice que no, quiere ser quiropractico, le gusta bailar 
                  con Karen pero tambien le dice que no.  
                </p>
            </div>
            <img src={oscar} alt="Oscar foto" />
        </div>
    </div>
  )
}

export default AboutUs
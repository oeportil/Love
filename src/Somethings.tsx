import banner2 from './img/banner2.jpg'
import banner3 from './img/banner3.jpg'
import banner4 from './img/banner4.jpg'


const Somethings = () => {
  return (
   <>
    <h2>Curiosidades</h2>
     <div className='somethings'>      
      <div>
        <h3>¿Dónde se Conocieron?</h3>
        <p>Fue en la universidad, habia un partido de football y uno de basketball al mismo tiempo,
          ambos llegaron para recibir la clase de violin, Karen se sento en una mesa que habia alli y Oscar se
          sento en el piso cerca de la entrada del salon, cuando entraron se dieron cuenta que ambos no habian 
          impreso una partitura que era necesaria para ese dia, asi que cuando bajaron a imprimirla se conocieron,
          se pasaron sus numeros y comenzo una bonita amistad que luego se convertiria en una hermosa relacion,
        </p>
      </div>
      <img src={banner2} alt="" />
      <img src={banner3} alt="" />
      <div className='scondary'>
        <h3>¿Dónde fue la primera cita?</h3>
        <p>La primera cita aunque eran amigos fue en la pizza hut de Metrocentro Santa Ana, ambos consideran esa como su primer cita,
          despues de un dia en la Universidad, tenian que almorzar algo y no habia nada que comer donde estaban, asi que decidieron caminar hasta 
          la pizza hut, claro que Oscar como suda mucho llego todo empapado y Karen cansada por todo el camino, cuando se sentaron al lugar pidieron algo que se 
          llama Mybox, que son pizzas personales con palitroques y asi pasaron un gran dia.
        </p>
      </div>  
      <div>
        <h3>¿Cuáles son algunos de sus tradiciones favoritos?</h3>
        <p>
          Para ellos, son las llamadas en discord para ver series o peliculas o simplemente hablar, verse todos los domingos turnandose para ir a casa de Karen 
          o casa de Oscar, comer tacos porque a ambos le facinan, decir que necesitan un carro porque andar en bus es tedioso, pelear por ver quien ama mas a quien,
          aunque todos sabemos que ambos se aman demasiado.
        </p>
      </div>
      <img src={banner4} alt="" />       
    </div>
   </>
  )
}

export default Somethings
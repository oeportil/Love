import { useRef, useState } from "react"
import love from '../public/SanValentin/love.gif'
import no from '../public/SanValentin/memeNO.jpg'

const SanValentin = () => {
    const [first, setfirst] = useState(0);
    const [respuesta, setRespuesta] = useState<string | null>(null);
    const nao = useRef<HTMLInputElement>(null);

    const submit  = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(first == 0){
           setRespuesta("no");
            setTimeout(() => {
                nao.current!.classList.add("disabled");
                    setTimeout(() => {
                        nao.current!.remove(); 
                    }, 1000);           
            }, 1000);
        } else {
            setRespuesta("si");
        };
    }
  return (
    <div>
        <h2>San Valentin Edicion 2025</h2>
        <div className="sanValentin">
        <h3>¿Quieres ser mi San Valentin?</h3>
            <form action="" onSubmit={submit} className="svForm">                    
                    <input className="sisv" type="submit" value={"Si, Te amo"} onClick={() => setfirst(1)}/>
                    <input className="nosv" ref={nao} type="submit" value={"No"} onClick={() => setfirst(0)}/>
            </form>
            <div>
            {respuesta === "no" && (
                <div className="svCont">
                    <img src={no} alt="Imagen de no" className="sanValentinimg" />
                    <p>¿Qué haces presionando "No"? Te elimino esa opción para que dejes de chistosa.</p>
                </div>
            )}
            {respuesta === "si" && (
                <div className="svCont">
                    <img src={love} alt="Imagen de Love" className="sanValentinimg" />
                    <p>¡Qué emoción! Espero que tengamos un buen San Valentín.</p>
                </div>
            )}
            </div>
        </div>
    </div>
  )
}

export default SanValentin
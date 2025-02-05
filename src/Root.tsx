import { Link, Outlet, useLocation } from "react-router-dom"
import Logo from './img/logo.png'

const Root = () => {
    const {pathname} = useLocation();
    const fecha = new Date()
    

  return (
    <>
        <header>
            <div className="tamanio ">
                <Link className="none centrado " to={"/"}>
                    <img className="centrado" src={Logo} alt="" width={100} />
                </Link>
                    <nav>
                        <Link className={`link ${pathname == "/album" ? "active" : "" }`} to={"/album"}>
                            <p>Álbum</p>
                        </Link>
                        <Link className={`link ${pathname == "/nosotros" ? "active" : "" }`} to={"/nosotros"}>
                            <p>Sobre Nosotros</p>
                        </Link>
                        <Link className={`link ${pathname == "/canciones" ? "active" : "" }`} to={"/canciones"}>
                            <p>Lista de Canciones</p>
                        </Link>
                        <Link className={`link ${pathname == "/curiosidades" ? "active" : "" }`} to={"/curiosidades"}>
                            <p>Curiosidades</p>
                        </Link>
                        <Link className={`link newLink ${pathname == "/san-valentin" ? "active" : "" }`} to={"/san-valentin"}>
                            <p>San Valentin <span className="newNoti">new</span></p>
                        </Link>
                    </nav>
            </div>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer className="footer">
            <p>Hecho por Oscar Para mi Chica. {fecha.getFullYear()} &copy;</p>
        </footer>
    </>
  )
}

export default Root
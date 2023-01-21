import { cerrarSesion } from '../cookies/Usercookies';
import '../assets/style/style.css'

export function Cerrar() {
    return(
        <>
        <ul className="hijos">
                <li><a href="#">ver mas</a></li>
                <li><a href="/" onClick={cerrarSesion } >cerrar sesion</a></li>
                </ul>
                </>
    )
}




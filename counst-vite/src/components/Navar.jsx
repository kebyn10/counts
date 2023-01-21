import '../assets/style/style.css'
import { useEffect,useState } from 'react';
import {Cerrar,NoCerrar} from './LogOut'
/*import { Link } from 'react-router-dom'  <Link to="/" no recarga la pagina*/
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();
 
 function Navar() {
  let conectados=false
 
const [cone,setCone]=useState("")
const [linkCone,setlinkCone]=useState("")
useEffect(()=>{
function conectado() {
  if(cookies.get('nombre')){
      let text=cookies.get('nombre')+" "+cookies.get('apellidos')
     setCone(value.toString(text))
   
     setlinkCone('#')
 conectados=true
  }else{
    setCone("Login")
    setlinkCone('/logUser')
   conectados=false
  }

  

}
conectado()
console.log('se ejecuto');
},[])



  return (

    <main>
    <header>
      <div className="interior">
        <a href="/" className="logo" target="blank"><img src="https://pbs.twimg.com/profile_images/1542894300530413569/uKseC-yt_400x400.jpg" alt="Logo" /></a>
     
        <nav className="navegacion">
          <ul> 
       
            <li><a href="/" target="blank">Inicio</a></li>
            <li><a href="/juegos" target="blank">juegos</a></li>
            <li>
              <a href="#" target="blank">Productos</a>
            </li>
            <li><a href="#" target="blank">Contacto</a></li>
            
            <li  className="submenu"><a href={linkCone} target="blank">{cone}</a>

                {conectados ? <Cerrar  /> :<NoCerrar /> }
            </li>
           
          </ul>
        </nav>
      </div>
    </header>
  </main>
  )
}


export default Navar

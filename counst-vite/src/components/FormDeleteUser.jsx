import '../assets/style/style.css'
import { Link } from 'react-router-dom'
 function FormLog() {
  return (
    <section class="form-register">
    <h4>Formulario De Eliminacion De Perfil</h4>
    <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo"/>
    <input class="controls" type="password" name="correo" id="correo" placeholder="Ingrese su Contraseña"  />
 
    <br/>
    <input class="botons" type="submit" value="Iniciar sesion"/>
    <br/>
        <br/>
        <Link to="/"><input class="botons" value="cancelar"/></Link>
    <br/>
  </section>

  )
}

export default FormLog

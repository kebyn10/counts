import '../assets/style/style.css'
import {Form,Formik} from 'formik'
import { createUserRequest } from '../api/users.api.js';


 function FormRegis() {
  return (
  <>
  <Formik
  initialValues={{
    nombre:"",
    apellidos:"",
    correo:"",
    contra:""
  }}

onSubmit={ async(values,actions)=>{
  console.log(values);
 try {
  const response= await createUserRequest(values)
  console.log(response);
  actions.resetForm();
 } catch (error) {
  console.error(error)
 }
 
}}

  >
{({handleChange,handleSubmit,values,isSubmitting})=>(
      <Form  onSubmit={handleSubmit}>
    
      <section className="form-register">
      <h4>Formulario Registro</h4>
      <input className="controls" type="text" name="nombre" id="nombres" placeholder="Ingrese su Nombre" onChange={handleChange} value={values.nombre}  />


      <input className="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido"  onChange={handleChange} value={values.apellidos}/>


      <input className="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo"   onChange={handleChange} value={values.correo}/>


      <input className="controls" type="password" name="contra" id="correo" placeholder="Ingrese su Contraseña"  onChange={handleChange} value={values.contra} />


      <p> <a href="https://www.riotgames.com/es-419/terms-of-service-LATAM">Terminos y Condiciones</a></p>
      <br/>
      <input className="botons" type="submit" value={isSubmitting ? "Registrando" : "Registrar"} /> 
      <br/>
      <p><a href="/logUser">¿Ya tengo Cuenta?</a></p>
    </section>
    
      </Form>
)}
  </Formik>
  </>

  )

}
/*
  */

export default FormRegis

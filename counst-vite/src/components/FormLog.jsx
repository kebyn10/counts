import '../assets/style/style.css'
import {Form,Formik} from 'formik'
import { logUserRequest } from '../api/users.api'
import UserCookies from '../cookies/Usercookies'

 function FormLog() {
 

  return (
    <>
   <Formik
   initialValues={{
    correo:"",
    contra:""
   }}

onSubmit={async (values,actions)=>{
  try {
    const response=await logUserRequest(values)
    let respuesta=response.data;
 console.log(response);
 actions.resetForm()
 UserCookies(respuesta)
    
    window.location.href="./"
  
  } catch (error) {
    console.error(error)
    alert('correo o contraseña incorrectos')
  }
}}

   >




    {({handleSubmit,handleChange,values,isSubmitting})=>(
      <Form onSubmit={handleSubmit}>
         <section className="form-register">
    <h4>Formulario Inicio  de sesion</h4>
    <input className="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo" onChange={handleChange} value={values.correo} />
    <input className="controls" type="password" name="contra" id="correo" placeholder="Ingrese su Contraseña" onChange={handleChange} value={values.contra}  />
 
    <br/>
    <input className="botons" type="submit" value={isSubmitting ? "iniciando sesion" : "iniciar sesion"}/>
    <br/>
    <p><a href="/newUser">¿No tengo Cuenta?</a></p>
  </section>
      </Form>
    )}
   </Formik>
</>
  )
}

export default FormLog

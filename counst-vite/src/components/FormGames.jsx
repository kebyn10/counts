import '../assets/style/style.css'
import {Form,Formik} from 'formik'
import { newGameRequest } from '../api/games.api.js';










 function FormGames() {




  












  return (
  <>
  
  <Formik
  initialValues={{
    titulo:"",
    description:"",
    img:"",
   
  }}

onSubmit={ async(values,actions)=>{
  console.log(values);
 try {



  const response= await newGameRequest(values)
  console.log(response);
  actions.resetForm();
 } catch (error) {
  console.error(error)
 }
 
}}

  >
    
{({handleChange,handleSubmit,values,isSubmitting})=>(

      <Form  onSubmit={handleSubmit} >
    
      <section className="form-register">
      <h4>Crear un juego</h4>
      <input className="controls" type="text" name="titulo" id="nombres" placeholder="Ingrese el Nombre" onChange={handleChange} value={values.titulo}  />


      <textarea className="controls" type="text" name="description" id="apellidos" placeholder="Ingrese la descripcion"  onChange={handleChange} value={values.description}/>


      <input className='controls' type="file"  name="img" placeholder="Ingrese la imagen "  id='image'   onChange={handleChange} value={values.img}/>
    <progress value="0" id="barra" max="100"></progress>



      <br/>
      <input className="botons" type="submit" value={isSubmitting ? "Creando" : "Crear"} id="mandar" /> 
      <br/>
   
    </section>
    
      </Form>
)}
  </Formik>
  </>

  )

}
/*
  */

export default FormGames

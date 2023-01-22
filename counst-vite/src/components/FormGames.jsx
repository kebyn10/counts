import '../assets/style/style.css'
import {Form,Formik} from 'formik'
import { newGameRequest } from '../api/games.api.js';
import { useState } from 'react';










 function FormGames() {
  const [file,setFile]=useState(null)
  const [title,setTitle]=useState(null)
  const [des,setDes]=useState(null)
  const selectedHandler=(e)=>{
    setFile(e.target.files[0]);
        }

        const selectedTitle=(e)=>{
          let kk=document.getElementById('titulo').value
        setTitle(kk)
              }
              const selectedDescription=()=>{
                let kk=document.getElementById('description').value
                setDes(kk);
              
                    }

    const sendHandler=()=>{
          if(!file){
            alert('Debes selecionar un archivo de imagen')
          }else{
            const formdata=new FormData()
            formdata.append('titulo',title)
            formdata.append('description',des)
            formdata.append('image',file)
            
    
            fetch('http://localhost:4000/images/post',{
              method:'POST',
              body:formdata
            })
            .then(res=>res.text())
            .then(res=> console.log(res))
            .catch(err=>console.log(err))
          }
          document.getElementById('titulo').value=null
          document.getElementById('description').value=null
          document.getElementById('image').value=null
          setFile(null)
        }
return(

  
  <section className="form-register">
  <h4>Crear un juego</h4>
  <input className="controls" type="text"  id="titulo" placeholder="Ingrese el Nombre" onChange={selectedTitle} />


  <textarea className="controls" type="text"id="description" placeholder="Ingrese la descripcion" onChange={selectedDescription}/>


  <input className='controls' type="file"   placeholder="Ingrese la imagen "  id='image' onChange={selectedHandler}   />
<progress value="0" id="barra" max="100"></progress>



  <br/>
  <input className="botons" type="submit" id="mandar" onClick={sendHandler}/> 
  <br/>

</section>




)
  
    


     


 }

/*
  */

export default FormGames

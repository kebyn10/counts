
import React, { Fragment } from "react";
import { useState } from "react";


function Cloudinary() {

  const [file,setFile]=useState(null)
   const selectedHandler=(e)=>{
setFile(e.target.files[0]);
    }


    const sendHandler=()=>{
      if(!file){
        alert('Debes selecionar un archivo de imagen')
      }else{
        const formdata=new FormData()
        formdata.append('image',file)

        fetch('http://localhost:4000/images/post',{
          method:'POST',
          body:formdata
        })
        .then(res=>res.text())
        .then(res=> console.log(res))
        .catch(err=>console.log(err))
      }
      document.getElementById('input').value=null
      setFile(null)
    }

  return (
<Fragment>
  <div style={{background:"white",width: "50%",
	height: "50px"}}>
    <input id="input" onChange={selectedHandler} type='file'  />
    <button onClick={sendHandler}>enviar</button>

  </div>
</Fragment>
  )
}

export default Cloudinary
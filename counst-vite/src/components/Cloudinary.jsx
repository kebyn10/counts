
import axios from "axios";
import React, { Fragment } from "react";
import { useState,useEffect } from "react";


function Cloudinary() {
  const [image,setImage]=useState([])
  const [file,setFile]=useState(null)


 useEffect(()=>{


 async function loadImage() {
    const tt=await axios.get('http://localhost:4000/games/images')
setImage(tt.data)
  }
loadImage()

 })

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
    {
    image.map(img=>( <img src={"http://localhost:4000/"+img} key={"1"+img} />))
}
  </div>
</Fragment>
  )
}

export default Cloudinary
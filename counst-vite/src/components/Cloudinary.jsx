import React from "react";
import crl from "./NewImage";
import { useState } from "react";


function Cloudinary({setImages,Images}) {
  

  const [name,setName]=useState("")
  const[file,setFile]=useState()
const [pathImage,setPathImage]=useState ("")
const sendInmage=async(e)=>{
  e.preventDefault()
 const result= await crl.sendImages(name,file)
console.log("el resultado es ",result);
}

const onFile=(e)=>{
if(e.target.files && e.target.files.length >0){
  const file=e.target.files[0]
  if (file.type.includes('image')) {
    const reader=new FileReader()
    reader.readAsDataURL(file)

    reader.onload=function load() {
      setPathImage(reader.result)
    }
    setFile(file)
  }else{
    console.log("ocurrio un errer");
  }
}
}
  
  return (

<div>
<h1 style={{color:"white"}}>hola</h1>
<form >
<div style={{background:"white"}}>
<input type="file" placeholder="ingrese " onChange={onFile} />
<img style={{with:"200px",height:"300px"}} src={pathImage} alt="image"/>
<br/>
<input type="text" placeholder="name" onChange={(e)=>{
  setName(e.target.value)
}} />
<br/>
<button type="submit" style={{background:"red"}} onClick={sendInmage}>enviar</button>
</div>
</form>
</div>
  )
}

export default Cloudinary
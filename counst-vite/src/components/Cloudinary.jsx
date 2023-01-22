

import React, { Fragment } from "react";
import { useState,useEffect } from "react";
import { cargador } from "../assets/js/cargadorImagenes";

function Cloudinary() {
  const [file,setFile]=useState(null)
  const [games,setGames]=useState([])

 useEffect(()=>{

 async function termina() {
   const resp=await cargador()
   console.log("gg"+resp);
   setGames(resp)
  }

  termina()
  

 
 },[])

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
  {games.map(game=>(<div style={{background:"yellow"}}key={game.id} >
    <h3>{game.titulo} </h3>
    <img src={"http://localhost:4000/"+game.img}  />
    </div>))}


   </div> 
   



</Fragment>
  )
}

export default Cloudinary
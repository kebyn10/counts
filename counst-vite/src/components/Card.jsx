import lol from '../assets/images/league.jfif'
import { useEffect,useState } from 'react'
import { cargador } from "../assets/js/cargadorImagenes";

 function Card() {
    const [games,setGames]=useState([])

    useEffect(()=>{
   
    async function termina() {
      const resp=await cargador()
      console.log("gg"+resp);
      setGames(resp)
     }
   
     termina()
     
   
    
    },[])
  return (

    <>
    <h1 className='titleGames'>Juegos</h1>
    <div className="container" >{ 
    games.map(game=>(
       
        <div className="card"key={game.id}>
            <img src={"http://localhost:4000/"+game.img}/>
            <h4>{game.titulo}</h4>
            <p>
               {game.description}
                <br/>
                <button>ver mas</button>
            </p>
        </div>
    
    ))
}
</div>    

    
    </>
  )
}

export default Card
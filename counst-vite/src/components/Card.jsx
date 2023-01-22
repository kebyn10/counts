import lol from '../assets/images/league.jfif'
import { useEffect,useState } from 'react'
import { getGamesRequest } from '../api/games.api'

 function Card() {
    const [games,setGames]=useState([])

useEffect(()=>{
  async  function loadGames() {
     const response=await   getGamesRequest()
     setGames(response.data)
    }
    loadGames()
},[])

  return (

    <>
    <h1 className='titleGames'>Juegos</h1>
{
    games.map(game=>(
        <div className="container" key={game.id}>
        <div className="card">
            <img src={game.img}/>
            <h4>{game.titulo}</h4>
            <p>
               {game.description}
                <br/>
                <button>ver mas</button>
            </p>
        </div></div>
    
    ))
}
      

    
    </>
  )
}

export default Card
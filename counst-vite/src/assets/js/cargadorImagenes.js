import axios from "axios";
import { getGamesRequest } from "../../api/games.api";
export function cargador() {
 

    async  function loadGames() {
      const response=await   getGamesRequest()
    let juegos=  response.data
    
  
    const tt=await axios.get('http://localhost:4000/games/images')
    let imagen= tt.data
    for (let index = 0; index < juegos.length; index++) {
      juegos[index].img=imagen[index]
      
     
     }
     console.log(juegos);
     return juegos
     }
     
    return  loadGames()
    
  }
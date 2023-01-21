 import axios from "axios";


 export const getGamesRequest=async ()=>
 await axios.get('http://localhost:4000/games')


 export const newGameRequest=async (game)=>
 await axios.post('http://localhost:4000/games',game)


 export const newImage=async (image)=>
 await axios.post ('http://localhost:4000/games/image',image)
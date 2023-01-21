const Router=require('express').Router

const storage= ("../multer.js") ;
import multer from "multer";
const   pool =require ('../db.js');

const createGames=multer({storage})
const router =Router()

router.get('/games',getGames)
router.get('/games/:id',getGame)
router.delete('/games/:id',deleteGames)
router.put('/games/:id',updateGames)
router.put('/games/image',newImage)
router.post('/games',createGames.single('file'),async(req,res)=>{
    try {
    
       const {file,body}=req
    
    
       if (file && body) {
        const {titulo,description,img}=req.body
      img=`http://localhost:4000/${file.filename}`
        const [result]= await pool.query('INSERT INTO juegos(titulo,description,img) VALUES (?,?,?)',[titulo,description,img])
       
           res.json({ 
               id:result.insertId,
               titulo,
               description,
               img
           })
       }
    
    
    
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
    })




















export default router
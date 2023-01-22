const Router=require('express').Router
const control=require('../controllers/games.controllers')
const fileUpload=require('../multer/multer')
const pool=require('../db')
const fs=require('fs')
const path=require('path')



const router =Router()

router.get('/games',control.getGames)
router.get('/games/images',control.getImage)
router.get('/games/:id',control.getGame)
router.delete('/games/:id',control.deleteGames)
router.put('/games/:id',control.updateGames)





router.post('/images/post',fileUpload,async(req,res)=>{

  try{
  const type=req.file.mimetype
  const name=req.file.originalname
  const {titulo,description}=req.body
    const data=fs.readFileSync(path.join(__dirname,'../upload/' +req.file.filename))
    const [result]=await pool.query('INSERT INTO juegos(titulo,description,img) VALUES (?,?,?)',[titulo,description,data])
       res.json({
        id:result.insertId,
       titulo,
        description
    }) 
} catch (error) {
    return res.status(500).json({message:error.message});
}
})










module.exports=router
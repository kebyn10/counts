const Router=require('express').Router
const control=require('../controllers/games.controllers')
const fileUpload=require('../multer/multer')






const router =Router()

router.get('/games',control.getGames)
router.get('/games/:id',control.getGame)
router.delete('/games/:id',control.deleteGames)
router.put('/games/:id',control.updateGames)

router.post('/images/post',fileUpload,(req,res)=>{
    
})










module.exports=router
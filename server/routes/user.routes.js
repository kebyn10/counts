const Router=require('express').Router
const control=require('../controllers/users.controllers.js')


const router =Router();

router.get('/user/:id',control.getUser)
router.post('/user',control.createUser)
router.delete('/user/:id',control.deleteUser)
router.put('/user/:id',control.updateUser)
router.post('/user/login',control.loginUser)

  module.exports =router
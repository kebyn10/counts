import { Router } from "express";
import { getUser,createUser,deleteUser,updateUser,loginUser } from "../controllers/users.controllers.js";


const router =Router();

router.get('/user/:id',getUser)
router.post('/user',createUser)
router.delete('/user/:id',deleteUser)
router.put('/user/:id',updateUser)
router.post('/user/login',loginUser)

export default router
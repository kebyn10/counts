
import {pool} from '../db.js'

export const getUser=async(req,res)=>{
    try {
        const [result]=await pool.query("SELECT * FROM users WHERE  correo=?",[req.params.id])
        if (result.length===0) {
            return res.status(404).json({message:'Not found'})
        }
         res.json(result[0])
    } catch (error) {
        return res.status(500).json({message:error.message});
    }

}
export const createUser =async(req,res)=>{
    try {
       const {nombre,apellidos,correo,contra}=req.body
       const [result]=await pool.query('INSERT INTO users(nombre,apellidos,correo,contra) VALUES (?,?,?,?)',[nombre,apellidos,correo,contra])
       res.json({
        nombre,
        apellidos,
        correo
    }) 
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const deleteUser=async(req,res)=>{
try {
    const [result]=await pool.query('DELETE FROM users WHERE  correo=?',[req.params.id])
    if (result.affectedRows===0) {
        return res.status(404).json({message:"Not found"})
        
    }
    return res.sendStatus(204)
} catch (error) {
    return res.status(500).json({message:error.message});  
}
}

export const updateUser=async(req,res)=>{
    try {
        const result=await pool.query('UPDATE users SET ? WHERE correo=?',[req.body,req.params.id])
        res.json(result)
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
}

export const loginUser=async (req,res)=>{
    try {
        const {correo,contra}=req.body
        const [result] =await pool.query('SELECT * FROM users WHERE correo=? AND contra=?',[correo,contra])
        if (result.length>0) {
           const info=result[0];
           
           res.json(info)

          
         
        }else{
            alert('no es correcto ')
        }
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
}

/*
app.get('/setCookie',(req,res)=>{
    res.cookie('my cookie','my cookie jeje'),{
        maxAge:10000  ,
        httpOnly:true,
        secure:true,

    }
})

app.get('/get',(req,res)=>{
    console.log(req.cookies);
    res.clearCookie('my cookie')
})*/
const pool=require('../db.js')
const fs=require('fs')
const path=require('path')



const control={}
control.getGames=async(req,res)=>{

try {



    const [result]=await pool.query("SELECT * FROM juegos ORDER BY id ASC");

      res.json(result)  
    }
catch (error) {
    return res.status(500).json({menssage:error.menssage});
}
}

control.getGame=async(req,res)=>{
try {
    const [result]=await pool.query("SELECT * FROM juegos WHERE id=?",[req.params.id])
    if (result.length===0) {
       return res.status(404).json({message:"Not found"})
    }
    res.json(result)
} catch (error) {
    return res.status(500).json({message:error.message});
}
}





control.getImage=async(req,res)=>{

try {



    const [result]=await pool.query("SELECT * FROM juegos ORDER BY id ASC");

    result.map(img=>{
        fs.writeFileSync(path.join(__dirname,'../dbImages/'+img.id+'-ZED.png'),img.img)
        
    }
     
    )

    const imagesdir=fs.readdirSync(path.join(__dirname,'../dbImages/'))
    res.json(imagesdir)
    
  
} catch (error) {
    return res.status(500).json({menssage:error.menssage});
}
}

control.getGame=async(req,res)=>{
try {
    const [result]=await pool.query("SELECT * FROM juegos WHERE id=?",[req.params.id])
    if (result.length===0) {
       return res.status(404).json({message:"Not found"})
    }
    res.json(result)
} catch (error) {
    return res.status(500).json({message:error.message});
}
}












control.updateGames=async(req,res)=>{
 
try {
    const result=  await pool.query("UPDATE juegos SET ? WHERE id=?",[req.body,req.params.id,])

    res.json(result)
} catch (error) {
    return res.status(500).json({message:error.message}); 
}
}


control.newImage=(req,res)=>{
    console.log(req.file);
} 


control.deleteGames=async(req,res)=>{
try {
    const [result]=await pool.query("DELETE FROM juegos WHERE id=?",[req.params.id])
    if (result.affectedRows===0) {
      return res.status(404).json({message:"Not found"})
    }
    return res.sendStatus(204)
} catch (error) {
    return res.status(500).json({message:error.message}); 
}
}















module.exports=control
import axios from "axios"

const enlace="https://api.cloudinary.com/v1_1/dqrwt5fo7"
const contraseña="ml_default"
const resultado=""
function gameImagen(file) {
    image.addEventListener('change',async(e)=>{
        const file= e.target.files[0]
        const formData=new FormData();
        formData.append('file',file)
        formData.append('upload_preset',contraseña)
        const res=await  axios.post(enlace,formData,{
        
           /* onUploadProgress(e){
                let progress=(e.loaded *100)/ e.total;
                barra.setAttribute('value',progress)
            }*/
          })
          resultado=res.data.secure_url;

console.log(resultado);

       })
       return resultado
}
/*
 const [name,setName]=useState("")
  const [des,setDes]=useState("")
  const[file,setFile]=useState()
const [pathImage,setPathImage]=useState ("")
const onFile=(e)=>{
if(e.target.files && e.target.files.length >0){
  const file=e.target.files[0]
  if (file.type.includes('image')) {
    const reader=new FileReader()
    reader.readAsDataURL(file)

    reader.onload=function load() {
      setPathImage(reader.result)
      console.log(reader.result);
    }
    setFile(file)
  }else{
    console.log("ocurrio un error");
  }
}
}*/


export default gameImagen
import axios from 'axios'




export const sendImages=(name,file,description)=>{
    const form=new FormData();
    form.append('name',name)
    form.append('file',file,'form-data')
    form.append('description',description)

    return axios.post('http://localhost:4000/games',form)
}




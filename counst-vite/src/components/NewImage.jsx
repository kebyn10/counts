import axios from 'axios'
import API from '../assets/js/consts'
const crl={}
crl.getImages=()=>{
return axios.get(`${API.URL}/games`)
}

crl.sendImages=(name,file)=>{
    const form=new FormData();
    form.append('name',name)
    form.append('file',file,'form-data')

    return axios.post(`${API.URL}/games`,form)
}



export default crl
import Cookies from 'universal-cookie'


const cookies=new Cookies();
function UserCookies(respuesta) {
    if (respuesta) {
        const info=respuesta
        cookies.set('correo',info.correo,{path:"/"})
        cookies.set('nombre',info.nombre,{path:"/"})
        cookies.set('apellidos',info.apellidos,{path:"/"})
        alert(`bienvenido a zedGames ${info.nombre}`)
      }
}


export const cerrarSesion=()=>{
cookies.remove('nombre',{path:"/"})
cookies.remove('apellidos',{path:"/"})
cookies.remove('correo',{path:"/"})

}


export default UserCookies
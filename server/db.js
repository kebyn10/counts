const createPool=require('mysql2/promise').createPool



const pool=createPool({
 host:'localhost',
 port:3306,
 password:'',
 user:'root',
 database:'cuentas'

})

module.exports=pool

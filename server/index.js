const  express=require ('express')
const cors=require('cors')

const gamesRoutes= require('./routes/games.routes.js') 
const  usersRoutes=require ('./routes/user.routes.js')
const path=require('path')




const app=express();
const PORT=4000;
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(gamesRoutes)
app.use(usersRoutes)
app.use(express.static(path.join(__dirname,'/upload')))

app.listen(PORT)
console.log(`server is running on port ${PORT}`);

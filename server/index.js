const  express=require('express')
const cors=require('cors')
const path=require('path')




const app=express();
const PORT=4000;
app.use(cors())



app.use(express.json())


app.use(express.static(path.join(__dirname,'dbImages')))
app.use('/',require('./routes/games.routes'))
app.use('/',require('./routes/user.routes'))



app.listen(PORT)
console.log(`server is running on port ${PORT}`);

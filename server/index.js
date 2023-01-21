const  express=require('express')
const cors=require('cors')





const app=express();
const PORT=4000;
app.use(cors())


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/',require('./routes/games.routes'))
app.use('/',require('./routes/user.routes'))



app.listen(PORT)
console.log(`server is running on port ${PORT}`);

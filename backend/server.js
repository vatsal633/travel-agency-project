import express from 'express'
import userAuthroute from "./routes/userAuth.js"
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'
const app = express()
const port = process.env.PORT || 8080; // Use environment variable for PORT

app.use(cors())
app.use(express.json())
app.use('/api/auth',userAuthroute)

//connecting to database
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/user_data'; // Use 127.0.0.1 instead of localhost


mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(' Database connected'))
.catch((err) => console.error(' Error connecting to database:', err))

app.get('/',(req,res)=>{
    res.send("hello world")
})


app.get('/about',(req,res)=>{
    res.send("this is about")
})


app.listen(port,()=>{
    console.log(`server listen on this port ${port}`)
})
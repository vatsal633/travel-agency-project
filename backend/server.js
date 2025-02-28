import express from 'express'
import userAuthroute from "./routes/userAuth.js"
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'
const app = express()
const port = process.env.port || 3000 

app.use(cors())
app.use('/api/auth',userAuthroute)
app.use(express.json())

//connecting to database

mongoose.connect(process.env.MONGO_URI, 'mongodb://localhost:27017/login', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log(' Database connected'))
.catch((err) => console.error(' Error connecting to database:', err))

app.post('/',(req,res)=>{
    res.send("hello world")
})


app.get('/about',(req,res)=>{
    res.send("this is about")
})


app.listen(port,()=>{
    console.log(`server listen on this port ${port}`)
})
import express from 'express'
import userAuthroute from "./routes/userAuth.js"
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'
import bookingroutes from './routes/bookingroutes.js'
import packageroutes from "./routes/packageroutes.js"
import flightrouter from "./routes/flightroutes.js"
import hotelroutes from "./routes/hotelroutes.js"
import carrouter from "./routes/carrouter.js"
const app = express()

const port = process.env.PORT || 8080; // Use environment variable for 

//middleware
app.use(cors())
app.use(express.json())




//rotues
app.use('/api/auth', userAuthroute)
app.use('/api', bookingroutes)//route for bus book
app.use('/package',packageroutes)
app.use('/flight',flightrouter)
app.use("/hotel",hotelroutes)
app.use("/car",carrouter)


//connecting to database


app.get('/', (req, res) => {
    res.send("hello world")
})


app.get('/about', (req, res) => {
    res.send("this is about")
})


app.listen(port, () => {
    console.log(`server listen on this port ${port}`)
})
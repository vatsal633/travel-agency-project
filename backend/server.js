import express from 'express'
import userAuthroute from "./routes/userAuth.js"
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'
import bookingroutes from './routes/bookingroutes.js'
const app = express()

const port = process.env.PORT || 8080; // Use environment variable for 
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/user_data'; // Use 127.0.0.1 instead of localhost

//middleware
app.use(cors())
app.use(express.json())

//database connections

const logindb = mongoose.createConnection(MONGO_URI || 'mongodb://127.0.0.1:27017/user_data', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
logindb.on('connected', () => console.log('✅ Login Database connected'));
logindb.on('error', (err) => console.error('❌ Error connecting to login database:', err));



const bookingdb = mongoose.createConnection(MONGO_URI || 'mongodb://127.0.0.1:27017/booking_database',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
bookingdb.on('connected', () => console.log('✅ booking Database connected'));
bookingdb.on('error', (err) => console.error('❌ Error connecting to login database:', err));

//rotues
app.use('/api/auth', userAuthroute)
app.use('/api', bookingroutes)


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
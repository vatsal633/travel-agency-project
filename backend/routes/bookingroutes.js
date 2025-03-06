import express from "express"
import booking from "../models/booking.js"


const router = express.Router()

router.post('/:name/book',(req,res)=>{
    let name = req.params.name
    res.json({message:`${name}`})
    
})  

export default router;





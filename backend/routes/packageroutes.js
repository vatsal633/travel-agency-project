import mongoose from "mongoose";
import express from 'express';
import {packages}  from "../models/packages.js";

const router = express.Router()

// mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/package',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(()=>console.log("package database connected successfully"))
// .catch((err)=>console.log("error while connecting package database",err))

//route for adding a new package
router.post('/add-package',async(req,res)=>{
    try{
        const {name,located,price,image} = req.body
        const new_package = new packages({name,located,price,image})
        await new_package.save()
        
    }catch(err){
        res.status(500).json({message:"error while updating package"})
    }
})


//route for getting info about package

router.get('/get-package',async(req,res)=>{
    try{
        const Package = await packages.find();
        res.send(Package)
    }catch(err){
        res.status(500).json({message:"facing error while fetching details"})
    }
})


export default router
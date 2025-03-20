import express from "express"
import adminModel from "../models/adminModel.js"

const router = express.Router()

router.post('/login',async (req,res)=>{
    try{
        const {username,password} = req.body

        let user = await adminModel.findOne({username})

        if(!user){
            res.status(202).json({message:"admin not found"})
        }

        else{
            res.status(200).json({message:"admin found"})
        }
    } catch (err) {
        console.error("Error fetch admin login details:", err);
        res.status(500).json({ error: "Internal server error" });
    }
})

export default router
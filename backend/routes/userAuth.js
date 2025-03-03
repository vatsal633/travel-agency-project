import express from 'express'
import Data  from '../models/Login.js';
const router = express.Router();



//get req for login
router.post('/register', async (req, res) => {
    try{    
        const {username,email,password} = req.body

        const newdata = new Data({username,email,password})
        await newdata.save()
        res.status(201).json({ message: "Data inserted successfully", data: newdata });

    }catch(error){
        console.log("error while storing the data",error)
        res.status(500).json({ error: error.message });
    }
})


export default router;

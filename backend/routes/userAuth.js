import express from 'express'
import Data from '../models/Login.js';
const router = express.Router();



//get req for register
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body


        const existingUser = await Data.findOne({ $or: [{ email }, { username }] });

        if (existingUser) {
            return res.status(400).json({ message: "Email or Username already exists" });
        }

        const newdata = new Data({ username, email, password })
        await newdata.save()
        res.status(201).json({ message: "Data inserted successfully", data: newdata });


    } catch (error) {
        console.log("error while storing the data", error)
        res.status(500).json({ error: error.message });
    }
})

//post request for login 
router.post('/login', async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = Data.findOne({ email })
        console.log(user)


        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if(user.email!=email){
            return res.status(400).json({message:"Invalid email"})
        }

        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: error.message });
    }

    console.log(user)
})


export default router;

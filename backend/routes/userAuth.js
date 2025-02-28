import express from 'express'
import Login  from '../models/Login.js';
const router = express.Router();



//get req for login
router.post('/register', async (req, res) => {
    try{

        const { name, email, password } = {name:"vatsal",email:"vatrsal@gmail.com",password:"vatsal.123"};
        console.log(" Registering user:", name);
        
        const existing_user = await Login.findOne({ name: { $regex: new RegExp(`^${name}$`, 'i') } }); // Case-insensitive search
        
        if(existing_user){
            console.log(" User already exists");
            return res.status(400).json({ message: 'User already exists' });
        }
        
        const newUser = new Login({ name, email, password });
        await newUser.save();
    }catch(err){
        console.error(" Server error:", err);
        res.status(500).json({ message: 'Server Error', error: err });
    }   
})


export default router;

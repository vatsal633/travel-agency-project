import TrainBooking from "../models/TrainBooking.js";
import express from 'express'

const router = express.Router()

router.post('/book', async (req, res) => {
    try {
        console.log("Incoming Booking Data:", req.body); // Log the request body
        
        const newBooking = new TrainBooking(req.body);
        await newBooking.save();
        
        res.status(201).json({ message: "Booking Successful ✅", data: newBooking });
    } catch (error) {
        console.error("Booking Error:", error);
        res.status(500).json({ message: "Internal Server Error ❌" });
    }
});


export default router
import express from "express"
import booking from "../models/booking.js"
import mongoose from "mongoose"


const router = express.Router()

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bus_booking',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{console.log("bus booking database connected")})
.catch((err)=>{console.log("error while connecting bus booking database",err)})

router.post('/book', async (req, res) => {
    try {
        const { name, email, phone, route, date, passengers, totalPrice, paymentMethod } = req.body
        const newBooking = new booking({ name, email, phone, route, date, passengers, totalPrice, paymentMethod });
        await newBooking.save();
        res.status(201).json({ message: "Booking successful", booking: newBooking });

    } catch (err) {
        console.error("Error creating booking:", err);
        res.status(500).json({ error: "Internal server error" });
    }

})

export default router;
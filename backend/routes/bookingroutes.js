import express from "express"
import booking from "../models/booking.js"


const router = express.Router()

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
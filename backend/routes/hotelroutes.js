import express from "express";
import HotelBooking from "../models/hotelmodel.js"; // Correct import

const router = express.Router();

router.post("/add", async (req, res) => {
    try {
        const {
            email, checkin_date, checkout_date, adults, kids, room_type, special_requests
        } = req.body;

        // Create a new hotel booking
        const newBooking = new HotelBooking({
            email,
            checkin_date,
            checkout_date,
            adults,
            kids,
            room_type,
            special_requests
        });

        // Save to MongoDB
        await newBooking.save();
        res.status(201).json({ success: true, message: "Hotel booked successfully!", booking: newBooking });

    } catch (error) {
        console.error("Error Saving Hotel Booking:", error);
        res.status(500).json({ success: false, message: "Server error! Could not book hotel." });
    }
});

export default router;

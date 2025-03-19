import express from "express"
const router = express.Router();
import carmodel from "../models/carmodel.js";

router.post("/book", async (req, res) => {
    try {
        const new_booking = new carmodel(req.body);
        await new_booking.save();
        res.status(201).json({ message: "Cab booked successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error booking cab", error });
    }
});


router.get("/:contact_number/getbooking", async (req, res) => {
    try {
        const { contact_number } = req.params;
        const booking = await carmodel.findOne({contact_number});

        if (!booking) {
            return res.status(404).json({ error: "Booking not found" });
        }

        res.json(booking);
    } catch (err) {
        res.status(500).json({ error: "Error fetching booking details" });
    }
});

export default router

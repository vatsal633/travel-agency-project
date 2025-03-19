import mongoose from "mongoose";
import { flightmodel } from "../models/flightmodel.js";
import express from "express"


mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/user_data", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(" database connected successfully"))
    .catch((err) => console.log("error while connecting database", err))

const router = express.Router()

router.post("/add", async (req, res) => {
    try {
        const {
            email, from, to, departure_date, return_date, passengers,
            payment, extra_luggage, meal, window_seat, comments
        } = req.body;

        // Create a new flight booking
        const newFlight = new flightmodel({
            email,
            from,
            to,
            departure_date,
            return_date,
            passengers,
            payment,
            extra_luggage,
            meal,
            window_seat,
            comments
        });

        await newFlight.save();

    } catch (error) {
        console.error("Error Saving Flight:", error);
        res.status(500).json({ success: false, message: "Server error! Could not book flight." });
    }
});

export default router
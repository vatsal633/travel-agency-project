import mongoose from "mongoose";

const trainBookingSchema = new mongoose.Schema({
    departureDate: {
        type: String,
        required: true
    },
    sourceStation: {
        type: String,
        required: true
    },
    destinationStation: {
        type: String,
        required: true
    },
    trainClass: {
        type: String,
        required: true,
        enum: ["sleeper", "3-tier", "2-tier", "1-tier"] // Allowed values
    },
    passengerName: {
        type: String,
        required: true,
        trim: true
    },
    passengerEmail: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    passengerPhone: {
        type: String,
        required: true,
        trim: true,
        match: /^[0-9]{10}$/ // Ensures only a 10-digit phone number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const TrainBooking = mongoose.model("TrainBooking", trainBookingSchema);
export default TrainBooking

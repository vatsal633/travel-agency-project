import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    email: { type: String, required: true },
    checkin_date: { type: Date, required: true },
    checkout_date: { type: Date, required: true },
    adults: { type: Number, required: true },
    kids: { type: Number, required: true, default: 0 },
    room_type: { type: String, enum: ["single", "double", "suite"], required: true },
    special_requests: { type: String, default: "" }
});


const HotelBooking = mongoose.model("HotelBookings", hotelSchema);
export default HotelBooking;

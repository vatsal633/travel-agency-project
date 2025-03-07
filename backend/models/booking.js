import mongoose from "mongoose";

const  bookingschema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },  // Changed from Number to String
    route: { type: String, required: true },
    date: { type: Date, required: true },  // Ensures proper Date format
    passengers: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    paymentMethod: { type: String, required: true }
})

const booking = mongoose.model('bus_bookings', bookingschema);
export default booking;
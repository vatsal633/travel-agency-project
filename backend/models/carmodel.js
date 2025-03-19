import mongoose from "mongoose"

const CabBookingSchema = new mongoose.Schema({
    pickup_location: { type: String, required: true },
    state: { type: String },
    drop_location: { type: String, required: true },
    pickup_time: { type: String, required: true },
    service_type: { type: String, required: true },
    vehicle_type: { type: String, required: true },
    passengers: { type: Number, required: true },
    contact_number: { type: String, required: true },
    driver_gender: { type: String, default: "any" },
    payment_method: { type: String, required: true },
    luggage_space: { type: String },
    fuel_type: { type: String },
    car_preferences: { type: String }
});
const carmodel =  mongoose.model("CabBooking", CabBookingSchema);
export default carmodel

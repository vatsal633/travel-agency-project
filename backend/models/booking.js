/*port mongoose from "mongoose";

const  bookingschema = mongoose.Schema({
    first_name:String,
    email:String,
    mobile_num:Number,
    payment:Number
})

const  booking = mongoose.model('bus_bookings', bookingschema);
export default booking;
*/




const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    route: String,
    date: String,
    passengers: Number,
    bus: String,
    totalPrice: Number,
    paymentMethod: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);
 

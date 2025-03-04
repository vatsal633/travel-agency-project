import mongoose from "mongoose";

const  bookingschema = mongoose.Schema({
    name:String,
    email:String,
    mode:String,
    payment:Number
})


export const booking  = mongoose.model('bookings',bookingschema)
import mongoose from "mongoose";

const  bookingschema = mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    mobile_num:Number,
    mode:String,
    payment:Number
})


export const booking  = mongoose.model('bookings',bookingschema)
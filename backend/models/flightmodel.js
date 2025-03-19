import mongoose from "mongoose"

const flightschema = mongoose.Schema({
    email: { type: String, required: true }, 
    from: { type: String, required: true },
    to: { type: String, required: true },
    departure_date: { type: Date, required: true },  
    return_date: { type: Date }, 
    passengers: { type: Number, required: true },
    payment: { type: String, enum: ["credit", "debit", "cash"], required: true },  
    extra_luggage: { type: Boolean, default: false },
    meal: { type: Boolean, default: false },
    window_seat: { type: Boolean, default: false },
    comments: { type: String, default: "" }
    
})


export const flightmodel = mongoose.model("flightsdb",flightschema)
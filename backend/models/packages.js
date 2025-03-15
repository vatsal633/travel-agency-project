import mongoose from "mongoose";


const packageSchema = mongoose.Schema({
    name:String,
    located:String,
    price:Number
})

export const packages = mongoose.model('packages',packageSchema)
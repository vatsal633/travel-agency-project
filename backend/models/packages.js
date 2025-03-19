import mongoose from "mongoose";


const packageSchema = mongoose.Schema({
    name:String,
    located:String,
    price:Number,
    image:String
})

export const packages = mongoose.model('packages',packageSchema)
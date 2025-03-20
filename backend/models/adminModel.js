import mongoose from "mongoose"

const adminSchema = mongoose.Schema({
    username:String,
    password:String,
})

const adminModel = mongoose.model("admin_data",adminSchema)
export default adminModel
import mongoose from "mongoose";


const loginschema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
})

const Login = mongoose.model('datas', loginschema) // Force 'logins'

export default Login;
import mongoose from "mongoose";


const loginschema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const Login = mongoose.model('Login', loginschema, 'logins'); // Force 'logins'

export default Login;
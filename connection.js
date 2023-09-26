const mongoose = require('mongoose');
const dotenv = require("dotenv");
const {Schema, model} = mongoose;
dotenv.config({path: "./config.env"})

const password = encodeURIComponent(process.env.PASSWORD);
const ATLAS_URL = process.env.ATLAS_DB.replace("<PASSWORD>",password);

mongoose.connect(ATLAS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("DB connection successfull"));

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

const User = model("users",userSchema)

module.exports = User;


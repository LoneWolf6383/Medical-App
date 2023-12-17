const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        Name: { type: String, required: true, unique: true },
        Email: { type: String, required: true },
        Address: { type: String, required: true },
        Age: { type: String, required: true },
        City: { type: String, required: true },
        Gender: { type: String, required: true },
        Pincode: { type: String, required: true },
        Lungcancer:{type:String},
        Heartdisease:{type:String},
        Diabetes:{type:String},
        Hypothyroid:{type:String},
    },
    {
        collection:'userInfo'
    }
)
const User = mongoose.model('user', userSchema)
module.exports = {User}
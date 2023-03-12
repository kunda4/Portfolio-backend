import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    FullName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    isAdmin: {
        type: Boolean,
        required: true
    }
})
const User = mongoose.model('User', userSchema);

export default User;
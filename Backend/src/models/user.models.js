import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    role : {
        type: ['admin', 'seller'],
        default: "seller"
    }
});


export default mongoose.model("User", userSchema)
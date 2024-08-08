import mongoose from "mongoose";

const {Schema} = mongoose;

const newOwnerSchema = new Schema({
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
    phone: {
        type: Number,
        required: true
    },
    identification: {
        type: String,
        required: true
    },
    numberidentification: {
        type: Number,
        required: true
    },
    propertyrent: {
        type: Schema.Types.ObjectId,
        ref: "PropertySale",
        default: null
    }
});

export default mongoose.model("NewOwner", newOwnerSchema)
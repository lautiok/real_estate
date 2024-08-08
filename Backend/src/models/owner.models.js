import mongoose from "mongoose";

const {Schema} = mongoose;

const ownerSchema =  new Schema({
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
    propeties : {
        type: [Schema.Types.ObjectId],
        ref: "PropertyRent | PropertySale",
        default: []
    }
})

export default mongoose.model("Owner", ownerSchema)
import mongoose from "mongoose";

const {Schema} = mongoose;

const propertySaleSchema = new Schema({
    type : {
        type: String,
        default: "sale",  
    },
    direccion: {
        type: String,
        required: true
    },
    localidad: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    provincia: {
        type: String,
        required: true
    },
    mcuadrados: {
        type: Number,
        required: true
    },
    ambientes: {
        type: Number,
        required: true
    },
    dormitorios: {
        type: Number,
        required: true
    },
    banos: {
        type: Number,
        required: true
    },
    contacto: {
        type: Number,
        required: true
    },
    propertyType : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    owner : {
        type: Schema.Types.ObjectId,
        ref: "Owner",
        required: true
    },
    buyers : {
        type: Schema.Types.ObjectId,
        ref: "Buyers",
        default: null
    },
    images : [{
        url : String,
        public_id : String,
    }],
    status : {
        type: Boolean,
        default: "true",
        required: true
    },
})


export default mongoose.model("PropertySale", propertySaleSchema);
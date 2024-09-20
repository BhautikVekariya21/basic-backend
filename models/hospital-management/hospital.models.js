import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2:{
        type: String,
    },
    city:{
        type: String,
        required: true
    },
    pincode:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    }],
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }],
    specialzedIn:[
        {
            type: String,
            required: true
        }
    ],
    facilities: [{
        type: String,
        required: true
    }],
},
    {timestamps: true}
);

export const Hospital = mongoose.model('Hospital', hospitalSchema);
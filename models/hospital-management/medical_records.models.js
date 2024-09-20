import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    },
    treatmentPlan: {
        type: String,
        required: true
    },
    prescribedMedications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medication'
    }]
},{timestamps:true});

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);
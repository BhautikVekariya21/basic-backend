import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    diagnosis: { type: String, required: true },
    treatmentPlan: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    medicalHistory: { type: String, required: true },
    allergies: { type: String, required: true },
    medications: { type: String, required: true },
    familyHistory: { type: String, required: true },
    symptoms: { type: String, required: true },
    vitalSigns: { type: String, required: true },
    observations: { type: String, required: true },
    prescriptions: { type: String, required: true },
    consultations: { type: String, required: true },
    diagnosisDate: { type: Date, required: true },
    nextVisitDate: { type: Date, required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    bloodGroup :{
        type: String,
        required: true,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    smokingStatus: { type: String, required: true },
    alcoholStatus: { type: String, required: true },
    bloodPressure: { type: String, required: true },
    diabetes: { type: String, required: true },
    hypertension: { type: String, required: true },
    chronicDiseases: { type: String, required: true },
    immunosuppressive: { type: String, required: true },
    medications: { type: String, required: true },
    familyHistory: { type: String, required: true },
    medications: { type: String, required: true },
    familyHistory: { type: String, required: true },
    symptoms: { type: String, required: true },
    vitalSigns: { type: String, required: true },
});

export default mongoose.model('Patient', patientSchema);
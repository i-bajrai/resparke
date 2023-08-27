import mongoose from 'mongoose';

const residentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    email: { type: String, required: true },
    roomNumber: { type: Number, required: true },
    countryOfBirth: { type: String, required: true },
});

const Resident = mongoose.model('Resident', residentSchema);

export default Resident;

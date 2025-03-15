const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true },
    jobCategory: { type: String, required: true },
    jobDescription: { type: String, required: true },
    budget: { type: Number, required: true },
    location: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);

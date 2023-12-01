const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    name: {
     firstname: {
        type: String, 
        required: true,
        trim: true
     },
     lastname: {
        type: String,
        required: true,
        trim: true
     }
    },

    gender: {
        type: String,
        enum: ['Male', 'Female', 'Non-binary', 'Prefer not to say', 'Other']
    },

    dataOfBirth: {
        type: Date
    },

    company: {
        type: String,
        required: false
    }
})
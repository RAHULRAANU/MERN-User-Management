// import mongoose from "mongoose";
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
    type: String,
    required: [true, "please add a name"],
    match: /^[a-zA-Z\s]+$/, // Alphabets only
    },

    email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    // match: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, // Alphanumeric only
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
    },

    phone: {
        type: String,
        required: [true, "please add phone number"],
        match: /^[0-9]+$/, // Number only
    },

    gender: {
        type: String,
        enum: ['Male', 'Female', 'Others'],
        required: [true, "Select Gender"]
    },

    howDidYouHear: {
        type: [String],
        enum: ['LinkedIn', 'Friends', 'Job Portal', 'Others'],
        required: true,
    },

    city: {
        type: String,
        enum: ['Mumbai', 'Pune', 'Ahmadabad'],
        required: true,
    },

    state: {
        type: String,
        enum: ['Gujarat', 'Maharashtra', 'Karnataka'],
        required: true,
    },

    password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false
    }

    });

    const userDetails = mongoose.model('User', userSchema);

    module.exports = userDetails;

    // export default userDetails;


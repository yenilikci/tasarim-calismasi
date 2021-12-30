const mongoose = require('mongoose');

const commandSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    m1: {
        type: Number,
        required: true,
    },
    m2: {
        type: Number,
        required: true
    },
    m3: {
        type: Number,
        required: true
    },
    m4: {
        type: Number,
        required: true
    },
    m5: {
        type: Number,
        required: true,
    },
    m6: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
}, {
    timestamps: true
});

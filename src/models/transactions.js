const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    payer: {
        type: String,
        required: true,
        lowercase: true
    },
    points: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
});

exports.TransactionModel = mongoose.model('Transaction', transactionSchema);
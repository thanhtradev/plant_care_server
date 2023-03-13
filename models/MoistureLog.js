const mongoose = require('mongoose');

const MoistureLog = new mongoose.Schema({
    moisture: {
        type: Number,
        required: true
    },
    plant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plant',
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now(),
        required: true
    }
});

module.exports = mongoose.model('MoistureLog', MoistureLog);
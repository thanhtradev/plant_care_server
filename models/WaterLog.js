// This log for watering a plant is created in the waterPlant method in the plantController.js file.

const mongoose = require('mongoose');

const WaterLog = mongoose.Schema({
    plant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plant',
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now(),
        required: true
    },
    duration: {
        type: Number,
        // required: true
    }
});

module.exports = mongoose.model('WaterLog', WaterLog);

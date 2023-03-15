const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  moistureThreshold: {
    type: Number,
    required: true
  },
  lastWateredAt: {
    type: Date,
    // default: Date.now()
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
});

module.exports = mongoose.model('Plant', PlantSchema);

const {
    default: mongoose
} = require('mongoose');
const MoistureLog = require('../models/MoistureLog');

module.exports = {
    getMoistureLogByPlantId: async (plantId) => {
        const moistureLog = await MoistureLog.find({
            plant: new mongoose.Types.ObjectId(plantId)
        });
        return moistureLog;
    }
};
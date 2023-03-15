const WaterLog = require('../models/WaterLog');

module.exports = {
    waterPlant: async (plant) => {
        plant.lastWateredAt = Date.now();
        await plant.save();
    },

    createWaterLog: async (plantId, duration) => {
        const waterLog = new WaterLog({
            plant: plantId,
            duration: duration
        });
        const savedWaterLog = await waterLog.save();
        return savedWaterLog;
    },
}
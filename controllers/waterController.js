const waterService = require('../services/waterService');
const plantService = require('../services/plantService');
const mqttClient = require('../config/mqtt');


module.exports = {
    waterPlant: async (req, res) => {
        try {
          const plant = await plantService.getPlantById(req.params.id);
          if (!plant) {
            return res.status(404).json({
              error: 'Plant not found'
            });
          }
          // do watering action
          await waterService.waterPlant(plant);
    
          // create the water log for the plant
          await waterService.createWaterLog(plant.id);
    
          // create the payload for the mqtt message
          let payload = {
            command: "on",
            duration: 10
          }
          // publish the action via mqtt 
          mqttClient.publish(`plant/${plant.id}/water_pump/control`, JSON.stringify(payload));
    
          await plantService.updatePlant(req.params.id, {
            lastWateredAt: Date.now()
          });
    
          res.status(200).json({
            message: 'Plant watered'
          });
        } catch (err) {
          res.status(500).json({
            error: err.message
          });
        }
      }
}
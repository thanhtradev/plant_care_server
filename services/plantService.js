const Plant = require('../models/Plant');
const WaterLog = require('../models/WaterLog');

module.exports = {
  getAllPlants: async () => {
    const plants = await Plant.find();
    return plants;
  },

  createPlant: async (plantData) => {
    const newPlant = new Plant(plantData);
    const savedPlant = await newPlant.save();
    return savedPlant;
  },

  getPlantById: async (plantId) => {
    const plant = await Plant.findById(plantId);
    return plant;
  },

  updatePlant: async (plantId, plantData) => {
    const updatedPlant = await Plant.findByIdAndUpdate(plantId, plantData, {
      new: true
    });
    return updatedPlant;
  },

  deletePlant: async (plantId) => {
    const deletedPlant = await Plant.findByIdAndDelete(plantId);
    return deletedPlant;
  },

};
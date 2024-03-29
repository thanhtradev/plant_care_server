const plantService = require('../services/plantService');
const mqttClient = require('../config/mqtt');

module.exports = {
  getAllPlants: async (req, res) => {
    try {
      const plants = await plantService.getAllPlants();
      res.status(200).json(plants);
    } catch (err) {
      res.status(500).json({
        error: err.message
      });
    }
  },

  createPlant: async (req, res) => {
    try {
      const newPlant = await plantService.createPlant(req.body);
      res.status(201).json(newPlant);
    } catch (err) {
      res.status(500).json({
        error: err.message
      });
    }
  },

  getPlantById: async (req, res) => {
    try {
      const plant = await plantService.getPlantById(req.params.id);
      if (!plant) {
        return res.status(404).json({
          error: 'Plant not found'
        });
      }
      res.status(200).json(plant);
    } catch (err) {
      res.status(500).json({
        error: err.message
      });
    }
  },

  updatePlant: async (req, res) => {
    try {
      const updatedPlant = await plantService.updatePlant(req.params.id, req.body);
      if (!updatedPlant) {
        return res.status(404).json({
          error: 'Plant not found'
        });
      }
      res.status(200).json(updatedPlant);
    } catch (err) {
      res.status(500).json({
        error: err.message
      });
    }
  },

  deletePlant: async (req, res) => {
    try {
      const deletedPlant = await plantService.deletePlant(req.params.id);
      if (!deletedPlant) {
        return res.status(404).json({
          error: 'Plant not found'
        });
      }
      res.status(200).json(deletedPlant);
    } catch (err) {
      res.status(500).json({
        error: err.message
      });
    }
  },

  
};
const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');

router.post('/plants', plantController.createPlant);
router.get('/plants', plantController.getAllPlants);
router.get('/plants/:id', plantController.getPlantById);
router.put('/plants/:id', plantController.updatePlant);
router.delete('/plants/:id', plantController.deletePlant);

// For water a plant
router.post('/plants/:id/water', plantController.waterPlant);

module.exports = router;

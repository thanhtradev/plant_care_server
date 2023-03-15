const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');
const waterController = require('../controllers/waterController');

router.post('/plants', plantController.createPlant);
router.get('/plants', plantController.getAllPlants);
router.get('/plants/:id', plantController.getPlantById);
router.put('/plants/:id', plantController.updatePlant);
router.delete('/plants/:id', plantController.deletePlant);

// For water a plant
router.post('/plants/:id/water', waterController.waterPlant);
// Water a plant with duration
// router.post('/plants/:id/water/:duration', plantController.waterPlantWithDuration);

module.exports = router;

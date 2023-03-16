const express = require('express');
const router = express.Router();

const moistureController = require('../controllers/moistureController');

// Get moisture data by plant id
router.get('/moisture/chart/:id', moistureController.getMoistureChartData);

module.exports = router;
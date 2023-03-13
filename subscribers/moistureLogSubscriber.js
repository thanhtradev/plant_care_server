const mqttClient = require('../config/mqtt');
const MoistureLog = require('../models/MoistureLog');

require('dotenv').config({
    path: './.env'
});

const PLANT_MOISTURE_TOPIC_REGEX = /^plant\/([a-zA-Z0-9]+)\/moisture$/;

function init() {
    mqttClient.subscribe('#');
    mqttClient.on('message', async (topic, message) => {
        const match = topic.match(PLANT_MOISTURE_TOPIC_REGEX);
        if (match) {
            const plantId = match[1];
            const moisture = message.toString();
            console.log(`Received moisture reading from plant ${plantId}: ${moisture}`);
            await MoistureLog.create({
                moisture: moisture,
                plant: plantId
            }).catch((err) => {
                console.error(`Failed to create moisture log: ${err}`);
            });
        }
    });
}

module.exports = {
    init
};
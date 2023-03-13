const mqtt = require('mqtt');

require('dotenv').config({
    path: './.env'
});

const options = {
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD
};

const client = mqtt.connect(process.env.MQTT_BROKER_URL, options);

client.on('connect', () => {
    console.log('Connected to MQTT broker!');
});

client.on('error', (err) => {
    console.error(`Failed to connect to MQTT broker: ${err}`);
});

module.exports = client;
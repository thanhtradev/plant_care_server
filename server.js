const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const plantRoutes = require('./routes/plantRoutes');
const app = express();
const moistureLogSubscriber = require('./subscribers/moistureLogSubscriber');

require('dotenv').config({
    path: './.env'
});

// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.error("Connection error", err);
    process.exit();
});;

// Use body-parser middleware
app.use(bodyParser.json());

// Use the plant routes
app.use('/api', plantRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Logging all moisture readings
moistureLogSubscriber.init();


// Start the server
app.listen(process.env.PORT, () => {
    console.log('Server listening on port 3000');
});
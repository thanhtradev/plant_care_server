
const moistureService = require('../services/moistureService');

module.exports = {
    getMoistureChartData: async (req, res) => {
        const plantId = req.params.id;
        // get MoistureLog by plantId
        const moistureLog = await moistureService.getMoistureLogByPlantId(plantId);
        if (!moistureLog) {
            return res.status(404).json({
                error: 'No data found'
            });
        }
        // console.log(moistureLog);
        // create chartData
        let chartData = [];
        // Return 5 most recent MoistureLog entries
        for (let i = 0; i < 10; i++) {
            chartData.push({
                timestamp: moistureLog[i].timestamp,
                moisture: moistureLog[i].moisture
            });
        }
        res.status(200).json(chartData);
    },
};
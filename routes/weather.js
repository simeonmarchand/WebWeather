// routes/weather.js
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

router.get('/', async function (req, res) {
    const location = req.query.location;
    const apiKey = process.env.WEATHER_API_KEY;
    const apiEndpoint = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    try {
        const apiResponse = await fetch(apiEndpoint);
        const data = await apiResponse.json();
        res.send(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send(error);
    }
});

module.exports = router;
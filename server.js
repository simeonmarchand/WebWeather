require('dotenv').config();

// server.js
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const {query} = require("express/lib/request");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async function (req, res) {
    const location = query.location;
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
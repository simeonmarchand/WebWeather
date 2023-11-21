// public/javascripts/dom.js
// Select the elements from the DOM
const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const cityNameElement = document.querySelector('#city-name');
const regionNameElement = document.querySelector('#region-name');
const countryNameElement = document.querySelector('#country-name');
const temperatureElement = document.querySelector('#temperature');
const weatherConditionElement = document.querySelector('#weather-condition');

// Add an event listener to the form
form.addEventListener('submit', function(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Get the city name from the input field
    const location = input.value;

    // Call the function to fetch weather data
    fetchWeatherData(location);
});
function  fetchWeatherData(location) {
    fetch(`/weather?location=${encodeURIComponent(location)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // use the data from the API
            console.log(data);

            //display data in DOM
            cityNameElement.textContent = data.location.name;
            regionNameElement.textContent = data.location.region;
            countryNameElement.textContent = data.location.country;
            temperatureElement.textContent = 'Temperature: ' + data.current.temp_f + '°F';
            weatherConditionElement.textContent = 'Weather condition: ' + data.current.condition.text;
        })
        .catch(error => {
        console.error('Error:', error);
    });
}
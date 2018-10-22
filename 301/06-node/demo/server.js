'use strict';

// Application Dependencies
const express = require('express');
const cors = require('cors');

// Load environment variables from .env file
require('dotenv').config();

// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// API routes
// Note: with the continued build-out, this function is going to change and will ultimately be extracted to a helper function.
app.get('/location', (request, response) => {
  const locationData = searchToLatLong(request.query.data);
  response.send(locationData);
});

app.get('/weather', getWeather);

// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`Listening on ${PORT}`));





// Helper Functions
function searchToLatLong(query) {
  const geodata = require('./data/geo.json');
  const location = new Location(geodata.results[0]);
  location.search_query = query;

  return location;
}

function Location(data) {
  this.formatted_query: data.formatted_address;
  this.latitude = data.geometry.location.lat;
  this.longitude = data.geometry.location.lng;
}



function getWeather(request, response) {
  const weatherData = require('./data/darksky.json');
  const weatherSummaries = weatherData.daily.data.map(day => {
    return new Weather(day);
  });
  response.send(weatherSummaries);
}

function Weather(day) {
  this.tableName = 'weathers';
  this.forecast = day.summary;
  this.time = new Date(day.time * 1000).toString().slice(0, 15);
  this.created_at = Date.now();
}





// one error handler to make the code DRY
function handleError(err, res) {
  console.error(err);
  if (res) res.status(500).send('Sorry, something went wrong');
}

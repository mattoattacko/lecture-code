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
}function searchToLatLong(query) {

  return Promise.resolve({
    search_query: query,
    formatted_query: 'Lynnwood, WA, USA',
    latitude: 47.8209301,
    longitude: -122.3151314
  });

}

import updateUI from './updateUI';
import getImage from './getImage';
import getLocationDetails from './getLocationDetails';
import getWeatherReport from './getWeatherReport';

const formatTime = (time, timezone) => {
  const currentTime = new Date(time * 1000);
  return currentTime.toLocaleString('en-US', { timeZone: timezone }).slice(-11, currentTime.length);
};

export default async function postLocation(event) {
  event.preventDefault();

  // check what text was put into the form field
  const formText = document.getElementById('name').value;

  // get location image
  const locationImage = await getImage(formText);
  const imageFormatted = (locationImage.hits.length > 0) ? locationImage.hits[0].webformatURL : 'https://dummyimage.com/600x400/a9a9a9/ffffff&text=No+image+found';

  // get location details
  const locationDetails = await getLocationDetails(formText);
  const details = locationDetails.geonames[0];

  // get location weather
  const weatherDetails = await getWeatherReport(details.lng, details.lat);
  const currentTime = formatTime(weatherDetails.currently.time, weatherDetails.timezone);

  const locationData = {
    image: imageFormatted,
    name: details.asciiName,
    longitude: details.lng,
    latitude: details.lat,
    population: details.population,
    countryName: details.countryName,
    map: `https://maps.google.com/maps?q=${details.lat},${details.lng}&hl=es&z=14&amp;output=embed`,
    time: currentTime,
    currentWeather: weatherDetails.currently.summary,
    temperature: weatherDetails.currently.temperature,
  };


  const url = 'http://localhost:3004/add-location';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(locationData),
  });

  try {
    const newData = await response.json();
    updateUI(newData);
  } catch (error) {
    console.error(new Error(`There is an issue: ${error}`));
  }
}

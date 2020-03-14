const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();
const port = 3004;

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

/* Middleware */
// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

// GET route to retrieve contents of projectData
app.get('/get-location', async (req, res) => {
  const data = await projectData;
  res.send(data);
});

// POST route to add new contents to projectData
app.post('/add-location', async (req, res) => {
  const {
    image,
    name,
    longitude,
    latitude,
    population,
    countryName,
    map,
    time,
    currentWeather,
    temperature,
  } = req.body;

  projectData = {
    image,
    name,
    longitude,
    latitude,
    population,
    countryName,
    map,
    time,
    currentWeather,
    temperature,
  };

  res.send(projectData);
});


// Setup Server
app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});

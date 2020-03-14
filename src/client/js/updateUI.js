export default async function updateUI(location) {
  const resultsElement = document.getElementById('location');
  const {
    image,
    name,
    longitude,
    latitude,
    population,
    countryName,
    map,
    temperature,
    currentWeather,
    time,
  } = location;

  resultsElement.innerHTML = '';

  const content = `
    <section class="card">
      <div class="card-header">
       <h3>${name}, ${countryName}</h3>
       <p><strong>Longitude:</strong> ${longitude}, <strong>Latitude:</strong> ${latitude}</p>
      </div>
      <div class="card-body">
        <img src="${image}" class="card-img" />
        <iframe src="${map}" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <hr />
        <h3>More Details</h3>
        <p class="details"><strong>Population:</strong> ${population}</p>
        <p class="details"><strong>Current time:</strong> ${time}</p>
        <p class="details"><strong>Sky:</strong> ${currentWeather}</p>
        <p class="details"><strong>Current Temperature:</strong> ${temperature} &#176;F</p>
      </div>
    </section>
  `;

  resultsElement.innerHTML = content;
}

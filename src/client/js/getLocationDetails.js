export default async function getLocationDetails(text) {
  const username = 'ptumulty923';
  const dataUrl = `http://api.geonames.org/searchJSON?formatted=true&q=${text}&username=${username}&style=full`;
  const request = await fetch(dataUrl);
  const data = request.json();

  return data;
}

export default async function getLocationDetails(text) {
  const dataUrl = `http://api.geonames.org/searchJSON?formatted=true&q=${text}&username=${process.env.GEONAMES_KEY}&style=full`;
  const request = await fetch(dataUrl);
  const data = request.json();

  return data;
}

export default async function getWeatherReport(lng, lat) {
  const apiKey = '1a36e17c93001d4b69a7a99a589c9a9f';
  const dataUrl = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;
  const request = await fetch(dataUrl);
  const data = request.json();

  return data;
}

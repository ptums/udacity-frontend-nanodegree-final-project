export default async function getWeatherReport(lng, lat) {
  const dataUrl = `https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${lat},${lng}`;
  const request = await fetch(dataUrl);
  const data = request.json();

  return data;
}

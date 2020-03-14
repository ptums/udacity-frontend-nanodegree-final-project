export default async function getImage(text) {
  const base = 'https://pixabay.com/api/?key=';
  const imageUrl = `${base}${process.env.PIXABAY_KEY}&q=${text}&image_type=photo&pretty=true&category=places`;
  const request = await fetch(imageUrl);
  const data = request.json();

  return data;
}

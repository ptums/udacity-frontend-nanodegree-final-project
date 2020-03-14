export default async function getImage(text) {
  const base = 'https://pixabay.com/api/?key=';
  const key = '15594834-9de43508d9d49f1ace3ad5303';
  const imageUrl = `${base}${key}&q=${text}&image_type=photo&pretty=true&category=places`;
  const request = await fetch(imageUrl);
  const data = request.json();

  return data;
}

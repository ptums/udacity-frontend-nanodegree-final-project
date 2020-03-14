import updateUI from './updateUI';

export default async function getLocation() {
  const url = 'http://localhost:3004/get-location';

  const response = await fetch(url, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  try {
    const allData = await response.json();

    if (Object.keys(allData).length > 0) {
      updateUI(allData);
    }
    return allData;
  } catch (error) {
    console.log('error', error);
  }
}

document.addEventListener('DOMContentLoaded', getLocation);

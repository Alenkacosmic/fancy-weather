/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
export default userWeather;

function userWeather(curLocation) {
  const WEATHER_API_TOKEN = '835b3e05313f23d5e8c08b3407ca00be';
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${curLocation.latitude}&lon=${curLocation.longitude}&units=metric&APPID=${WEATHER_API_TOKEN}`)
    .then((response) => response.json())
    .then((data) => data);
}

/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import location from './modules/userLocation';
import weather from './modules/userWeather';
import store from './modules/storeMe';
import renderWeatherValues from './modules/renderWeather';
import drawMap from './modules/userGetMap';
import time from './modules/userTime';
import background from './modules/background';

require('regenerator-runtime');

async function extracting(store) {
  const curLocation = await location();
  const resultPromise = await weather(curLocation);
  store.setWeatherObj = resultPromise;
  time();
  drawMap(store.location);
  renderWeatherValues(store);
  background(store.city);
}
extracting(store);

/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import weather from './userWeather';
import store from './storeMe';
import renderWeatherValues from './renderWeather';
import background from './background';

export default drawMap;

const MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');

function drawMap(location) {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlbmthY29zbWljIiwiYSI6ImNrNDdkZW04ODBwZngzbGw5eXkzaXp1MDcifQ.GNoZ8KYFRLwpIyWPtO0Neg';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [location.lon, location.lat], // starting position
    zoom: 10,
  });


  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl,
  });

  geocoder.on('result', (e) => {
    async function changeMap() {
      const resultPromise = await weather({
        latitude: e.result.center[1],
        longitude: e.result.center[0],
      });
      store.setWeatherObj = resultPromise;
      renderWeatherValues(store);
      background(store.city);
    }
    changeMap();
  });

  document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
}

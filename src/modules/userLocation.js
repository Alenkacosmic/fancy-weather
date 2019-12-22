/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import parseStringToCoord from './parsecoord';

export default getUserLocation;

function getUserLocation() {
  const USER_LOCATION_API_TOKEN = 'ab52fb375d582c';
  return fetch(`https://ipinfo.io/json?token=${USER_LOCATION_API_TOKEN}`)
    .then((response) => response.json())
    .then((data) => parseStringToCoord(data.loc));
}

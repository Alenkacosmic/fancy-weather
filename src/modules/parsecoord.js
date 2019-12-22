/* eslint-disable no-use-before-define */
export default parseStringCoord;

function parseStringCoord(strLoc) {
  const location = strLoc.split(',');
  const lat = location[0];
  const lon = location[1];
  return {
    latitude: lat,
    longitude: lon,
  };
}

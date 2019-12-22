/* eslint-disable no-use-before-define */
export default renderWeatherValues;

function renderWeatherValues(obj) {
  console.log(obj);
  const currentPlace = document.querySelector('.what__today .what__today--place');
  const currentTemp = document.querySelector('.what__today--feels .what__today--feels-temp__now');
  const currentDesc = document.querySelector('.what__today--feels .what__today--feels-describe');
  const currentIcon = document.querySelector('.what__today .today_img');

  const day1Temp = document.querySelector('.what__there--one .what__there--one-temp');
  const day1Icon = document.querySelector('.what__there--one .what__there--one-img');
  const day1Week = document.querySelector('.what__there--one .what__there--one-day');

  const day2Temp = document.querySelector('.what__there--two .what__there--two-temp');
  const day2Icon = document.querySelector('.what__there--two .what__there--two-img');
  const day2Week = document.querySelector('.what__there--two .what__there--two-day');

  const day3Temp = document.querySelector('.what__there--three .what__there--three-temp');
  const day3Icon = document.querySelector('.what__there--three .what__there--three-img');
  const day3Week = document.querySelector('.what__there--three .what__there--three-day');

  const objcur = obj.getWeather;

  currentPlace.textContent = objcur.city;
  currentTemp.textContent = objcur.curTemp;
  currentDesc.textContent = objcur.curTempDesc;
  currentIcon.style.backgroundImage = `url(${objcur.curTempIcon})`;

  day1Temp.textContent = objcur.firstDay.temp;
  day1Icon.style.backgroundImage = `url(${objcur.firstDay.icon})`;
  day1Week.textContent = objcur.firstDay.day;

  day2Temp.textContent = objcur.secondDay.temp;
  day2Icon.style.backgroundImage = `url(${objcur.secondDay.icon})`;
  day2Week.textContent = objcur.secondDay.day;

  day3Temp.textContent = objcur.thirdDay.temp;
  day3Icon.style.backgroundImage = `url(${objcur.thirdDay.icon})`;
  day3Week.textContent = objcur.thirdDay.day;
}

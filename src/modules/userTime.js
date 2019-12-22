/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import lang from './changeLang';

export default function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  const date = today.getDate();
  const monthNum = today.getMonth();
  const day = today.getDay();
  h = checkTime(h);
  m = checkTime(m);
  document.querySelector('.what__today--day-time').innerHTML = `${h}:${m}`;
  document.querySelector('.what__today--day-date').innerHTML = `${lang.en.days[day]} ${date} ${lang.en.months[monthNum]}`;
  return setTimeout(startTime, 1000);
}

function checkTime(interval) {
  if (interval < 10) { interval = `0${interval}`; }
  return interval;
}

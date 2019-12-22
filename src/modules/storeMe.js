/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import lang from './changeLang';

export default {
  city: null,
  location: null,
  dayWeek: null,
  date: null,
  month: null,
  time: null,
  timezone: null,
  curTemp: null,
  curTempIcon: null,
  curTempDesc: null,
  curTempFeelsLike: null,
  curTempWind: null,

  curTempHumidity: null,
  firstDay: {
    temp: null,
    icon: null,
    day: null,
  },
  secondDay: {
    temp: null,
    icon: null,
    day: null,
  },
  thirdDay: {
    temp: null,
    icon: null,
    day: null,
  },

  getWeatherFor3Days(objList) {
    const dateNow = new Date();
    const curDate = dateNow.getUTCDate();
    const veryCuteObjec = {};

    let lastDate = null;
    let count = 1;
    objList.forEach((element) => {
      const dateList = new Date(element.dt * 1000);
      const curDateList = dateList.getUTCDate();

      if (curDate !== curDateList && curDateList < curDate + 4) {
        if (veryCuteObjec[count] === undefined) {
          veryCuteObjec[count] = new Array(element);
        } else if (lastDate !== curDateList) {
          // eslint-disable-next-line no-plusplus
          count++;
          veryCuteObjec[count] = new Array(element);
        } else {
          veryCuteObjec[count].push(element);
        }
        lastDate = curDateList;
      }
    });

    for (const key in veryCuteObjec) {
      const result = veryCuteObjec[key];
      const arr = [];

      result.forEach((e) => {
        const dateList = new Date(e.dt * 1000);
        const curHourList = dateList.getUTCHours();
        const getDay = dateList.getUTCDay();
        const twelveClock = 12;
        if (curHourList === twelveClock) {
          veryCuteObjec[key].iconAver = e.weather[0].icon;
          veryCuteObjec[key].dayOfWeek = getDay;
        }
        arr.push(e.main.temp);
      });

      veryCuteObjec[key].averageTemp = Math.round(arr.reduce((a, b) => a + b) / arr.length);
    }
    return veryCuteObjec;
  },

  set setWeatherObj(obj) {
    const currentWeatherTemp = obj.list[0];
    const curWeather = currentWeatherTemp.weather[0];
    const curMain = currentWeatherTemp.main;
    const curWind = currentWeatherTemp.wind;
    const tempFor3Days = this.getWeatherFor3Days(obj.list);
    this.city = obj.city.name;
    this.location = obj.city.coord;
    this.dayWeek = obj;
    this.date = obj;
    this.month = obj;
    this.time = obj;
    this.timezone = obj.city.timezone;
    this.curTemp = Math.round(curMain.temp);
    this.curTempIcon = `http://openweathermap.org/img/wn/${curWeather.icon}.png`;
    this.curTempDesc = lang.en.desc[curWeather.id];
    this.curTempFeelsLike = curMain.feels_like;
    this.curTempWind = curWind.speed;
    this.curTempHumidity = curMain.humidity;
    this.firstDay.temp = tempFor3Days[1].averageTemp;
    this.firstDay.icon = `http://openweathermap.org/img/wn/${tempFor3Days[1].iconAver}.png`;
    this.firstDay.day = lang.en.days[tempFor3Days[1].dayOfWeek];
    this.secondDay.temp = tempFor3Days[2].averageTemp;
    this.secondDay.icon = `http://openweathermap.org/img/wn/${tempFor3Days[2].iconAver}.png`;
    this.secondDay.day = lang.en.days[tempFor3Days[2].dayOfWeek];
    this.thirdDay.temp = tempFor3Days[3].averageTemp;
    this.thirdDay.icon = `http://openweathermap.org/img/wn/${tempFor3Days[3].iconAver}.png`;
    this.thirdDay.day = lang.en.days[tempFor3Days[3].dayOfWeek];
  },

  get getWeather() {
    return this;
  },
};

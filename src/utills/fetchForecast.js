import axios from "axios";

const API_URL =
  "http://api.weatherapi.com/v1/forecast.json?key=ae3d2bb156c34fa3a29193217221401&";

const fetchForecast = async (city, setForecast) => {
  const forecast = [];

  const response = await axios.get(
    `${API_URL}q=${city}&days=3&aqi=no&alerts=no`
  );

  const forecastData = response.data.forecast.forecastday;

  forecastData.forEach((data) => {
    forecast.push([
      { weekday: data.date },
      { dayTemp: data.hour[14].temp_c },
      { nightTemp: data.hour[0].temp_c },
      { icon: data.day.condition.icon },
    ]);
  });

  setForecast(forecast);
  // console.log(forecastData);
  // const test = new Date(forecastData[0].date);
  // const test2 = test.getDay();
  // console.log(test2);
};

export { fetchForecast };

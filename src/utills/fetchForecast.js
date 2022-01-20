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
      data.hour[0].temp_c,
      data.hour[14].temp_c,
      data.day.condition.icon,
    ]);
  });

  setForecast(forecast);
};

export { fetchForecast };

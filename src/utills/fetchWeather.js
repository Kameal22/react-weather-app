import axios from "axios";

const API_URL =
  "http://api.weatherapi.com/v1/current.json?key=ae3d2bb156c34fa3a29193217221401&";

const fetchStartingWeather = async (localization, setWeather) => {
  const response = await axios.get(`${API_URL}q=${localization}&aqi=yes`);

  const weather = [response.data.location, response.data.current];

  setWeather(weather);
};

const fetchWeather = async (city, setWeather) => {
  const response = await axios.get(`${API_URL}q=${city}&aqi=yes`);

  const weather = [response.data.location, response.data.current];

  setWeather(weather);
};

export { fetchStartingWeather, fetchWeather };

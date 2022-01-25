import axios from "axios";

const API_URL =
  "http://api.weatherapi.com/v1/current.json?key=ae3d2bb156c34fa3a29193217221401&";

const fetchWeather = async (city, setWeather, setLoading) => {
  const response = await axios.get(`${API_URL}q=${city}&aqi=yes`);

  const weather = {
    location: response.data.location,
    weatherData: response.data.current,
  };

  setWeather(weather);
  setLoading(false);
};

export { fetchWeather };

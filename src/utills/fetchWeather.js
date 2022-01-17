import axios from "axios";

const API_URL =
  "http://api.weatherapi.com/v1/current.json?key=ae3d2bb156c34fa3a29193217221401&";
const starterCity = "London";

//Create a function for fetching weather when component mounts, so when You start the app, you see weather for your region
//Also create a function that takes user localization input as an argument.

const fetchStartingWeather = async (setWeather) => {
  const response = await axios.get(`${API_URL}q=${starterCity}&aqi=yes`);

  const weather = [response.data.location, response.data.current];

  setWeather(weather);
};

export { fetchStartingWeather };

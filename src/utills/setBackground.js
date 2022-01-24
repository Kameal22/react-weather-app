import clearSky from "../images/clear-sky.jpg";
import cloudyWeather from "../images/cloudy-weather.jpg";
import nightSky from "../images/night-sky.jpg";
import darkClouds from "../images/dark-clouds.jpg";
import rainyWeather from "../images/rainy-weather.jpg";
import stormyWeather from "../images/stormy-weather.jpg";

const setBackgroundFunc = (condition) => {
  let background = "";
  if (condition === "Clear" || condition === "Sunny") {
    background = clearSky;
  } else if (condition === "Partly cloudy" || condition === "Light drizzle") {
    background = cloudyWeather;
  } else if (
    condition === "Overcast" ||
    (condition === condition) === "Moderate or heavy showers"
  ) {
    background = stormyWeather;
  } else if (condition === "Mist" || condition === "Fog") {
    background = darkClouds;
  } else if (
    condition === "Light rain" ||
    condition === "Light rain shower" ||
    condition === "Patchy rain possible"
  ) {
    background = rainyWeather;
  } else {
    background = nightSky;
  }
  return background;
};

export { setBackgroundFunc };

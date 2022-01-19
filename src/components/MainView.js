import { useEffect, useState } from "react";
import "../styles/MainView.css";
import { fetchStartingWeather } from "../utills/fetchWeather";
import { fetchWeather } from "../utills/fetchWeather";
import CitySelect from "./CitySelect";

function MainView() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    fetchStartingWeather(setWeather, weather);
  }, []);

  useEffect(() => {
    if (city !== undefined) {
      fetchWeather(city, setWeather, weather);
    }
  }, [city]);

  const changeCity = (city) => {
    setCity(city);
  };

  return (
    <div className="mainViewDiv">
      {weather !== undefined ? (
        <h1 className="cityName">{weather[0].name}</h1>
      ) : (
        <h1 className="cityName">Loading data</h1>
      )}
      <CitySelect changeCity={changeCity} />
    </div>
  );
}
export default MainView;

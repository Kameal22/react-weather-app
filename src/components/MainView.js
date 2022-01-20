import { useEffect, useState } from "react";
import "../styles/MainView.css";
import { fetchStartingWeather } from "../utills/fetchWeather";
import { fetchWeather } from "../utills/fetchWeather";
import { getCurrentDay } from "../utills/getDay";
import { getLocalization } from "../utills/getLocalization";
import { fetchForecast } from "../utills/fetchForecast";
import CitySelect from "./CitySelect";
import Forecast from "./Forecast";

function MainView() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [today, setToday] = useState();
  const [localization, setLocalization] = useState();
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    getLocalization(setLocalization, localization);
    getCurrentDay(setToday, today);
  }, []);

  useEffect(() => {
    if (localization !== undefined) {
      fetchStartingWeather(localization, setWeather, weather);
      fetchForecast(localization, setForecast, forecast);
    }
  }, [localization]);

  useEffect(() => {
    if (city !== undefined) {
      fetchWeather(city, setWeather, weather);
      fetchForecast(city, setForecast, forecast); //Works only on city change, fair enough
    }
  }, [city]);

  const changeCity = (city) => {
    setCity(city);
  };

  return (
    <div className="mainViewDiv">
      {weather !== undefined ? (
        <h1 className="cityName">{weather[0].name}</h1>
      ) : null}
      <CitySelect changeCity={changeCity} />

      <div className="mainInfoDiv">
        <div className="leftSide">
          {weather !== undefined ? (
            <h2 className="temp_c">
              {weather[1].temp_c}
              <sup>
                <span>&#8451;</span>
              </sup>
            </h2>
          ) : null}
          <div className="windHumidity">
            {weather !== undefined ? (
              <h3>Humidity: {weather[1].humidity}%</h3>
            ) : null}
            {weather !== undefined ? (
              <h3>Wind: {weather[1].wind_kph} km/h</h3>
            ) : null}
          </div>
        </div>
        <div className="rightSide">
          {weather !== undefined ? (
            <h2
              onClick={() => console.log(weather[1].condition.text)}
              className="weekday"
            >
              {today}
            </h2>
          ) : null}
          {weather !== undefined ? (
            <h3 onClick={() => console.log(forecast)} className="condition">
              {weather[1].condition.text}
            </h3>
          ) : null}
        </div>
      </div>
      <div className="forecastsDiv">
        <Forecast />
        <Forecast />
        <Forecast />
      </div>
    </div>
  );
}
export default MainView;

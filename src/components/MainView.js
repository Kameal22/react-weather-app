import { useEffect, useState } from "react";
import "../styles/MainView.css";
import { fetchStartingWeather } from "../utills/fetchWeather";
import { fetchWeather } from "../utills/fetchWeather";
import { getCurrentDay } from "../utills/getDay";
import CitySelect from "./CitySelect";

function MainView() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [today, setToday] = useState();

  useEffect(() => {
    fetchStartingWeather(setWeather, weather);
    getCurrentDay(setToday, today);
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
          <h2 className="weekday">{today}</h2>
        </div>
      </div>
    </div>
  );
}
export default MainView;

import { useEffect, useState } from "react";
import { setBackgroundFunc } from "../utills/setBackground";
import { v4 as uuidv4 } from "uuid";
import "../styles/MainView.css";
import { fetchWeather } from "../utills/fetchWeather";
import { getCurrentDay } from "../utills/getDay";
import { getLocalization } from "../utills/getLocalization";
import { fetchForecast } from "../utills/fetchForecast";
import CitySelect from "./CitySelect";
import Forecast from "./Forecast";
import LoadingScreen from "./LoadingScreen";
import Footer from "./Footer";
import SavedLocalization from "./SavedLocalization";
import useArray from "../hooks/useArray";

function MainView() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState();
  const [today, setToday] = useState();
  const [localization, setLocalization] = useState();
  const [forecast, setForecast] = useState([]);
  const [forecastDates, setForecastDates] = useState();
  const [savedLocalizations, , push, , , remove] = useArray([]);

  useEffect(() => {
    getLocalization(setLocalization, localization);
  }, []); //Gets user localization

  useEffect(() => {
    getCurrentDay(setToday, today);
  }, []); //Gets current date to show day name

  useEffect(() => {
    if (localization !== undefined) {
      fetchWeather(localization, setWeather, setLoading);
      fetchForecast(localization, setForecast);
    }
  }, [localization]); //Sets weather and forecast.

  useEffect(() => {
    const dates = forecast.map((dates) => dates[0].weekday);
    const datesWithoutYear = [];

    dates.forEach((date) => {
      datesWithoutYear.push(date.slice(5, 10));
    });

    setForecastDates(datesWithoutYear);
  }, [forecast]); //Gets todays date and 2 days ahead to display which days are shown in forecast.

  const changeLocalization = (localization) => setLocalization(localization);

  const saveCity = (city) => {
    if (!savedLocalizations.includes(city)) {
      push(city);
    }
  };

  const deleteCity = (city) => {
    remove(city);
  };

  if (loading) {
    return <LoadingScreen />;
  } else {
    return (
      <div
        data-testid="main-1"
        className="mainViewDiv"
        style={{
          backgroundImage: `url(${setBackgroundFunc(
            weather.weatherData.condition.text
          )})`,
        }}
      >
        <h1 className="cityName">{weather.location.name}</h1>
        {!savedLocalizations.includes(weather.location.name) ? (
          <p
            onClick={() => saveCity(weather.location.name)}
            className="saveCity"
          >
            Save city
          </p>
        ) : null}

        <CitySelect changeLocalization={changeLocalization} />

        {savedLocalizations.length > 0 ? (
          <SavedLocalization
            cities={savedLocalizations}
            changeCity={changeLocalization}
            deleteCity={deleteCity}
          />
        ) : null}

        <div className="mainInfoDiv">
          <div className="leftSide">
            <h2
              style={
                weather.weatherData.temp_c < 5
                  ? { color: "#014f86" }
                  : { color: "#fdc500" }
              }
              className="temp_c"
            >
              {weather.weatherData.temp_c}
              <sup>
                <span>&#8451;</span>
              </sup>
            </h2>
            <div className="windHumidity">
              <h3>Humidity: {weather.weatherData.humidity}%</h3>
              <h3>Wind: {weather.weatherData.wind_kph} km/h</h3>
            </div>
          </div>

          <div className="rightSide">
            <h2 className="weekday">{today}</h2>
            <h3 className="condition">{weather.weatherData.condition.text}</h3>
          </div>
        </div>

        <div className="forecastsDiv">
          <div className="forecastDatesDiv">
            <p>For: </p>
            <p className="forecastDate1">{forecastDates[0]}</p>
            <p>-</p>
            <p className="forecastDate2">{forecastDates[2]}</p>
          </div>
          {forecast.map((data) => {
            return (
              <Forecast
                day={data[0].weekday}
                dayTemp={data[1].dayTemp}
                nightTemp={data[2].nightTemp}
                img={`https:${data[3].icon}`}
                key={uuidv4()}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}
export default MainView;

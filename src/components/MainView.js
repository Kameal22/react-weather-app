import { useEffect, useState } from "react";
import "../styles/MainView.css";
import { fetchStartingWeather } from "../utills/fetchWeather";
import CitySelect from "./CitySelect";

function MainView() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    fetchStartingWeather(setWeather, weather);
  }, []);

  return (
    <div className="mainViewDiv">
      {weather !== undefined ? (
        <h1 className="cityName">{weather[0].name}</h1>
      ) : (
        <h1>Data fetching error</h1>
      )}
      <CitySelect />
    </div>
  );
}
export default MainView;

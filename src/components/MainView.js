import { useEffect, useState } from "react";
import "../styles/MainView.css";
import { fetchStartingWeather } from "../utills/fetchWeather";

function MainView() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    fetchStartingWeather(setWeather, weather);
  }, []);

  return (
    <div className="mainViewDiv">
      <h1>{weather[0].name}</h1>
      <h2>{weather[1].temp_c}&#8451;</h2>
    </div>
  );
}
export default MainView;

import "../styles/Forecast.css";
import { weekdays } from "../utills/getDay";

function Forecast(props) {
  const date = new Date(props.day);
  const weekdayNum = date.getDay();
  const weekday = weekdays[weekdayNum];

  return (
    <div data-testid="forecast-1" className="forecastDiv">
      <h3>{weekday}</h3>
      <img src={props.img} alt={props.img}></img>
      <div className="dayNightTemp">
        <h3 style={{ color: "#fdc500" }}>{props.dayTemp}</h3>
        <h3 style={{ color: "#014f86" }}>{props.nightTemp}</h3>
      </div>
    </div>
  );
}
export default Forecast;

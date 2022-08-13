import "../styles/SavedLocalization.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

const SavedLocalization = (props) => {
  const [shownCities, setShownCities] = useState(true);

  return (
    <div
      style={
        shownCities
          ? { borderBottom: "2px solid rgba(255, 255, 240, 0.671)" }
          : { borderBottom: "none" }
      }
      className="savedLocalizationsDiv"
    >
      <div className="savedLocalizationHeadingAndArrow">
        <h3 style={{ color: "ivory" }}>Your locations</h3>
        <i
          onClick={() => setShownCities(!shownCities)}
          className={
            shownCities ? "bi bi-arrow-up-square" : "bi bi-arrow-down-square"
          }
        ></i>
      </div>
      {props.cities.map((city) => {
        if (shownCities) {
          return (
            <div key={city} className="savedCityAndIconDiv">
              <p onClick={() => props.changeCity(city)} key={city}>
                {city}
              </p>
              <i onClick={() => props.deleteCity(city)} className="bi bi-x"></i>
            </div>
          );
        }
      })}
    </div>
  );
};

export default SavedLocalization;

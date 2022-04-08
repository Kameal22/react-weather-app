import "../styles/SavedLocalization.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

const SavedLocalization = (props) => {
  const [showCities, setShowCities] = useState(true);

  return (
    <div
      style={
        showCities
          ? { borderBottom: "2px solid rgba(255, 255, 240, 0.671)" }
          : { borderBottom: "none" }
      }
      className="savedLocalizationsDiv"
    >
      <div className="savedLocalizationHeadingAndArrow">
        <h3 style={{ color: "ivory" }}>Your locations</h3>
        <i
          onClick={() => setShowCities(!showCities)}
          class={
            showCities ? "bi bi-arrow-up-square" : "bi bi-arrow-down-square"
          }
        ></i>
      </div>
      {props.cities.map((city) => {
        if (showCities) {
          return (
            <p onClick={() => props.changeCity(city)} key={city}>
              {city}
            </p>
          );
        }
      })}
    </div>
  );
};

export default SavedLocalization;

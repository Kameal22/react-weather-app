import "../styles/SavedLocalization.css";

const SavedLocalization = (props) => {
  return (
    <div className="savedLocalizationsDiv">
      <h3 style={{ color: "ivory" }}>Your localizations</h3>
      {props.cities.map((city) => {
        return (
          <p onClick={() => props.changeCity(city)} key={city}>
            {city}
          </p>
        );
      })}
    </div>
  );
};

export default SavedLocalization;

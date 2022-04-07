import "../styles/SavedLocalization.css";

const SavedLocalization = (props) => {
  console.log(props);
  return (
    <div className="savedLocalizationsDiv">
      <h4 style={{ color: "ivory" }}>Your localizations</h4>
      {props.cities.map((city) => {
        return <p>{city}</p>;
      })}
    </div>
  );
};

export default SavedLocalization;

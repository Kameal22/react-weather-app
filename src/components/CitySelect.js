import "../styles/CitySelect.css";
import { useFormik } from "formik";

function CitySelect(props) {
  const formik = useFormik({
    initialValues: {
      city: "",
    },
    onSubmit: (values) => {
      const inputCity =
        values.city.charAt(0).toUpperCase() + values.city.slice(1);
      props.changeLocalization(inputCity);
      formik.resetForm();
    },
  });

  return (
    <div className="CitySelectDiv">
      <form onSubmit={formik.handleSubmit}>
        <input
          className="formInput"
          id="city"
          name="city"
          type="text"
          placeholder="Check weather.."
          value={formik.values.city}
          onChange={formik.handleChange}
        ></input>
      </form>
    </div>
  );
}
export default CitySelect;

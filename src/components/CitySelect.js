import "../styles/CitySelect.css";
import { useFormik } from "formik";

function CitySelect(props) {
  const placeholder = "Check weather..";
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
    <div data-testid="citySelect-1" className="CitySelectDiv">
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <input
          className="formInput"
          id="city"
          name="city"
          type="text"
          placeholder={placeholder}
          value={formik.values.city}
          onChange={formik.handleChange}
        ></input>
      </form>
    </div>
  );
}
export default CitySelect;

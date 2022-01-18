import "../styles/CitySelect.css";
import { useFormik } from "formik";

function CitySelect() {
  const formik = useFormik({
    initialValues: {
      city: "",
    },
    onSubmit: (values) => {
      console.log(values);
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
          placeholder="Type city"
          value={formik.values.city}
          onChange={formik.handleChange}
        ></input>
      </form>
    </div>
  );
}
export default CitySelect;

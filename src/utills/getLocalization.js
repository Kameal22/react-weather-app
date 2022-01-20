import axios from "axios";

const getLocalization = (setLocalization) => {
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    axios
      .get(
        `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${latitude}&lon=${longitude}`
      )
      .then((res) => {
        setLocalization(res.data.features[0].properties.address.town);
      });
  });
};

export { getLocalization };

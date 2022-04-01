import { setBackgroundFunc } from "../utills/setBackground";
import clearSky from "../images/clear-sky.jpg";

function LoadingScreen() {
  return (
    <div
      style={{
        backgroundImage: `url(${setBackgroundFunc(clearSky)})`,
      }}
      data-testid="loading-1"
    ></div>
  );
}
export default LoadingScreen;

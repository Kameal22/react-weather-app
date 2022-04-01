import { render, screen, cleanup } from "@testing-library/react";
import Forecast from "../components/Forecast";
import CitySelect from "../components/CitySelect";
import MainView from "../components/MainView";
import LoadingScreen from "../components/LoadingScreen";
import { useEffect } from "react";

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
};

global.navigator.geolocation = mockGeolocation;

test("should render forecast view component", () => {
  render(<Forecast />);

  const forecastElement = screen.getByTestId("forecast-1");
  expect(forecastElement).toBeInTheDocument;
});

test("should render City select component", () => {
  render(<CitySelect />);

  const citySelectElement = screen.getByTestId("citySelect-1");
  expect(citySelectElement).toBeInTheDocument;
});

test("should render loading screen", () => {
  render(<LoadingScreen />);

  const loadingScreen = screen.getByTestId("loading-1");
  expect(loadingScreen).toBeInTheDocument;
});

// test("should render main view", () => {
//   render(<MainView />);

//   const mainView = screen.getByTestId("mainView-1");
//   expect(mainView).toBeInTheDocument;
// });

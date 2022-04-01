import { render, screen, cleanup } from "@testing-library/react";
import Forecast from "../components/Forecast";
import CitySelect from "../components/CitySelect";
import MainView from "../components/MainView";

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

test("should render Main view component", () => {
  render(<MainView />);

  const mainViewElement = screen.getByTestId("mainView-1");
  expect(mainViewElement).toBeInTheDocument;
});

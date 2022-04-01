import { render, screen, cleanup } from "@testing-library/react";
import Forecast from "../components/Forecast";
import CitySelect from "../components/CitySelect";

test("should render forecast view component", () => {
  render(<Forecast />);

  const forecastElement = screen.getByTestId("forecast-1");
  expect(forecastElement).toBeInTheDocument;
});

test("should render City select component", () => {
  render(<CitySelect />);

  const CitySelectElement = screen.getByTestId("citySelect-1");
  expect(CitySelectElement).toBeInTheDocument;
});

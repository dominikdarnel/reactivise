import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders component correctly", () => {
  const { getByText } = render(<App />);
  const element = getByText(/Reactivise/i);
  expect(element).toBeInTheDocument();
});

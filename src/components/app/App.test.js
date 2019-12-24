import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders app component", () => {
  const { getByText } = render(<App />);
  const element = getByText(/Clients/i);
  expect(element).toBeInTheDocument();
});

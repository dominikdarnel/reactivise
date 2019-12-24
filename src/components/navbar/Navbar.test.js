import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

test("renders component with brand name", () => {
  const { getByText } = render(<Navbar />);
  const element = getByText(/Reactivise/i);
  expect(element).toBeInTheDocument();
});

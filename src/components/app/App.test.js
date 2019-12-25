import React from "react";
import { render, act } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders component correctly", async () => {
    let getByText;
    await act(async () => {
      getByText = render(<App />).getByText;
    });

    const element = getByText(/Reactivise/i);
    expect(element).toBeInTheDocument();
  });
});

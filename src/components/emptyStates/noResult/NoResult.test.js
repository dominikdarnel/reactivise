import React from "react";
import { render } from "@testing-library/react";
import NoResult from "./NoResult";

describe("NoResult", () => {
  test("renders component correctly", async () => {
    const { getByTestId } = render(<NoResult />);
    const element = getByTestId("no-result");
    expect(element).toBeInTheDocument();
  });
});

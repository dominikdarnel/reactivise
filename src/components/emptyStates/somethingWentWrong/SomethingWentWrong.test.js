import React from "react";
import { render } from "@testing-library/react";
import SomethingWentWrong from "./SomethingWentWrong";

describe("SomethingWentWrong", () => {
  test("renders component correctly", async () => {
    const { getByTestId } = render(<SomethingWentWrong />);
    const element = getByTestId("something-went-wrong");
    expect(element).toBeInTheDocument();
  });
});

import React from "react";
import { render } from "@testing-library/react";
import ButtonSkeleton from "./ButtonSkeleton";

describe("ButtonSkeleton", () => {
  test("renders component correctly", async () => {
    const { getByTestId } = render(<ButtonSkeleton />);
    const element = getByTestId("button-skeleton");
    expect(element).toBeInTheDocument();
  });
});

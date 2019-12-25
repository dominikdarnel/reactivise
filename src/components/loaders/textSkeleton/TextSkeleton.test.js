import React from "react";
import { render } from "@testing-library/react";
import TextSkeleton from "./TextSkeleton";

describe("TextSkeleton", () => {
  test("renders component correctly", async () => {
    const { getByTestId } = render(<TextSkeleton />);
    const element = getByTestId("text-skeleton");
    expect(element).toBeInTheDocument();
  });
});

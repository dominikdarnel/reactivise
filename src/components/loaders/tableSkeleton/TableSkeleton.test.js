import React from "react";
import { render } from "@testing-library/react";
import TableSkeleton from "./TableSkeleton";

describe("TableSkeleton", () => {
  test("renders component correctly", async () => {
    const { getByTestId } = render(<TableSkeleton />);
    const element = getByTestId("table-skeleton");
    expect(element).toBeInTheDocument();
  });
});

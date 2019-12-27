import React from "react";
import { render, cleanup } from "@testing-library/react";
import ClientFormBody from "./ClientFormBody";

afterEach(cleanup);

describe("ClientFormBody", () => {
  test("renders component correctly", async () => {
    const { getByTestId } = render(<ClientFormBody />);
    const element = getByTestId("client-form-body");
    expect(element).toBeInTheDocument();
  });

  test("prefills id input with uuid", async () => {
    const { getByTestId } = render(<ClientFormBody />);
    const input = getByTestId("client-form-value-id");

    expect(input.value).toBeTruthy();
  });
});

import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Table from "./Table";

describe("Table", () => {
  afterEach(cleanup);

  const data = [
    {
      name: "John",
      age: 21
    },
    {
      name: "Anne",
      age: 18
    }
  ];

  test("renders table with correct headers", () => {
    const { getByTestId } = render(<Table data={data} />);
    const hashtagColumn = getByTestId("column-1");
    const nameColumn = getByTestId("column-2");
    const ageColumn = getByTestId("column-3");

    expect(hashtagColumn).toHaveTextContent("#");
    expect(nameColumn).toHaveTextContent("name");
    expect(ageColumn).toHaveTextContent("age");
  });

  test("renders table with correct data content", () => {
    const { getByTestId } = render(<Table data={data} />);

    expect(getByTestId("row-1-attribute-1")).toHaveTextContent("1");
    expect(getByTestId("row-1-attribute-2")).toHaveTextContent("John");
    expect(getByTestId("row-1-attribute-3")).toHaveTextContent("21");

    expect(getByTestId("row-2-attribute-1")).toHaveTextContent("2");
    expect(getByTestId("row-2-attribute-2")).toHaveTextContent("Anne");
    expect(getByTestId("row-2-attribute-3")).toHaveTextContent("18");
  });
});

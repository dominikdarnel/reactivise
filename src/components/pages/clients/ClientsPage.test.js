import React from "react";
import { render, cleanup, act, wait } from "@testing-library/react";
import ClientsPage from "./ClientsPage";

beforeEach(() => {
  fetch.resetMocks();
});

afterEach(cleanup);

test("renders empty state when there is no result", async () => {
  let getByTestId;

  const mockedResponse = [];
  fetch.mockResponseOnce(JSON.stringify(mockedResponse));

  await act(async () => {
    const rendered = render(<ClientsPage />);
    getByTestId = rendered.getByTestId;
  });

  await wait(() => {
    expect(getByTestId("no-result")).toBeTruthy();
    expect(getByTestId("centered-button")).toBeTruthy();
  });
});

test("renders alert on error", async () => {
  let getByTestId;

  fetch.mockRejectOnce(new Error("fake error message"));

  await act(async () => {
    const rendered = render(<ClientsPage />);
    getByTestId = rendered.getByTestId;
  });

  await wait(() => {
    expect(getByTestId("alert-danger")).toBeTruthy();
    expect(getByTestId("no-result")).toBeTruthy();
    expect(getByTestId("centered-button")).toBeTruthy();
  });
});

// const mockedResponse = [
//   {
//     id: "id",
//     isActive: true,
//     age: 1,
//     name: "name",
//     gender: "gender",
//     company: "company",
//     email: "email",
//     phone: "phone",
//     address: "address"
//   }
// ];

// test("renders table with correct headers", () => {
//   const { getByTestId } = render(<Table data={data} />);
//   const hashtagColumn = getByTestId("column-1");
//   const nameColumn = getByTestId("column-2");
//   const ageColumn = getByTestId("column-3");

//   expect(hashtagColumn).toHaveTextContent("#");
//   expect(nameColumn).toHaveTextContent("name");
//   expect(ageColumn).toHaveTextContent("age");
// });

// test("renders table with correct data content", () => {
//   const { getByTestId } = render(<Table data={data} />);

//   expect(getByTestId("row-1-attribute-1")).toHaveTextContent("1");
//   expect(getByTestId("row-1-attribute-2")).toHaveTextContent("John");
//   expect(getByTestId("row-1-attribute-3")).toHaveTextContent("21");

//   expect(getByTestId("row-2-attribute-1")).toHaveTextContent("2");
//   expect(getByTestId("row-2-attribute-2")).toHaveTextContent("Anne");
//   expect(getByTestId("row-2-attribute-3")).toHaveTextContent("18");
// });

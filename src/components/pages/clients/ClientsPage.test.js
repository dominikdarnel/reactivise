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
    expect(getByTestId("something-went-wrong")).toBeTruthy();
  });
});

test("renders table when there are results", async () => {
  let getByTestId;

  const mockedResponse = [
    {
      id: "id",
      isActive: true,
      age: 1,
      name: "name",
      gender: "gender",
      company: "company",
      email: "email",
      phone: "phone",
      address: "address"
    }
  ];
  fetch.mockResponseOnce(JSON.stringify(mockedResponse));

  await act(async () => {
    const rendered = render(<ClientsPage />);
    getByTestId = rendered.getByTestId;
  });

  await wait(() => {
    expect(getByTestId("table")).toBeTruthy();
  });
});

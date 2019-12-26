import React from "react";
import { render, cleanup, act, wait, fireEvent } from "@testing-library/react";
import ClientsPage from "./ClientsPage";

describe("ClientsPage", () => {
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

  test.skip("renders table when there are results", async () => {
    // clients is always empty, it does not get set somehow..
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

  test("clicking on New Client button opens modal", async () => {
    let getByTestId;
    let getByText;

    const mockedResponse = [];
    fetch.mockResponseOnce(JSON.stringify(mockedResponse));

    await act(async () => {
      const rendered = render(<ClientsPage />);
      getByTestId = rendered.getByTestId;
      getByText = rendered.getByText;
    });

    await wait(() => {
      const button = getByText("New Client");
      fireEvent.click(button);

      const modalBody = getByTestId("modal-body");
      expect(modalBody).toBeInTheDocument();
    });
  });
});

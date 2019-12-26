import React from "react";
import { render, cleanup, fireEvent, wait } from "@testing-library/react";
import FormModal from "./FormModal";

describe("Modal", () => {
  afterEach(cleanup);

  test("renders closed modal", () => {
    const { getByTestId, queryByTestId } = render(<FormModal show={false} />);
    const modal = getByTestId("modal");
    expect(modal).toBeInTheDocument();
    expect(queryByTestId("modal-body")).toBeNull();
  });

  test("renders opened modal modal", () => {
    const { getByTestId } = render(<FormModal show={true} />);
    const modal = getByTestId("modal");
    const modalBody = getByTestId("modal-body");

    expect(modal).toBeInTheDocument();
    expect(modalBody).toBeInTheDocument();
  });

  test("closes opened modal when clicking on secondary button", () => {
    const { getByTestId, queryByTestId } = render(<FormModal show={true} />);
    const modal = getByTestId("modal");
    const secondaryButton = getByTestId("secondary-button");

    fireEvent.click(secondaryButton);

    wait(() => {
      expect(modal).toBeInTheDocument();
      expect(queryByTestId("modal-body")).toBeNull();
    });
  });

  test("renders button label and header label", () => {
    const { getByText } = render(
      <FormModal
        show={true}
        buttonLabel="buttonLabel"
        headerLabel="headerLabel"
      />
    );

    const headerLabel = getByText("headerLabel");
    const buttonLabel = getByText("buttonLabel");

    expect(headerLabel).toBeInTheDocument();
    expect(buttonLabel).toBeInTheDocument();
  });
});

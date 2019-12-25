import React from "react";
import { render, cleanup, fireEvent, wait } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
  afterEach(cleanup);

  test("renders closed modal", () => {
    const { getByTestId, queryByTestId } = render(<Modal open={false} />);
    const modal = getByTestId("modal");
    expect(modal).toBeInTheDocument();
    expect(queryByTestId("modal-body")).toBeNull();
  });

  test("renders opened modal modal", () => {
    const { getByTestId } = render(<Modal open={true} />);
    const modal = getByTestId("modal");
    const modalBody = getByTestId("modal-body");

    expect(modal).toBeInTheDocument();
    expect(modalBody).toBeInTheDocument();
  });

  test("closes opened modal when clicking on secondary button", () => {
    const { getByTestId, queryByTestId } = render(<Modal open={true} />);
    const modal = getByTestId("modal");
    const secondaryButton = getByTestId("secondary-button");

    fireEvent.click(secondaryButton);

    wait(() => {
      expect(modal).toBeInTheDocument();
      expect(queryByTestId("modal-body")).toBeNull();
    });
  });

  test.skip("renders button label and header label", () => {
    const { getByText } = render(
      <Modal open={true} buttonLabel="buttonLabel" headerLabel="headerLabel" />
    );

    const headerLabel = getByText("headerLabel");
    const buttonLabel = getByText("buttonLabel");

    expect(headerLabel).toBeInTheDocument();
    expect(buttonLabel).toBeInTheDocument();
  });
});

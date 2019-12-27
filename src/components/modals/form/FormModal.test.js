import React from "react";
import { render, cleanup, fireEvent, wait } from "@testing-library/react";
import FormModal from "./FormModal";

describe("Modal", () => {
  afterEach(cleanup);

  const onHide = () => jest.fn();
  const onSubmit = () => jest.fn();

  test("renders closed modal", () => {
    const { getByTestId, queryByTestId } = render(
      <FormModal show={false} onHide={onHide} onSubmit={onSubmit} />
    );
    const modal = getByTestId("modal");
    expect(modal).toBeInTheDocument();
    expect(queryByTestId("modal-body")).toBeNull();
  });

  test("renders opened modal", () => {
    const { getByTestId } = render(
      <FormModal show={true} onHide={onHide} onSubmit={onSubmit} />
    );
    const modal = getByTestId("modal");
    const modalBody = getByTestId("modal-body");

    expect(modal).toBeInTheDocument();
    expect(modalBody).toBeInTheDocument();
  });

  test("closes opened modal when clicking on secondary button", () => {
    const { getByTestId, queryByTestId } = render(
      <FormModal show={true} onHide={onHide} onSubmit={onSubmit} />
    );
    const modal = getByTestId("modal");
    const secondaryButton = getByTestId("secondary-button");

    fireEvent.click(secondaryButton);

    wait(() => {
      expect(modal).toBeInTheDocument();
      expect(queryByTestId("modal-body")).toBeNull();
    });
  });

  test("calls onHide callback on modal close", () => {
    const { getByTestId } = render(
      <FormModal show={true} onHide={onHide} onSubmit={onSubmit} />
    );
    const secondaryButton = getByTestId("secondary-button");

    fireEvent.click(secondaryButton);

    wait(() => {
      expect(onHide).toBeCalled();
    });
  });

  test("calls onSubmit callback with serialized form data", () => {
    const { getByTestId } = render(
      <FormModal show={true} onHide={onHide} onSubmit={onSubmit} />
    );
    const submitButton = getByTestId("submit-button");

    fireEvent.click(submitButton);

    wait(() => {
      expect(onSubmit).toBeCalled();
    });
  });

  test("renders button label and header label", () => {
    const { getByText } = render(
      <FormModal
        show={true}
        buttonLabel="buttonLabel"
        headerLabel="headerLabel"
        onHide={onHide}
        onSubmit={onSubmit}
      />
    );

    const headerLabel = getByText("headerLabel");
    const buttonLabel = getByText("buttonLabel");

    expect(headerLabel).toBeInTheDocument();
    expect(buttonLabel).toBeInTheDocument();
  });
});

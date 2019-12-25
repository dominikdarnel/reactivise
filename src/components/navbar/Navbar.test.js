import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("App", () => {
  afterEach(cleanup);

  test("renders component with brand name", () => {
    const { getByText } = render(<Navbar />);
    const element = getByText(/Reactivise/i);
    expect(element).toBeInTheDocument();
  });

  test("initially shows log in button", () => {
    const { getByTestId } = render(<Navbar />);
    const button = getByTestId("login-button");
    expect(button).toHaveTextContent("Log in");
  });

  test("logs in as fake user", () => {
    const { getByTestId } = render(<Navbar />);
    const logInButton = getByTestId("login-button");

    fireEvent.click(logInButton);

    const logOutButton = getByTestId("logout-button");

    expect(logOutButton).toHaveTextContent("Log out");
  });

  test("logs in as fake user", () => {
    const { getByTestId } = render(<Navbar />);
    const logInButton = getByTestId("login-button");

    fireEvent.click(logInButton);

    const currentUserText = getByTestId("current-user-text");

    expect(currentUserText).toHaveTextContent("Signed in as: Mark Otto");
  });
});

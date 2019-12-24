import React, { useState } from "react";
import BsNavbar from "react-bootstrap/Navbar";
import BsButton from "react-bootstrap/Button";
import { DiReact } from "react-icons/di";
import { IconContext } from "react-icons";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => setLoggedIn(true);
  const logOut = () => setLoggedIn(false);

  return (
    <BsNavbar bg="dark" variant="dark">
      <IconContext.Provider
        value={{
          color: "white",
          size: "3em"
        }}
      >
        <DiReact />
      </IconContext.Provider>
      <BsNavbar.Brand href="/">Reactivise</BsNavbar.Brand>
      <BsNavbar.Collapse className="justify-content-end">
        {loggedIn ? (
          <>
            <BsNavbar.Text data-testid="current-user-text">
              Signed in as: <a href="#login">Mark Otto</a>
            </BsNavbar.Text>
            <BsButton
              onClick={logOut}
              variant="outline-info"
              className="ml-2"
              data-testid="logout-button"
            >
              Log out
            </BsButton>
          </>
        ) : (
          <BsButton
            onClick={logIn}
            variant="outline-info"
            className="ml-2"
            data-testid="login-button"
          >
            Log in
          </BsButton>
        )}
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}

export default Navbar;

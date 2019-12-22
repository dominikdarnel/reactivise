import React from "react";
import BsNavbar from "react-bootstrap/Navbar";
import BsButton from "react-bootstrap/Button";
import { DiReact } from "react-icons/di";
import { IconContext } from "react-icons";

function Navbar() {
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
        <BsNavbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </BsNavbar.Text>
        <BsButton variant="outline-info" className="ml-2">
          Log out
        </BsButton>
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}

export default Navbar;

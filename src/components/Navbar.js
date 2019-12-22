import React from "react";
import BsNavbar from "react-bootstrap/Navbar";
import { DiReact } from "react-icons/di";
import { IconContext } from "react-icons";

function Navbar(props) {
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
    </BsNavbar>
  );
}

export default Navbar;

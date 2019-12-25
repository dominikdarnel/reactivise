import React from "react";
import Image from "react-bootstrap/Image";
import img from "./NoResult.png";

function NoResult(props) {
  return (
    <Image
      className="justify-content-md-center"
      src={img}
      fluid
      data-testid="no-result"
    />
  );
}

export default NoResult;

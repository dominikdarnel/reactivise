import React from "react";
import Image from "react-bootstrap/Image";
import img from "./SomethingWentWrong.png";

function NoResult(props) {
  return (
    <Image
      className="justify-content-md-center"
      src={img}
      fluid
      data-testid="something-went-wrong"
    />
  );
}

export default NoResult;

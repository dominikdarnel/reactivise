import React from "react";
import Image from "react-bootstrap/Image";
import BsRow from "react-bootstrap/Row";
import BsCol from "react-bootstrap/Col";
import image from "./NoResult.png";

function NoResult(props) {
  return (
    <BsRow className="justify-content-md-center">
      <BsCol lg="6">
        <Image className="justify-content-md-center" src={image} fluid />{" "}
      </BsCol>
    </BsRow>
  );
}

export default NoResult;

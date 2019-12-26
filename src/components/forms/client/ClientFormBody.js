import React from "react";
import uuid from "uuid";
import BsForm from "react-bootstrap/Form";

function ClientFormBody() {
  return (
    <>
      <BsForm.Group controlId="id">
        <BsForm.Label>ID:</BsForm.Label>
        <BsForm.Control readOnly />
      </BsForm.Group>

      <BsForm.Group controlId="name">
        <BsForm.Label>Name:</BsForm.Label>
        <BsForm.Control />
      </BsForm.Group>

      <BsForm.Group controlId="age">
        <BsForm.Label>Age:</BsForm.Label>
        <BsForm.Control type="number" />
      </BsForm.Group>

      <BsForm.Group controlId="gender">
        <BsForm.Label>Gender</BsForm.Label>
        <BsForm.Control as="select">
          <option disabled value>
            Please choose gender
          </option>
          <option>Male</option>
          <option>Female</option>
        </BsForm.Control>
      </BsForm.Group>

      <BsForm.Group controlId="company">
        <BsForm.Label>Company:</BsForm.Label>
        <BsForm.Control />
      </BsForm.Group>

      <BsForm.Group controlId="email">
        <BsForm.Label>Email:</BsForm.Label>
        <BsForm.Control />
      </BsForm.Group>

      <BsForm.Group controlId="phone">
        <BsForm.Label>Phone:</BsForm.Label>
        <BsForm.Control />
      </BsForm.Group>

      <BsForm.Group controlId="address">
        <BsForm.Label>Address:</BsForm.Label>
        <BsForm.Control />
      </BsForm.Group>

      <BsForm.Group controlId="isActive">
        <BsForm.Label>Active:</BsForm.Label>
        <BsForm.Check type="radio" label="No" name="isActive" id="isActive" />
        <BsForm.Check type="radio" label="Yes" name="isActive" id="isActive" />
      </BsForm.Group>
    </>
  );
}

export default ClientFormBody;

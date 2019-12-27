import React from "react";
import uuid from "uuid";
import BsForm from "react-bootstrap/Form";

function ClientFormBody() {
  return (
    <>
      <div data-testid="client-form-body" />
      <BsForm.Group controlId="id">
        <BsForm.Label>ID:</BsForm.Label>
        <BsForm.Control
          required
          readOnly
          defaultValue={uuid()}
          name="id"
          data-testid="client-form-value-id"
        />
      </BsForm.Group>

      <BsForm.Group controlId="isActive">
        <BsForm.Label>Active:</BsForm.Label>
        <BsForm.Check
          type="radio"
          label="No"
          name="isActive"
          id="isActive"
          value="false"
          required
        />
        <BsForm.Check
          type="radio"
          label="Yes"
          name="isActive"
          id="isActive"
          value="true"
          required
        />
      </BsForm.Group>

      <BsForm.Group controlId="name">
        <BsForm.Label>Name:</BsForm.Label>
        <BsForm.Control required name="name" />
      </BsForm.Group>

      <BsForm.Group controlId="age">
        <BsForm.Label>Age:</BsForm.Label>
        <BsForm.Control required type="number" name="age" />
      </BsForm.Group>

      <BsForm.Group controlId="gender">
        <BsForm.Label>Gender</BsForm.Label>
        <BsForm.Control as="select" required name="gender">
          <option disabled>Please choose gender</option>
          <option>Male</option>
          <option>Female</option>
        </BsForm.Control>
      </BsForm.Group>

      <BsForm.Group controlId="company">
        <BsForm.Label>Company:</BsForm.Label>
        <BsForm.Control required name="company" />
      </BsForm.Group>

      <BsForm.Group controlId="email">
        <BsForm.Label>Email:</BsForm.Label>
        <BsForm.Control required name="email" />
      </BsForm.Group>

      <BsForm.Group controlId="phone">
        <BsForm.Label>Phone:</BsForm.Label>
        <BsForm.Control required name="phone" />
      </BsForm.Group>

      <BsForm.Group controlId="address">
        <BsForm.Label>Address:</BsForm.Label>
        <BsForm.Control required name="address" />
      </BsForm.Group>
    </>
  );
}

export default ClientFormBody;

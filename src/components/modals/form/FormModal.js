import React, { useState } from "react";
import BsModal from "react-bootstrap/Modal";
import BsButton from "react-bootstrap/Button";
import BsForm from "react-bootstrap/Form";

function FormModal({ show, onHide, buttonLabel, headerLabel, children }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div data-testid="modal" />
      <BsModal show={show} onHide={onHide}>
        <BsForm noValidate validated={validated} onSubmit={handleSubmit}>
          <BsModal.Header closeButton>
            <BsModal.Title>{headerLabel}</BsModal.Title>
          </BsModal.Header>
          <BsModal.Body data-testid="modal-body">{children}</BsModal.Body>
          <BsModal.Footer>
            <BsButton
              variant="secondary"
              onClick={onHide}
              data-testid="secondary-button"
            >
              Close
            </BsButton>
            <BsButton type="submit" variant="success">
              {buttonLabel}
            </BsButton>
          </BsModal.Footer>
        </BsForm>
      </BsModal>
    </>
  );
}

export default FormModal;

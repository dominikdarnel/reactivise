import React, { useState } from "react";
import BsModal from "react-bootstrap/Modal";
import BsButton from "react-bootstrap/Button";
import BsForm from "react-bootstrap/Form";

function FormModal({
  show,
  onHide,
  buttonLabel,
  headerLabel,
  processSubmit,
  children
}) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
      console.log(12345678);
      processSubmit();
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

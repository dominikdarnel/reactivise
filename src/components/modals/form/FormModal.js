import React, { useState } from "react";
import serialize from "form-serialize";
import BsModal from "react-bootstrap/Modal";
import BsButton from "react-bootstrap/Button";
import BsForm from "react-bootstrap/Form";

function FormModal({
  show,
  onHide,
  buttonLabel,
  headerLabel,
  onSubmit,
  children
}) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    const serializedFormData = serialize(form, { hash: true });

    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
      setValidated(false);
      onSubmit(serializedFormData);
      onHide();
    } else {
      setValidated(true);
    }
  };

  const handleHide = () => {
    setValidated(false);
    onHide();
  };

  return (
    <>
      <div data-testid="modal" />
      <BsModal show={show} onHide={handleHide}>
        <BsForm noValidate validated={validated} onSubmit={handleSubmit}>
          <BsModal.Header closeButton>
            <BsModal.Title>{headerLabel}</BsModal.Title>
          </BsModal.Header>
          <BsModal.Body data-testid="modal-body">{children}</BsModal.Body>
          <BsModal.Footer>
            <BsButton
              variant="secondary"
              onClick={handleHide}
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

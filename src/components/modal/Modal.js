import React from "react";
import BsModal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Modal({ show, onHide, buttonLabel, headerLabel, children }) {
  return (
    <>
      <div data-testid="modal" />
      <BsModal show={show} onHide={onHide}>
        <BsModal.Header closeButton>
          <BsModal.Title>{headerLabel}</BsModal.Title>
        </BsModal.Header>
        <BsModal.Body data-testid="modal-body">{children}</BsModal.Body>
        <BsModal.Footer>
          <Button
            variant="secondary"
            onClick={onHide}
            data-testid="secondary-button"
          >
            Close
          </Button>
          <Button variant="success" onClick={onHide}>
            {buttonLabel}
          </Button>
        </BsModal.Footer>
      </BsModal>
    </>
  );
}

export default Modal;

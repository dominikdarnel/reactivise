import React, { useState, useEffect } from "react";
import BsModal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Modal({ open, buttonLabel, headerLabel, children }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    setShow(open);
  }, [open]);

  return (
    <>
      <div data-testid="modal" />
      <BsModal show={show} onHide={handleClose}>
        <BsModal.Header closeButton>
          <BsModal.Title>{headerLabel}</BsModal.Title>
        </BsModal.Header>
        <BsModal.Body data-testid="modal-body">{children}</BsModal.Body>
        <BsModal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            data-testid="secondary-button"
          >
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            {buttonLabel}
          </Button>
        </BsModal.Footer>
      </BsModal>
    </>
  );
}

export default Modal;

import React, { useState, useEffect } from "react";
import { API_URL } from "../../../constants";
import BsRow from "react-bootstrap/Row";
import BsCol from "react-bootstrap/Col";
import BsButton from "react-bootstrap/Button";
import BsAlert from "react-bootstrap/Alert";
import Table from "../../table";
import TableSkeleton from "../../loaders/tableSkeleton";
import ButtonSkeleton from "../../loaders/buttonSkeleton";
import TextSkeleton from "../../loaders/textSkeleton";
import NoResult from "../../emptyStates/noResult";
import SomethingWrong from "../../emptyStates/somethingWentWrong";
import Modal from "../../modal";

function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const openModal = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  useEffect(() => {
    setLoading(true);
    fetch(API_URL + "clients")
      .then(response => response.json())
      .then(async data => {
        await new Promise(r => setTimeout(r, 2000));
        setClients(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {error && (
        <>
          <BsAlert className="mt-2" variant="danger" data-testid="alert-danger">
            Oops, something went wrong here!
          </BsAlert>
          <BsRow className="justify-content-md-center">
            <BsCol lg="6">
              <SomethingWrong />
            </BsCol>
          </BsRow>
        </>
      )}

      {loading && (
        <>
          <BsRow className="justify-content-md-center">
            <BsCol lg="2">
              <TextSkeleton lassName="mt-3" />
            </BsCol>
          </BsRow>
          <BsRow className="pb-2">
            <BsCol md={{ span: 2, offset: 11 }}>
              <ButtonSkeleton />
            </BsCol>
          </BsRow>
          <TableSkeleton />
        </>
      )}

      {!loading && clients.length === 0 && !error && (
        <>
          <BsRow className="justify-content-md-center">
            <BsCol lg="2">
              <h1 className="mt-3 display-3">Clients</h1>
            </BsCol>
          </BsRow>
          <BsRow className="justify-content-md-center">
            <BsCol lg="6">
              <NoResult />
            </BsCol>
          </BsRow>
          <BsRow className="pb-2">
            <BsCol
              className="text-center"
              lg={{ span: 6, offset: 3 }}
              data-testid="centered-button"
            >
              <BsButton variant="success" size="lg">
                Create Client
              </BsButton>
            </BsCol>
          </BsRow>
        </>
      )}

      {!loading && clients.length > 1 && !error && (
        <>
          <BsRow className="justify-content-md-center">
            <BsCol lg="2">
              <h1 className="mt-3 display-3">Clients</h1>
            </BsCol>
          </BsRow>
          <BsRow className="pb-2">
            <BsCol md={{ span: 2, offset: 11 }}>
              <BsButton onClick={openModal} variant="success">
                New Client
              </BsButton>
            </BsCol>
          </BsRow>
          <Table data={clients} />
        </>
      )}

      <Modal
        show={modalShow}
        buttonLabel="Save Client"
        headerLabel="New Client"
        onHide={closeModal}
      >
        From
      </Modal>
    </>
  );
}

export default ClientsPage;

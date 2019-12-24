import React, { useState, useEffect } from "react";
import Table from "../table";
import BsRow from "react-bootstrap/Row";
import BsCol from "react-bootstrap/Col";
import BsButton from "react-bootstrap/Button";
import BsSpinner from "react-bootstrap/Spinner";
import BsAlert from "react-bootstrap/Alert";
import { API_URL } from "./../../constants";

function ClientsPage(props) {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL + "clients")
      .then(response => response.json())
      .then(data => {
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
        <BsAlert className="mt-2" variant="danger">
          Oops, something went wrong here!
        </BsAlert>
      )}
      <BsRow className="justify-content-md-center">
        <BsCol lg="2">
          <h1 className="mt-3 display-3">Clients</h1>
        </BsCol>
      </BsRow>
      <BsRow className="pb-2">
        <BsCol md={{ span: 2, offset: 11 }}>
          <BsButton variant="success">Create Client</BsButton>
        </BsCol>
      </BsRow>
      {loading && <BsSpinner animation="grow" />}
      {clients.length > 1 && !loading && !error && <Table data={clients} />}
    </>
  );
}

export default ClientsPage;

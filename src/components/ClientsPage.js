import React, { useState, useEffect } from "react";
import Table from "./Table";
import BsRow from "react-bootstrap/Row";
import BsCol from "react-bootstrap/Col";
import BsButton from "react-bootstrap/Button";
import { API_URL } from "../constants";

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
      {error && "Error..."}
      <BsRow className="justify-content-md-center">
        <BsCol lg="2">
          <h1>Clients</h1>
        </BsCol>
      </BsRow>
      <BsRow className="pb-2">
        <BsCol md={{ span: 2, offset: 11 }}>
          <BsButton variant="success">Create Client</BsButton>
        </BsCol>
      </BsRow>
      {loading && "Loading"}
      {clients.length > 1 && !loading && !error && <Table data={clients} />}
    </>
  );
}

export default ClientsPage;

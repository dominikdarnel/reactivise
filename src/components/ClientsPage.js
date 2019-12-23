import React, { useState, useEffect } from "react";
import Table from "./Table";
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
      <h1>Clients</h1>
      {loading && "Loading"}
      {error && "Error..."}
      {clients.length > 1 && !loading && !error && <Table data={clients} />}
    </>
  );
}

export default ClientsPage;

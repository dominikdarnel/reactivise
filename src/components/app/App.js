import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BsContainer from "react-bootstrap/Container";
import Navbar from "../navbar";
import ClientsPage from "../pages/clients";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <BsContainer fluid="true">
        <ClientsPage />
      </BsContainer>
    </>
  );
}

export default App;

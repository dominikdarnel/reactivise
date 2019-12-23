import React from "react";
import BsTable from "react-bootstrap/Table";

function Table({ data }) {
  const keys = Object.keys(data[0]);

  return (
    <BsTable striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          {keys.map((key, index) => {
            return <th key={index}>{key}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((record, i) => {
          return (
            <tr key={i + 1}>
              <td>{i}</td>
              {Object.values(record).map((attribute, j) => {
                return <td key={j}>{attribute}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </BsTable>
  );
}

export default Table;
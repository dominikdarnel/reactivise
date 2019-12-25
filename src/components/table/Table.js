import React from "react";
import BsTable from "react-bootstrap/Table";

function Table({ data }) {
  const keys = Object.keys(data[0]);

  return (
    <BsTable striped bordered hover data-testid="table">
      <thead>
        <tr>
          <th data-testid={`column-${1}`}>#</th>
          {keys.map((key, index) => {
            return (
              <th key={index} data-testid={`column-${index + 2}`}>
                {key}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((record, i) => {
          return (
            <tr key={i}>
              <td data-testid={`row-${i + 1}-attribute-${1}`}>{i + 1}</td>
              {Object.values(record).map((attribute, j) => {
                return (
                  <td key={j} data-testid={`row-${i + 1}-attribute-${j + 2}`}>
                    {attribute.toString()}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </BsTable>
  );
}

export default Table;

import React from "react";
import './Table.css'

const Table = ({ netIncomes }) => {
  return (
    <div className="table-container">
    <table className="center-table">
      <thead>
        <tr>
          <th>Marca</th>
          <th>Ingresos Brutos</th>
        </tr>
      </thead>
      <tbody>
        {netIncomes.map((item, index) => (
          <tr key={index}>
            <td>{item.brand}</td>
            <td>{item.income}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;

import React from "react";
import data from "../data/data.json";

const renderHeader = (columns) => {
  return columns.map((column, index) => {
    return (
      <th
        key={index}
        style={{
          fontWeight: column.font_weight,
          fontStyle: column.font_style,
          textAlign: column.text_align,
          fontSize: `${column.font_size}px`,
        }}
        colSpan={column.children.length ? column.children.length : 1}
      >
        {column.name}{" "}
        {column.children.length > 0 && (
          <tr> {renderHeader(column.children)} </tr>
        )}{" "}
      </th>
    );
  });
};

const renderRows = (rows) => {
  return rows.map((row, index) => {
    return (
      <tr key={index}>
        {" "}
        {row.children.map((cell, cellIndex) => (
          <td
            key={cellIndex}
            style={{
              fontWeight: cell.font_weight,
              fontStyle: cell.font_style,
              textAlign: cell.text_align,
              fontSize: `${cell.font_size}px`,
            }}
          >
            {cell.name}{" "}
          </td>
        ))}{" "}
      </tr>
    );
  });
};

const DynamicTable = () => {
  const columns = data.filter((item) => item.place === "top");
  const rows = data.filter((item) => item.place === "left");

  return (
    <table>
      <thead>
        <tr> {renderHeader(columns)} </tr>{" "}
      </thead>{" "}
      <tbody> {renderRows(rows)} </tbody>{" "}
    </table>
  );
};

export default DynamicTable;

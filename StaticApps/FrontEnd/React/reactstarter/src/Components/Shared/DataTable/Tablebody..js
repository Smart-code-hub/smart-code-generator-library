import React from "react";

export default function Tablebody({
  items,
  columns,
  OnEditItem,
  OnDeleteItem
}) {
  return (
    <tbody>
      {items.map((item, i) => {
        return (
          <tr>
            <td>{i + 1}</td>
            {columns.map(a => (
              <td>{item[a]}</td>
            ))}
            <td>
              <button onClick={() => OnEditItem(item)} className="btn">
                <i className="fa fa-pencil text-success"></i>
              </button>
              <button onClick={() => OnDeleteItem(item)} className="btn">
                <i className="fa fa-trash text-danger"></i>
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

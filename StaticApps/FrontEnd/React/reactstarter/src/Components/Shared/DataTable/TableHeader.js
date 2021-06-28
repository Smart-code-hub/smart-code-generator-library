import React from "react";
import V from "voca";

export default function TableHeader({ columns }) {
  return (
    <thead>
      <tr>
        <th>#</th>
        {columns.map(a => (
          <th>{V.titleCase(a)}</th>
        ))}
        <th>Action</th>
      </tr>
    </thead>
  );
}

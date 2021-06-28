// ES6

import React, { Component, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import TableHeader from "./TableHeader";
import Tablebody from "./Tablebody.";
import TablePagination from "./Pagination";

// Basic Example

function DataTableWrapper({ items, OnEditItem, OnDeleteItem }) {
  const [columns, setColumns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [itemsToShow, setItemsToShow] = useState([]);
  useEffect(() => {
    const itemsToSlice = [...items];
    //1 0
    // 2 9
    setItemsToShow(itemsToSlice.splice((currentPage - 1) * pageSize, pageSize));
    return () => {};
  }, [currentPage, pageSize, items]);

  useEffect(() => {
    const col = Object.keys(items[0]).filter(n => !n.startsWith("_"));
    setColumns(col);
    return () => {};
  }, []);

  return itemsToShow && itemsToShow.length > 0 ? (
    <>
      <Table borderless hover size="sm">
        <TableHeader columns={columns}></TableHeader>
        <Tablebody
          items={itemsToShow}
          columns={columns}
          OnEditItem={OnEditItem}
          OnDeleteItem={OnDeleteItem}
        />
      </Table>
      <TablePagination
        activePage={currentPage}
        noOfPages={Math.round(items.length / pageSize)}
        onPageChange={setCurrentPage}
      ></TablePagination>
    </>
  ) : (
    "No Records"
  );
}

export default DataTableWrapper;

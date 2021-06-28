import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
export default function TablePagination({
  noOfPages,
  activePage,
  onPageChange
}) {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    setPages(Array.from(Array(noOfPages).keys()).map(a => a + 1));
    return () => {};
  }, [noOfPages]);
  return (
    <Pagination size="sm">
      {pages &&
        pages.length &&
        pages.map(number => {
          return (
            <Pagination.Item
              onClick={() => onPageChange(number)}
              key={number}
              active={number === activePage}
            >
              {number}
            </Pagination.Item>
          );
        })}
    </Pagination>
  );
}

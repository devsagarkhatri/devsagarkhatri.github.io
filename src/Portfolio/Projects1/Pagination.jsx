import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemCount, pageSize, currentPage, onPageChange } = props;

  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination pagination-sm bg-transparent">
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage
                ? "page-item bg-transparent active"
                : "page-item bg-transparent"
            }
          >
            <a className={page === currentPage ? "page-link text-light" : "page-link text-dark"} onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(false); // Reset isClicked when the page changes
  }, [page]);

  const handlePaginationClick = () => {
    setIsClicked(true);
  };

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
            onClick={handlePaginationClick}
          >
            <Pagination.Item active={x + 1 === page} disabled={isClicked}>
              {x + 1}
            </Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;

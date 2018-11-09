import React from 'react';
import ReactPaginate from 'react-paginate';

const PaginationBar = (props) => (
  <div className='pagination'>
    <ReactPaginate 
      previousLabel={'<'}
      nextLabel={'>'}
      pageCount={5}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
    />
  </div>
);

export default PaginationBar;

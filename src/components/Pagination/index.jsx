import style from './Pagination.module.scss';
import React from 'react';
import ReactPaginate from 'react-paginate';

export default function Pagitanion({setPage}) {
  
  return (
    <div className={style.wrapper}>
        <ReactPaginate
          className={style.pagination}
          breakLabel='...'
          nextLabel='>'
          onPageChange={(event) => {setPage(event.selected + 1)}}
          pageRangeDisplayed={4}
          pageCount={3}
          previousLabel='<'
          renderOnZeroPageCount={null}
        />
    </div>
  );
}

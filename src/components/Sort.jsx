import React from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import { v4 } from 'uuid';

export default function Sort() {
  const [sortType, setSortType] = React.useState();
  const sortBy = ['популярности', 'цене', 'алфавиту'];
  let sorted = '';
  return (
    <div className='sort'>
      <div className='sort__label'>
        <TiArrowSortedDown className='ti-arrow-down' />
        <b>Сортировка по:</b>
        <span>популярности</span>
      </div>
      <div className='sort__popup'>
        <ul>
          {sortBy.map((sortName, i) => (
            <li
              key={v4()}
              onClick={() => setSortType(i)}
              className={sortType === i ? 'active' : ''}>
              {sortName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import React from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import { v4 } from 'uuid';

export default function Sort() {
  const [sortType, setSortType] = React.useState(0);
  const sortBy = ['популярности', 'цене', 'алфавиту'];
  const [open, setOpen] = React.useState(false);
  const selectedType = sortBy[sortType];
  const onSelectSort = (i) => {
    setSortType(i);
    setOpen(false);
  };
  return (
    <div className='sort'>
      <div className='sort__label'>
        <TiArrowSortedDown className='ti-arrow-down' />
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{selectedType}</span>
      </div>
      {open && (
        <div className='sort__popup'>
          <ul>
            {sortBy.map((sortName, i) => (
              <li
                key={v4()}
                onClick={() => onSelectSort(i)}
                className={sortType === i ? 'active' : ''}>
                {sortName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

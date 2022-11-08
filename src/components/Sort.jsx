import React from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { setSortType } from '../redux/slices/filterSlice';

export default function Sort() {
  const dispatch = useDispatch()
  const sort = useSelector(state => state.filter.sort)
  const orderAsc = '&order=asc';
  const orderDesc = '&order=desc'
  const sortBy = [
    { name: 'популярности', sortProperty: 'rating' + orderDesc },
    { name: 'цене ↑', sortProperty: 'price' + orderAsc },
    { name: `цене ↓ `, sortProperty: 'price' + orderDesc },
    { name: 'алфавиту', sortProperty: 'title' + orderAsc },
  ];
  const [open, setOpen] = React.useState(false);
  const onSelectSort = (obj) => {
    dispatch(setSortType(obj));
    setOpen(false);
  };
  return (
    <div className='sort'>
      <div className='sort__label'>
        <TiArrowSortedDown className='ti-arrow-down' />
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      {open && (
        <div className='sort__popup'>
          <ul>
            {sortBy.map((obj) => (
              <li
                key={v4()}
                onClick={() => onSelectSort(obj)}
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { useRef } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { setSortType } from '../redux/slices/filterSlice';

const orderAsc = '&order=asc';
const orderDesc = '&order=desc';
export const sortBy = [
  { name: 'популярности', sortProperty: 'rating' + orderDesc },
  { name: 'цене ↑', sortProperty: 'price' + orderAsc },
  { name: `цене ↓ `, sortProperty: 'price' + orderDesc },
  { name: 'алфавиту', sortProperty: 'title' + orderAsc },
];

export default function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const [open, setOpen] = React.useState(false);
  const onSelectSort = (obj) => {
    dispatch(setSortType(obj));
    setOpen(false);
  };

  const sortRef = useRef();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setOpen(false);
        console.log('click out');
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div ref={sortRef} className='sort'>
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

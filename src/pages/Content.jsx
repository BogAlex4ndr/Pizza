import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import ReactPaginate from 'react-paginate';
import Categories from '../components/Categories';
// import Pagitanion from '../components/Pagination';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import { setCategoryId } from '../redux/slices/filterSlice';
// import pizzas from '../assets/pizzas.json';

export default function Content() {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  // const [categoryId, setCategoryId] = React.useState();
  // const [sortType, setSortType] = React.useState({ name: 'популярности', sortProperty: 'rating' });
  // const [curentPage, setCurentPage] = React.useState(1)

  return (
    <div className='content'>
      <div className='content__top'>
        <Categories value={categoryId} onClickCategory={onChangeCategory} />
        <Sort />
      </div>
      <PizzaBlock categoryValue={categoryId} sortValue={sortType} />
      {/* <Pagitanion page={curentPage} setPage={number => {setCurentPage(number)}}/> */}
    </div>
  );
}

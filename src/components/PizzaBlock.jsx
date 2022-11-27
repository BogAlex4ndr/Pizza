import React from 'react';
import PizzaItem from './PizzaItem';
import axios from 'axios';
// import pizzas from '../assets/pizzas.json';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import Skeleton from './Skeleton';
import { SearchContext } from '../App';
import { setCategoryId, setFilter } from '../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { sortBy } from './Sort';

export default function PizzaBlock({ categoryValue, page, sortValue }) {
  // const [piza, SetPiza] = React.useState(pizzas);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { searchValue } = React.useContext(SearchContext);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);

  // React.useEffect(() => {
  //   const queryString = qs.stringify({
  //     categoryValue,
  //     sortType,
  //   });
  //   navigate(`?${queryString}`);
  // }, [categoryValue, sortType]);

  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));
  //     const sort = sortBy.find((obj) => obj.sortProperty === params.sortProperty);
  //     dispatch(setFilter({ ...params, sort }));
  //   }
  // }, []);

  React.useEffect(() => {
    setIsLoading(true);
    const category = categoryValue > 0 ? `category=${categoryValue}` : '';
    const sorting = sortType;
    const search = searchValue ? `&search=${searchValue}` : '';
    // fetch(
    //   `https://635fa8b13e8f65f283b84346.mockapi.io/items?${category}&sortBy=${sorting}${search}`,
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((arr) => {
    //     setItems(arr);
    //     setIsLoading(false);
    //   });
    axios
      .get(
        `https://635fa8b13e8f65f283b84346.mockapi.io/items?${category}&sortBy=${sorting}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryValue, sortType, searchValue, page]);

  return (
    <div className='content__items'>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='pizza__wrapper'>
        {isLoading
          ? [...new Array(5)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaItem key={v4()} {...obj} />)}
      </div>
    </div>
  );
}

import React from 'react';
import PizzaItem from './PizzaItem';
import axios from 'axios';
// import pizzas from '../assets/pizzas.json';
import { v4 } from 'uuid';
import Skeleton from './Skeleton';
import { SearchContext } from '../App';
import { useSelector } from 'react-redux';

export default function PizzaBlock({ categoryValue, page }) {
  // const [piza, SetPiza] = React.useState(pizzas);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { searchValue } = React.useContext(SearchContext);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);

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

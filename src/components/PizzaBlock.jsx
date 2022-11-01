import React from 'react';
import PizzaItem from './PizzaItem';
// import pizzas from '../assets/pizzas.json';
import { v4 } from 'uuid';
import Skeleton from './Skeleton';

export default function PizzaBlock() {
  // const [piza, SetPiza] = React.useState(pizzas);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(() => {
    fetch('https://635fa8b13e8f65f283b84346.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false)
      });
  }, []);

  return (
    <div className='content__items'>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='pizza__wrapper'>
        {isLoading ? [...new Array(4)].map((_, index) => <Skeleton key={index}/>) : items.map((obj) => (
          <PizzaItem key={v4()} {...obj} />))}
        {/* {items.map((obj) => (
          <PizzaItem key={v4()} {...obj} />
        ))} */}
      </div>
    </div>
  );
}

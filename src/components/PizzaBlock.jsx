import React from 'react';
import PizzaItem from './PizzaItem';
import pizzas from '../assets/pizzas.json';
import { v4 } from 'uuid';

export default function PizzaBlock() {
  const [piza, SetPiza] = React.useState(pizzas);
  return (
    <div className='content__items'>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='pizza__wrapper'>
        {piza.map((obj) => (
          <PizzaItem key={v4()} {...obj} />
        ))}
      </div>
    </div>
  );
}

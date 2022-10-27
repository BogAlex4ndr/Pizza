import React from 'react';
import Categories from './Categories';
import PizzaBlock from './PizzaBlock';
import Sort from './Sort';
import pizzas from '../assets/pizzas.json';

export default function Content() {
  const pizzasList = [];
  return (
    <div className='content'>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <PizzaBlock/>
    </div>
  );
}

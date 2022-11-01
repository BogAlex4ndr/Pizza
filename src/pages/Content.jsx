import React from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
// import pizzas from '../assets/pizzas.json';

export default function Content() {
  return (
    <div className='content'>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <PizzaBlock />
    </div>
  );
}

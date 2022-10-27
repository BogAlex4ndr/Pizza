import React from 'react';
import pizza from '../assets/img/logo-pizza.svg';
import { BsCart } from 'react-icons/bs';

export default function Header(props) {
  return (
    <div>
      <div className='header'>
        <div className='header__wrapper'>
          <div className='logo-conteiner'>
            <div className='header__logo'>
              <img src={pizza} alt='pizza logo' />
            </div>
            <div className='header__title'>
              <h1>React Pizza</h1>
              <p>the best pizza</p>
            </div>
          </div>
          <div className='header__cart'>
            <a href='/cart' className='button button--cart'>
              <span>price</span>
              <div className='button__delimiter'></div>
              <BsCart />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import pizza from '../assets/img/logo-pizza.svg';
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Search from './Search';
import { useSelector } from 'react-redux';

export default function Header(props) {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <div>
      <div className='header'>
        <div className='header__wrapper'>
          <Link to='/'>
            <div className='logo-conteiner'>
              <div className='header__logo'>
                <img src={pizza} alt='pizza logo' />
              </div>
              <div className='header__title'>
                <h1>React Pizza</h1>
                <p>the best pizza</p>
              </div>
            </div>
          </Link>
          <Search />
          <div className='header__cart'>
            <Link to='/cart' className='button button--cart'>
              <span>{totalPrice} $</span>
              <div className='button__delimiter'></div>
              <BsCart className='button-cart-icon' />
              <span>{totalCount}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

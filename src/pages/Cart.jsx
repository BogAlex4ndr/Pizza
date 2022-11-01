import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <>
      <div className='cart__wrapper'>
        <div className='cart-head'>
          <div className='cart-head-left'>
            <BsCart2 className='cart-head-left-icon' />
            <h2 className='cart-title'>Корзина</h2>
          </div>
          <button className='cart-remove-button'>
            <RiDeleteBin6Line className='cart-remove-button-icon' />
            Oчистить корзину
          </button>
        </div>
        <div className='cart-item-conteiner'>
          <div className='cart__item'>
            <div className='cart__item-image'>
              <img src='' alt='Pizza' />
            </div>
            <div>
              <div className='cart__item-title'>Сырный цыпленок</div>
              <div className='cart__item-describe'>тонкое тесто, 26 см.</div>
            </div>
          </div>
          <div className='cart__counter'>
            <button className='cart-button button-pluss'>+</button>
            <span>count</span>
            <button className='cart-button button-minus'>-</button>
          </div>
          <div className='cart-summa'>summ</div>
          <button className='cart-delet-item'>X</button>
        </div>
        <div className='cart__info'>
          <div className='cart__info-amount'>Всего пицц: 3 шт.</div>
          <div className='cart--info-summa'>Сумма заказа: 90 $</div>
        </div>
        <div className='cart__bottom'>
          <Link to='/'><button className='button-back'>Back</button></Link>
          <button className='button payment'>Оплатить сейчас</button>
        </div>
      </div>
    </>
  );
}

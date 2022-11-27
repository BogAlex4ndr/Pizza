import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import { clearItems } from '../redux/slices/cartSlice';
import CartEmpty from '../components/CartEmpty';

export default function Cart(props) {
  const dispatch = useDispatch();
  const {totalPrice ,items} = useSelector((state) => state.cart);
  const onClickClear = () => {
    dispatch(clearItems());
  };
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  if (!totalCount) {
    return <CartEmpty/>
  }
  return (
    <>
      <div className='cart__wrapper'>
        <div className='cart-head'>
          <div className='cart-head-left'>
            <BsCart2 className='cart-head-left-icon' />
            <h2 className='cart-title'>Корзина</h2>
          </div>
          <button onClick={onClickClear} className='cart-remove-button'>
            <RiDeleteBin6Line className='cart-remove-button-icon' />
            Oчистить корзину
          </button>
        </div>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}

        <div className='cart__info'>
          <div className='cart__info-amount'>Всего: {totalCount} шт.</div>
          <div className='cart--info-summa'>Сумма заказа: {totalPrice}$</div>
        </div>
        <div className='cart__bottom'>
          <Link to='/'>
            <button className='button-back'>Back</button>
          </Link>
          <button className='button payment'>Оплатить сейчас</button>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(
      addItem({
        id: props.id,
      }),
    );
  };
  const onClickMinus = () => {
    dispatch(minusItem(props.id));
  };
  const onClickRemove = () => {
    dispatch(removeItem(props.id));
  };
  return (
    <div className='cart-item-conteiner'>
      <div className='cart__item'>
        <div className='cart__item-image'>
          <img src={props.image} alt='Pizza' />
        </div>
        <div>
          <h4 className='cart__item-title'>{props.title}</h4>
          <div className='cart__item-describe'>{props.type}, {props.size} см.</div>
        </div>
      </div>
      <div className='cart__counter'>
        <button onClick={onClickMinus} className='cart-button button-minus'>
          <h2>-</h2>
        </button>
        <span>{props.count}</span>
        <button onClick={onClickPlus} className='cart-button button-pluss'>
          <h2>+</h2>
        </button>
      </div>
      <div className='cart-summa'>{props.price * props.count} $</div>
      <button onClick={onClickRemove} className='cart-delet-item'>
        X
      </button>
    </div>
  );
};

export default CartItem;

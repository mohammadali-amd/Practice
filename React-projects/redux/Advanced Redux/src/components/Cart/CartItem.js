import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../store/cart/cartSlice';

import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, title, quantity, total, price } = props.item;

  const addToCartHandler = () => {
    dispatch(
      addItemToCart({
        id,
        title,
        price,
      })
    );
  }

  const removeHandler = () => {
    dispatch(
      removeItemFromCart(id)
    );
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

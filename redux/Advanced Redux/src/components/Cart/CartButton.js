import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../store/ui/uiSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggle())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

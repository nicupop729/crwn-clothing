import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import './CardDropdown.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
            <CartItem key={uuidv4()} cartItem={cartItem} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;

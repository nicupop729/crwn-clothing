import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';

import { CartContext } from '../../contexts/Cart';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import './Checkout.scss';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={uuidv4()} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${cartTotal}</div>
    </div>
  );
};

export default Checkout;

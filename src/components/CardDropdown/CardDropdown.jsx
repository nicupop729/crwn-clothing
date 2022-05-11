import React from 'react';

import Button from '../Button/Button';

import './CardDropdown.scss';

const CartDropdown = () => (
  <div className="cart-dropdown-container">
    <div className="cart-items" />
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;

import { createContext, useState, useEffect } from 'react';

const addCartitem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id,
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cardItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cardItemToRemove.id,
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cardItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cardItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0,
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0,
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartitem(cartItems, itemToAdd));
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  }

  const clearItemFromCart = (itemToClear) => {
    setCartItems(clearCartItem(cartItems, itemToClear));
  };

  
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

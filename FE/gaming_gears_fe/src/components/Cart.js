// Cart.js
import React from 'react';
import { useCart } from './CartContext';
import './Cart.css'; // Import a separate CSS file for styling

function Cart() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <ul className="cart-list">
        {cart.map((product) => (
          <li key={product.id} className="cart-item">
            <span className="cart-item-name">{product.name}</span>
            <span className="cart-item-price">${product.price}</span>
            <button className="remove-button" onClick={() => removeFromCart(product.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="cart-total">Total: ${totalPrice}</p>
    </div>
  );
}

export default Cart;

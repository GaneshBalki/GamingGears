import React, { useState, useEffect } from 'react';
import './Cart.css'; // Import a separate CSS file for styling
import CustomerService from '../service/CustomerService';
import { useUser } from './UserContext';

function Cart(props) {
  const [prodarr, setProdarr] = useState([]);
  const [searcharr, setSearcharr] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const { custid } = useUser();


  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    CustomerService.getCart(custid)
      .then((response) => {
        setProdarr([...response.data]);
        setSearcharr([...response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <ul className="cart-list">
        {searcharr.map((product) => (
          <li key={product.id} className="cart-item">
            <span className="cart-item-name">{product.name}</span>
            <span className="cart-item-price">${product.price}</span>
            <button
              className="remove-button"
              onClick={() => props.removeFromCart(product.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="cart-total">Total: ${props.totalPrice}</p>
    </div>
  );
}

export default Cart;

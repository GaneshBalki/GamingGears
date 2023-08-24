// OrderHistory.js
import { useState,useEffect } from 'react';
import React from 'react';
import { useUser } from '../UserContext';
import CustomerService from '../../service/CustomerService';
import './OrderHistory.css'
function OrderHistory() {
const {custid}=useUser();


const [orders, setOrders] = useState([]);

useEffect(() => {
    console.log("product id " + custid);
    CustomerService.getOrders(custid)
        .then((response) => {
            setOrders([...response.data]);
        })
        .catch((error) => {
            alert("Error in purchase")
        });
}, [custid]);
  return (
    <div className="order-history-container">
      <h1 className="order-history-title">Order History</h1>
      <ul className="order-list">
        {orders.map((order, index) => (
          <li key={index} className="order-item">
            <p className="order-date">Order ID: {order.proid.proname}</p>
            <p className="order-date">Adderess: {order.address}</p>
          
            <p className="order-total">Total: ${order.price}</p>
            {/* Add more order details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderHistory;

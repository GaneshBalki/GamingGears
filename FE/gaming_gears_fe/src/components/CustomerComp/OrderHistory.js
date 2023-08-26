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

if(!orders.length >0){
  return(
  <div className="empty-orders">
      <h2>You haven't purchased anything yet</h2>
      <p>Explore our products and start shopping!</p>
  </div>)
}

  return (
    <div className="order-history-container" style={{width:'100%',background: '#f8f9fa',}}>
      <h1 className="order-history-title">Order History</h1>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item" >
            <p className="order-date">Order : <br/>{order.proid.proname}</p>
            <p className="order-date">Adderess: <br/>{order.address}</p>
             {order.status==0?(
              <p className="order-date">Delivery Status:<br/>Delivery in Process</p>
             ):
             (
              <p className="order-date">Delivery Status:<br/>Order Delivered</p>
             )}
            <p className="order-total">Total: &#8377;  {order.price}</p>
         
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;

import React, { useState, useEffect } from 'react';
import { useUser } from '../UserContext';
import { useNavigate, useParams } from 'react-router-dom';
import ProductService from '../../service/ProductService';

import axios from 'axios';
import './BuyNow.css'
function BuyNow() {
    const navigate = useNavigate();
    const { custid } = useUser();
    const { proid } = useParams();
    const [product, setProduct] = React.useState(null);
    const [address, setAddress] = useState("")
    const handleChange = (e) => {
        setAddress(e.target.value);
    };
    useEffect(() => {
        if(custid>0){
            console.log("product id " + proid);
            ProductService.getProductById(proid)
                .then((response) => {
                    setProduct(response.data);
                })
                .catch((error) => {
                    alert("Error in purchase")
                });
        }else{
            navigate("/customerlogin")
        }
       
    }, [proid]);

    async function handlePurchase() {
        try {
            console.log("product adding to cart " + custid);
            var response = await axios.post("http://localhost:8282/buy/now", {
                "custid": custid,
                "proid": proid,
                "amount": product.price,
                "status": 0,
                "address":address
            });


            if (response.status === 200) {
                console.log("response data");
                navigate("/order/history")
            } else {

                console.log('Authentication failed');
            }
        } catch (error) {
            console.error(error);
        }
        alert('Thank you for your purchase!');
    }

    return (
        <div className="buy-now-container" style={{width:'100%'}}>
        <h1 className="buy-now-title">Buy Now</h1>
        <p className="buy-now-description"></p>

        {product && (
            <div className="product-details">
                <h3 className="product-name">Name :</h3>
                <h4 className="product-name">{product.proname}</h4>
                <p className="product-price">Price: ₹ {product.price}</p>
            </div>
        )}

        {/* Address Input */}
        <div className="address-input">
            <label htmlFor="address">Address:</label>
            <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={handleChange}
            />
        </div>

        {/* Add a button or form to complete the purchase */}
        <div className="purchase-options">
            <button className="buy-button" onClick={handlePurchase}>Buy Now</button>
        </div>
    </div>

    );
}


export default BuyNow;

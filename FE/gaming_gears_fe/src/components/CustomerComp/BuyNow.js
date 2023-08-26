import React, { useState, useEffect } from 'react';
import { useUser } from '../UserContext';
import { useNavigate, useParams } from 'react-router-dom';
import ProductService from '../../service/ProductService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './BuyNow.css'
function BuyNow() {
    const navigate = useNavigate();
    const { custid } = useUser();
    const { proid } = useParams();
    const [product, setProduct] = React.useState(null);
    const [address, setAddress] = useState("");
    const [paymentMode, setPaymentMode] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [cvv, setCVV] = useState("");

    const handlePaymentModeChange = (e) => {
        setPaymentMode(e.target.value);
    };


    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    };

    const handleExpirationDateChange = (e) => {
        setExpirationDate(e.target.value);
    };

    const handleCVVChange = (e) => {
        setCVV(e.target.value);
    };


    const handleChange = (e) => {
        setAddress(e.target.value);
    };
    useEffect(() => {
        if (custid > 0) {
            console.log("product id " + proid);
            ProductService.getProductById(proid)
                .then((response) => {
                    setProduct(response.data);
                })
                .catch((error) => {
                    alert("Error in purchase")
                });
        } else {
            navigate("/customerlogin")
        }

    }, [proid]);


    async function handlePurchase() {

        try {
            console.log("product adding to cart " + custid);


            var response = await axios.post("http://localhost:8282/buy/now", {
                "custid": custid,
                "proid": proid,
                "price": product.price,
                "status": 0,
                "address": address
            });


            if (response.status === 200) {
                console.log("response data");
                navigate("/order/history")
                if (paymentMode == "Online") {
                    toast.success("Payment Successful,Thanks For Purchase !!!", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                    });
                } else {
                    toast.success("Thanks For Purchase !!!", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                    });
                }

            } else {

                console.log('Authentication failed');
            }
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div className="buy-now-container" style={{ background: '#f8f9fa', height: 'auto',width:'100%', color: 'darkgray' }}>
            <h1 className="buy-now-title">Buy Now</h1>
            <p className="buy-now-description"></p>

            {product && (
                <div className="product-details">
                    <h3 className="product-name">Product Name :</h3>
                    <h4 className="product-name">{product.proname}</h4>
                    <p className="product-price">Price: ₹ {product.price}</p>
                </div>
            )}
            <form onSubmit={handlePurchase} >
            <label>Select Payment</label><br></br>
                    <select
                        style={{
                            width: '40%',
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            backgroundColor: '#fff',
                            color: '#333',
                            outline: 'none',
                            textAlign: 'center'
                        }}
                        onChange={handlePaymentModeChange}>
                       
                        <option value="COD">COD</option>
                        <option value="Online">Online</option>
                    </select>
                <div className="address-input" style={{textAlign:'left'}}>
                    
                    {paymentMode === "Online" && ( // Show card details input only for Online payment
                        <div>
                            <label htmlFor="cardNumber">Card Number:</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                required={true}
                            />
                            <label htmlFor="expirationDate">Expiration Date:</label>
                            <input
                                type="text"
                                id="expirationDate"
                                name="expirationDate"
                                value={expirationDate}
                                onChange={handleExpirationDateChange}
                                required={true}
                            />
                            <label htmlFor="cvv">CVV:</label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={cvv}
                                onChange={handleCVVChange}
                                required={true}
                            />
                        </div>
                    )}
                    <label htmlFor="address">Address:</label>

                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={address}
                        onChange={handleChange}
                        required={true}
                    />

                </div>


                <div className="purchase-options">
                    <button className="buy-button" type='submit' >Buy Now</button>
                </div>
            </form>

        </div>

    );
}


export default BuyNow;

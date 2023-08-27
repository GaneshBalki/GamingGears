import React, { useState } from 'react';
import './DeliveryAddress.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
import { toast } from 'react-toastify'; // Import toast for notifications
import { useAddress } from '../AdressContext';

const DeliveryAddressPage = () => {
  const { setAddress } = useAddress()
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    pincode: '',
    locality: '',
    street: '',
    city: '',
    state: '',
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardHolderName: '',
    expirationDate: '',
    cvv: '',
  });

  const [currentStep, setCurrentStep] = useState('address');

  // Define paymentMode in the component state
  const [paymentMode, setPaymentMode] = useState('Online');

  const handleInputChange = (e, target) => {
    const { name, value } = e.target;
    if (target === 'address') {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (target === 'payment') {
      setPaymentData({
        ...paymentData,
        [name]: value,
      });
    }
  };

  const handleDeliveryClick = () => {
    // Update the address in the context
    const address = `${formData.name}, ${formData.mobileNumber}, ${formData.locality} ${formData.city} ${formData.state} ${formData.pincode}`;
    setAddress(address);
    setCurrentStep('payment'); // Change the step to 'payment'
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    try {
      // Define custid and address (you need to define these variables somewhere in your code)
      const custid = '123'; // Replace with the actual customer ID
      const address = '123 Main St, City, State, 12345'; // Replace with the actual address

      // Make an HTTP POST request to your server
      const response = await axios.post('http://localhost:8282/products/purchase/cart', {
        custid: custid,
        address: address,
        paymentmode: paymentMode,
        // Include other payment data here if needed
      });

      if (response.status === 200) {
        navigate('/order/history'); // Redirect to the order history page
        toast.success('Payment Successful', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      } else {
        toast.error('Payment Failed error', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.error('Payment Failed', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="delivery-container">
      {currentStep === 'address' && (
        <div className="address-form">
          <h2 className="title">Delivery Address</h2>
          {/* Address input fields */}
          {/* ... */}
          <button className="deliver-button" onClick={handleDeliveryClick}>
            Deliver Here
          </button>
        </div>
      )}

      {currentStep === 'payment' && (
        <div className="payment-container">
          <h2 className="title">Payment Details</h2>
          <div className="payment-details">
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
                textAlign: 'center',
              }}
              onChange={(e) => setPaymentMode(e.target.value)}
              value={paymentMode}
            >
              <option value="COD">COD</option>
              <option value="Online">PayNow</option>
            </select>

            {currentStep === 'payment' && (
              <form className="payment-form" onSubmit={handlePaymentSubmit}>
                {/* Payment input fields */}
                {/* ... */}
                <button className="payment-button" type="submit">
                  Pay Now
                </button>
              </form>
            )}

            {paymentMode === 'COD' && (
              <button className="payment-button" onClick={handlePaymentSubmit}>
                Pay Later
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryAddressPage;

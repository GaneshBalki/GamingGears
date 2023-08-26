import React, { useState } from 'react';
import './DeliveryAddress.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import { useAddress } from '../AdressContext';

const DeliveryAddressPage = () => {
  const {address,setAddress}=useAddress();
  const  navigate  = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    pincode: '',
    locality: '',
    street: '',
    city: '',
    state: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDeliveryClick = () => {
    var address = formData.name+","+formData.mobileNumber+","+formData.locality+" "+formData.city+" "+formData.state+" "+formData.pincode;
   
  setAddress(address)
  navigate('/payment');
  }

  return (
    <form>
      <h2 className="title">Delivery Address</h2>
      <div className="address-form">
        <div className="input-row">
          <input
            type="text"
            name="name"
            className="input-field"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required={true}
          />
          <input
            type="text"
            name="mobileNumber"
            className="input-field"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
        </div>
        <input
          type="text"
          name="pincode"
          className="input-field"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleInputChange}
          required={true}
        />
        <input
          type="text"
          name="locality"
          className="input-field"
          placeholder="Locality"
          value={formData.locality}
          onChange={handleInputChange}
          required={true}
        />
        <input
          type="text"
          name="street"
          className="input-field"
          placeholder="Area/Street"
          value={formData.street}
          onChange={handleInputChange}
          required={true}
        />
        <input
          type="text"
          name="city"
          className="input-field"
          placeholder="City"
          value={formData.city}
          onChange={handleInputChange}
          required={true}
        />
        <input
          type="text"
          name="state"
          className="input-field"
          placeholder="State"
          value={formData.state}
          onChange={handleInputChange}
          required={true}
        />
        <button className="deliver-button" onClick={handleDeliveryClick}>
        Deliver Here
        </button>

        
      </div>
    </form>
  );
};

export default DeliveryAddressPage;

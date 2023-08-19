import React, { useState } from 'react';
import logo from '../images/logo1.png'
import SignIn from './SignIn';
const CustomerLogin = () => {
  const [fullName, setFullName] = useState(''); // State for full name
  const [email, setEmail] = useState(''); // State for email

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  return (

    <div className="container mt-5" style={{ height: '450px' }}>
      <div className="row" >

        <div className="col-md-7 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#0074cf ', height: '450px', color: 'white' }}>
        <img src={logo} className="w-100" alt="logo" style={{ height: 70, objectFit: 'contain' }} />
                                    
                  </div>


        <div className="col-md-5 d-flex justify-content-center align-items-center " style={{ background: '#f8f9fa', height: '450px' }}>
         <SignIn></SignIn>
          
        </div>
      </div>
    </div>

  );
};

export default CustomerLogin;

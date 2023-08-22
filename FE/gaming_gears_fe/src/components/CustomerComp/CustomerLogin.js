import React, { useState } from 'react';
import logo from '../../images/logo1.png'
import SignIn from '../SignIn';

const CustomerLogin = () => {

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

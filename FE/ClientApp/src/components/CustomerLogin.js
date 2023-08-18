import React, { useState } from 'react';

const CustomerLogin = () => {
  const [fullName, setFullName] = useState(''); // State for full name
  const [email, setEmail] = useState(''); // State for email

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform user verification here using the fullName and email states
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    // Perform your verification logic and API calls as needed
  };

  return (

    <div className="container mt-5" style={{ height: '450px' }}>
      <div className="row" >

        <div className="col-md-7 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#0073cf ', height: '450px', color: 'white' }}>
          India, officially the Republic of India (ISO: Bhārat Gaṇarājya), is a country in South Asia. It is the seventh-largest country by area; the most populous country as of June 2023; and from the time of its independence in 1947, the world's most populous democracy. Bounded by the Indian Ocean on the south, the … See more
        </div>


        <div className="col-md-5 d-flex justify-content-center align-items-center " style={{ background: '#f8f9fa', height: '450px' }}>
          <form>
            <div class="form-group ">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <br></br>
            <button type="submit" class="btn btn-primary ">Submit</button>
            <div class="form-links">
            <a href="/forgot-password">Forgot Password?</a> | <a href="/create-account">Create Account</a>
            </div>
            
          </form>
          
        </div>
      </div>
    </div>

  );
};

export default CustomerLogin;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerRegistration = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        mob_number: '',
        email: '',
        pass: '',
        user_status: '0',
        isExpert: '0',
        address: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    async function save(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8282/addcustomer", {
                fname: formData.fname,
                lname: formData.lname,
                mob_number: formData.mob_number,
                email: formData.email,
                pass: formData.pass,
                user_status: formData.user_status,
                isExpert: formData.isExpert,
                address: formData.address,
            });

            if (response.status === 200) {
                console.log("Registration successful");
                navigate('/customerlogin');
            } else {
                setErrorMessage('Invalid email or password');
                console.log('Registration failed');
            }
        } catch (err) {
            console.error('User Registration Failed:', err);
            alert("User Registration Failed");
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        save(e);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Registration Form</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="fname">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fname"
                                        name="fname"
                                        value={formData.fname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lname">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lname"
                                        name="lname"
                                        value={formData.lname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mob_number">Mobile Number</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="mob_number"
                                        name="mob_number"
                                        value={formData.mob_number}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="pass"
                                        name="pass"
                                        value={formData.pass}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <textarea
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Register
                                </button>
                            </form>
                            {errorMessage && (
                                <div className="alert alert-danger mt-3">{errorMessage}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerRegistration;

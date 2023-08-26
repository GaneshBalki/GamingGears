import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DistributorRegistration = () => {
    const [formData, setFormData] = useState({
        disname: '',
        address: '',
        licence: '',
        storename: '',
        mobile: '',
        email: '',
        pass: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    async function save(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8282/register-distributor", {
                "disname": formData.disname,
                "address": formData.address,
                "licence": formData.licence,
                "storename": formData.storename,
                "mobile": formData.mobile,
                "email": formData.email,
                "pass": formData.pass
            });


            if (response.status === 200) {
               
                navigate('/distributor-login');
                toast.success("Registration successful", {
                  position: toast.POSITION.TOP_RIGHT, // You can change the position
                  autoClose: 3000, // You can control how long the toast is displayed (in milliseconds)
                });
              } else {
                setErrorMessage('Invalid email or password');
                console.log('Registration failed');
               
              }
    
        } catch (err) {
            console.error('Registration Failed:', err);
            toast.error("Registration failed", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
              });
           
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
        <div className="container" >
            <div className="row justify-content-center" >
                <div className="col-md-6" >
                    <div className="card card-hover" style={{ border: 'none', height: '650px', background: '#f8f9fa' }}>
                        <div className="card-header" style={{ border: 'none', height: '70px', background: '#f8f9fa', fontSize: '2em' }}>Registration Form</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="disname">Enter Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="disname"
                                        name="disname"
                                        value={formData.disname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                           
       
                                <div className="form-group">
                                    <label htmlFor="storename">Enter Store Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="storename"
                                        name="storename"
                                        value={formData.storename}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                               
                     <div className="form-group">
                                    <label htmlFor="licence">Licence</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="licence"
                                        name="licence"
                                        value={formData.licence}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mobile">Enter Mobile</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="mobile"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Enter Email</label>
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
                                    <label htmlFor="pass">PassWord</label>
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
                                        id="email"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: '592px',  // Set the width
                                            height: '80px', // Set the height
                                            resize: 'none'
                                        }}
                                    />
                                </div>
                                <br></br>
                                <button type="submit" className="btn btn-primary" style={{ width: '170px', fontSize: '18px' }}>
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

export default DistributorRegistration;

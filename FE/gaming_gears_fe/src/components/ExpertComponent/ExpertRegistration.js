import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
const ExpertRegistration = () => {
    const {custid}=useUser();
    const [formData, setFormData] = useState({
        expname: '',
        certification: '',
        skills: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    async function save(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8282/add-expert", {
                expid: custid,
                expname: formData.expname,
                certification: formData.certification,
                skills: formData.skills,
                sells: 0,
                commission: 0,
                isExpert: 0,
                status: 0,
            });

            if (response.status === 200) {
                console.log("Registration successful");
                navigate('/customerlogin');
            } else {
                setErrorMessage('Invalid email or password');
                console.log('Registration failed');
            }
        } catch (err) {
            console.error('Expert Registration Failed:', err);
            alert("Expert Registration Failed");
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
                    <div className="card card-hover" style={{ border: 'none', height: '600px', background: '#f8f9fa' }}>
                        <div className="card-header" style={{ border: 'none', height: '70px', background: '#f8f9fa', fontSize: '2em' }}>Registration Form</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="fname">Expert Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fname"
                                        name="fname"
                                        value={formData.expname}
                                        onChange={handleChange}
                                        required   
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lname">Certification</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lname"
                                        name="lname"
                                        value={formData.certification}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mob_number">Skills</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="mob_number"
                                        name="mob_number"
                                        value={formData.skills}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                               
                                
                                <br></br>
                                <button type="submit" className="btn btn-primary" style={{width:'170px',fontSize:'18px'}}>
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

export default ExpertRegistration;

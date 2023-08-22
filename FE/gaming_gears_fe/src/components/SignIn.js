import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
const SignIn = () => {
    const { setCustid } = useUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    async function save(event) {
        event.preventDefault();
        try {
            var response = await axios.post("http://localhost:8282/custlogin",
                {
                    "email": email,
                    "pass": password
                });

            if (response.status == 200 && response.data.email==email && response.data.pass==password) {
                console.log("response data" + response.data.fname)
                setCustid(response.data.custId);
                alert("Welcome "+response.data.fname+" !!!");
                navigate('/');
            }
            else {
                setErrorMessage('Invalid email or password');
                console.log('Authentication failed');
            }
        }
        catch (err) {
                 alert("User Registation Failed");
        }
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-9">
                {errorMessage && (
                        <div className="alert alert-danger mt-3">{errorMessage}</div>
                    )}
                    <h2 className="mb-3">Sign In</h2>
                    <form onSubmit={save} className="w-100">
                        <div className="form-group">
                            <br></br>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                placeholder='Enter Email'
                                required
                            />
                        </div>
                        <div className="form-group">
                            <br></br>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                placeholder='Enter Password'
                                required
                            />
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-primary">
                            Sign in
                        </button> 
                        <pre></pre>
                        <Link to={`/forgot-password/${email}`} className="text-reset" style={{ textDecoration: 'none' }}>
                            forgot password ?</Link> |
                        <Link to={`/customer-registration`} className="text-reset" style={{ textDecoration: 'none' }}>
                             Create Account</Link>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default SignIn;

import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function save(event) {
        event.preventDefault();
        try {
            var response = await axios.post("http://localhost:8282/custlogin",
            { 
                "email": email,
                "pass": password                
            });

            if (response.status == 200) {
                console.log("response data" + response.data.fname)
                navigate('/');
            }
        }
        catch (err) {
            alert("User Registation Failed");
        }
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="mb-3">Sign In</h2>
                    <form onSubmit={save}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Sign in
                        </button>
                    </form>
                    {/* {errorMessage && (
                        <div className="alert alert-danger mt-3">{errorMessage}</div>
                    )} */}
                </div>
            </div>
        </div>
    );
};

export default SignIn;

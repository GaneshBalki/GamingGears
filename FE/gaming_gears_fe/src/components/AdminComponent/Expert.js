import React, { useEffect, useState } from 'react';
import ExpertService from '../../service/ExpertService';
import '../HomeComponent/HomeProduct.css';
const Expert = () => {
    const [searcharr, setSearcharr] = useState([]);
    const [expertReq, setExpertReq] = useState([]);
    const [expertarr, setExpertarr] = useState([])
    useEffect(() => {
        fetchExpertData();
    }, []);
    useEffect(() => {
        const filteredExperts = searcharr.filter((expert) => expert.status == 0);
        setExpertReq(filteredExperts)
    }, [searcharr]);

    const fetchExpertData = () => {
        ExpertService.getExperts()
            .then((response) => {
                const expertar = response.data;
                const filteredExpertArr = expertar.filter((e) => e.status > 0);
                setSearcharr([...filteredExpertArr]);
                setExpertarr([...expertar])

            })
            .catch();
    };


    return (
        <div className="container pt-5">
             <div className="row" >
                <h2>New Expert Requests</h2>
                {expertReq.map((expert) => (
                    <div className="card-body">
                        <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                            <h5 className="card-title mb-3">Name : {expert.expname}</h5>
                        </a>
                        <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                            <p> SKills : {expert.skills} </p>
                        </a>
                        <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                            <p>Experience : {expert.experience} years</p>
                        </a>
                    </div>
                ))}
            </div>
            <div className="row" >
                <h2>Expert At Gaming Gears</h2>
                {expertarr.map((expert) => (
                    <div className="card-body">
                        <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                            <h5 className="card-title mb-3">Name : {expert.expname}</h5>
                        </a>
                        <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                            <p> Request Resolved : {expert.sells} units</p>
                        </a>
                        <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                            <p>Experience : {expert.experience} years</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Expert;

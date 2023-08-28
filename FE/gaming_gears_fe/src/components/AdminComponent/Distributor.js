import React, { useEffect, useState } from 'react';
import '../HomeComponent/HomeProduct.css';
import DistributorService from '../../service/DistributorService';
const Distributor = () => {
    const [searcharr, setSearcharr] = useState([]);
    const [distributorReq, setDistributorReq] = useState([]);
    const [distributorarr, setDistributorarr] = useState([])
    useEffect(() => {
        fetchExpertData();
    }, []);
    useEffect(() => {
        const filteredarr = searcharr.filter((dis) => dis.status == 0);
        setDistributorReq(filteredarr)
    }, [searcharr]);

    const fetchExpertData = () => {
       DistributorService.getAllDistributors()
            .then((response) => {
                const disar = response.data;
                const filtereddis = disar.filter((e) => e.status > 0);
                setSearcharr([...disar]);
                setDistributorarr([...filtereddis])
            })
            .catch();
    };
    return (
        <div className="container pt-5">
             <div className="row" >
                <h2>New Expert Requests</h2>
                {distributorReq.map((dis) => (
                    <div className="card-body">
                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                    <h5 className="card-title mb-3">Name : {dis.disname}</h5>
                    </a>
                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                    <h5 className="card-title mb-3">Email : {dis.email}</h5>
                    </a>
                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                    <h5 className="card-title mb-3">Mobile No : {dis.mobile}</h5>
                    </a>
                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                    <h5 className="card-title mb-3"> Store Name : {dis.storename}</h5>
                    </a>
                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                    <h5 className="card-title mb-3"> Store Name : {dis.licence}</h5>
                    </a>
                </div>
                ))}
            </div>
            <div className="row" >
                <h2>Expert At Gaming Gears</h2>
                {distributorarr.map((dis) => (
                    <div className="card-body">
                        <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                            <h5 className="card-title mb-3">Distributor ID : {dis.disid}</h5>
                        </a>
                        <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                        <h5 className="card-title mb-3">Name : {dis.disname}</h5>
                        </a>
                        <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                        <h5 className="card-title mb-3">Email : {dis.email}</h5>
                        </a>
                        <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                        <h5 className="card-title mb-3">Mobile No : {dis.mobile}</h5>
                        </a>
                        <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                        <h5 className="card-title mb-3"> Store Name : {dis.storename}</h5>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Distributor;

import React, { useEffect, useState } from 'react';
import "./Distributor.css"
import DistributorService from '../../service/DistributorService';
const Distributor = () => {
    const [searcharr, setSearcharr] = useState([]);
    const [distributorReq, setDistributorReq] = useState([]);
    const [distributorarr, setDistributorarr] = useState([])
    useEffect(() => {
        fetchExpertData();
    }, []);
    useEffect(() => {
        const filteredarr = searcharr.filter((dis) => dis.status === 0);
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
        <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>New Expert Requests</h2>
            <div className="card-container">
              {distributorReq.map((dis) => (
                <div className="card" key={dis.disid}>
                  <h5 className="card-title">Name: {dis.disname}</h5>
                  <p className="card-content">Email: {dis.email}</p>
                  <p className="card-content">Mobile No: {dis.mobile}</p>
                  <p className="card-content">Store Name: {dis.storename}</p>
                  <p className="card-content">License: {dis.licence}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2>Expert At Gaming Gears</h2>
            <div className="card-container">
              {distributorarr.map((dis) => (
                <div className="card" key={dis.disid}>
                  <h5 className="card-title">Distributor ID: {dis.disid}</h5>
                  <h5 className="card-title">Name: {dis.disname}</h5>
                  <p className="card-content">Email: {dis.email}</p>
                  <p className="card-content">Mobile No: {dis.mobile}</p>
                  <p className="card-content">Store Name: {dis.storename}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Distributor;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import expertlogo from '../../images/expert.png';
import ExpertService from '../../service/ExpertService';
import { useUser } from '../UserContext';
import Assembly from './Assembly';
const ExpertHome = (props) => {
    const { custid } = useUser();
    const [expert, setExpert] = useState(null);
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        // Fetch expert data
        ExpertService.getExpertById(custid)
            .then((response) => {
                setExpert(response.data);
            })
            .catch((error) => {
                console.error('Error fetching expert data:', error);
            });
            fetchdata();
   
    }, [custid]);

    const fetchdata=()=>{
             // Fetch expert requests with status 0
             axios.get(`http://localhost:8282/get-expert-req/${custid}`)
             .then((response) => {
                 const reqArr = response.data.filter((e) => e.status === 0);
                 setRequests([...reqArr]);
             })
             .catch((error) => {
                 console.error('Error fetching requests:', error);
             });
    }
    if (!expert || !expert.status) {
        return <p>Loading...</p>;
    }

    async function removerequest(event, request) {
        event.preventDefault();
        try {
          
          await axios.delete(`http://localhost:8282/expert/request/rmv/${request.queId}`);
          
          fetchdata();
        } catch (err) {
          console.error('Error deleting request', err);
        }
      }
    return (
        <div className="container mt-5">
            <div className="container mt-5" style={{ backgroundColor: '#f0f0f0', height: '280px',position:'relative' }}>
                <div className="row" >
                    <div className="col-md-6 ">
                        <img src={expertlogo} className="d-block" style={{ height: '250px', paddingTop: '20px' }} alt="Slide 1" />
                    </div>
                    <div className="col-md-6">
                        <div className="expert-details">
                            <br></br>
                            <h2>Expert Name : {expert.expname}</h2>
                            <pre></pre>
                            <h5>Experience : {expert.experience} yrs</h5>
                            <pre></pre>
                            <h5>Skills : {expert.skills} </h5>
                            <pre></pre>
                            <h5>Commission : &#8377; {expert.commission} </h5>
                            <pre></pre>
                            <h5>Unit Sold : {expert.sells}</h5>
                            <pre></pre>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="container">
                        <h2>List of Requests</h2>
                        {requests.length === 0 ? (
                            <p>No requests found.</p>
                        ) : (
                            <div className="row">
                                {requests.map((request) => (
                                    <div
                                        className="col-md-12"
                                        key={request.queId}
                                        style={{
                                            border: '1px solid #ccc',
                                            borderRadius: '5px',
                                            padding: '10px',
                                            marginBottom: '10px',
                                        }} >
                                        <div className="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <p>{request.que}</p>
                                                <small>Requested by: {request.custid.fname}</small>
                                            </div>
                                            <div>
                                                <button className="btn btn-danger" style={{ marginRight: '30px' }} 
                                                onClick={(event) => removerequest(event, request)}
                                              >Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <pre></pre>
            <Assembly expid={custid}></Assembly>
        </div>
    );
}
export default ExpertHome;

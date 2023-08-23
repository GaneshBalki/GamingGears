import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You may need to install axios if not already done
import { useUser } from '../UserContext';

function RequestsList() {
  const [requests, setRequests] = useState([]);
  const {custid}=useUser();
  useEffect(() => {
    // Fetch the list of requests from your API
    axios.get("http://localhost:8282/get-expert-req-/"+custid)
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.error('Error fetching requests:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="container">
      <h2>List of Requests</h2>
      <ul className="list-group">
        {requests.map((request) => (
          <li key={request.id} className="list-group-item">
            <h5>{request.title}</h5>
            <p>{request.description}</p>
            <small>Requested by: {request.user}</small>
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-danger">Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RequestsList;

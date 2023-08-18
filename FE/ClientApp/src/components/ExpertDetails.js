import React, { Component } from 'react';
import ProductService from '../service/ProductService';
import { useParams } from 'react-router-dom'; // Import useParams hook
import HomeProducts from './HomeProducts';
import expertlogo from '../images/expert.png'
import ExpertService from '../service/ExpertService';

const ExpertDetails = (props) => {
    const { expid } = useParams(); // Access the 'pid' property
    console.log('pid:', expid);
    console.log('props:', props);
    console.log('useParams:', useParams());
    const [expert, setExpert] = React.useState(null);

    React.useEffect(() => {
        ExpertService.getExpertById(expid)
            .then((response) => {
                setExpert(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [expid]);

    if (!expert) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mt-5"  style={{ backgroundColor: '#f0f0f0' }}>
          <div className="row" >
                <div className="col-md-6">
                <img src={expertlogo} className="d-block" style={{ height: '280px' }} alt="Slide 1" />

                    
                </div>
                <div className="col-md-6">
                    <div className="product-details">
                        <pre></pre>

                        <h2>{expert.expname}</h2>
                        <pre></pre>
                        <pre></pre>
                        <pre></pre>
                        <p>{expert.sells}</p>
                        <pre></pre>
                        <pre></pre>
                        <pre></pre>
                        <h4>&#8377; {expert.experience}</h4>
                        <pre></pre>

                        <button className="btn btn-primary">Request</button>
                       
                       
                    </div>
                   
                </div>
            </div>
            <pre></pre>
                     
            {/* buid unit lists */}
                       
         
        </div>
    );
}

export default ExpertDetails;

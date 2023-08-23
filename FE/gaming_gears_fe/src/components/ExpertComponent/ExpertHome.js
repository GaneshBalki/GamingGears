import React from 'react';

import { useParams } from 'react-router-dom'; // Import useParams hook

import expertlogo from '../../images/expert.png'
import ExpertService from '../../service/ExpertService';

import { useUser } from '../UserContext';
import Assembly from './Assembly';

const ExpertHome = (props) => {
  const {custid}=useUser();
    const [expert, setExpert] = React.useState(null);

    React.useEffect(() => {
        ExpertService.getExpertById(custid)
            .then((response) => {
                setExpert(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [custid]);

    if (!expert || !expert.status) {
        return <p>Loading...</p>;
    }

    return (
 <div className="container mt-5" >
    <div className="container mt-5"  style={{ backgroundColor: '#f0f0f0',height: '280px'  }}>
          <div className="row" >
                <div className="col-md-6 ">
                <img src={expertlogo} className="d-block" style={{ height: '250px',paddingTop:'20px'}} alt="Slide 1" />

                    
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
            <pre></pre>
                     
            {/* buid unit lists */}
               
                  
         
        </div>
        <pre></pre>
        
        <Assembly expid={expert.expid}></Assembly>    
        </div>
    );
}

export default ExpertHome;

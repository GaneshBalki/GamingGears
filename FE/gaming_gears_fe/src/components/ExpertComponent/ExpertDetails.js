import React from 'react';
import { Link, useParams } from 'react-router-dom';
import expertlogo from '../../images/expert.png';
import ExpertService from '../../service/ExpertService';
import Assembly from './Assembly';
import { useUser } from '../UserContext';

const ExpertDetails = () => {
    const { expid } = useParams();
    const [expert, setExpert] = React.useState(null);
    const { custid } = useUser();
    const [isDropdownVisible, setDropdownVisible] = React.useState(false);

    React.useEffect(() => {
        ExpertService.getExpertById(expid)
            .then((response) => {
                setExpert(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [expid]);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    if (!expert || !expert.status) {
        return <p>Loading...</p>;
    }

    const isExpertBelongsToCustomer = custid === expert.expid;

    return (
        <div className="container">
            <div className="container mt-5" style={{ backgroundColor: '#f0f0f0', height: '280px' }}>
                <div className="row">
                    <div className="col-md-6">
                        <img src={expertlogo} className="d-block" style={{ height: '250px', paddingTop: '20px' }} alt="Slide 1" />
                    </div>
                    <div className="col-md-6">
                        <div className="expert-details">
                            <br />
                            <h2>Expert Name: {expert.expname}</h2>
                            <pre />
                            <h5>Experience: {expert.experience} yrs</h5>
                            <pre />
                            <h5>Skills: {expert.skills} yrs</h5>
                            <pre />
                            <h5>Unit Sold: {expert.sells}</h5>
                            <pre />

                            {isExpertBelongsToCustomer ? (
                                <div >
                                    
                                </div>
                            ) : (
                                custid > 0 ? (
                                    <Link to={`/make-req/${expert.expid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                        <button className="btn btn-primary">Request</button>
                                    </Link>
                                ) : (
                                    <Link to="/customerlogin" className="text-reset" style={{ textDecoration: 'none' }}>
                                        <button className="btn btn-primary">Request</button>
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </div>
                <pre />
            </div>
            <pre />
            <Assembly expid={expert.expid} />
        </div>
    );
};

export default ExpertDetails;

import React, { useEffect, useState } from 'react';
import ExpertService from '../service/ExpertService';
import { Link } from 'react-router-dom';
import expertimg from '../images/expert.png';
import './HomeProduct.css';
import { useUser } from './UserContext';

const Expert = () => {
  const { custid } = useUser();
  var hasMatch =false;
  const [expertData, setExpertData] = useState({
    expertarr: [],
    searcharr: [],
    searchtext: "",
  });

  useEffect(() => {
    fetchExpertData();
    const filteredExperts = expertData.searcharr.filter((expert) => expert.expid === custid);
   hasMatch = filteredExperts.length > 0;
  }, []);

  const fetchExpertData = () => {
    ExpertService.getExperts()
      .then((response) => {
        setExpertData({
          ...expertData,
          expertarr: [...response.data],
          searcharr: [...response.data],
        });
      })
      .catch();
  };

  const getExpertById = (expid) => {
    ExpertService.getExpertById(expid)
      .then(() => {
        fetchExpertData();
      })
      .catch();
  };

  return (
    <div className="container pt-5">
      <div className="container">
        {
          hasMatch ?<button type="button" className="btn btn-primary">
          You An Expert
        </button>:<button type="button" className="btn btn-primary">
          Become An Expert
        </button>
        }
        
      </div>
      <pre></pre>
      <pre></pre>
      <pre></pre>
      <pre></pre>

      <div className="row">
        {expertData.searcharr.map((expert) => (
          <div key={expert.expid} className="col-lg-3 col-md- col-sm-12 mb-4 d-flex">
            <div className="card flex-fill border-0 card-hover" style={{ background: '#f8f9fa' }}>
              <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                <Link to={`/experts/${expert.expid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                  <img src={expertimg} className="w-100" alt={expert.experience} style={{ height: 150, objectFit: 'contain' }} />
                  <a href="#!" onClick={() => getExpertById(expert.expid)}>
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100"></div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </div>
                  </a>
                </Link>
              </div>
              <Link to={`/experts/${expert.expid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                <div className="card-body">
                  <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                    <h5 className="card-title mb-3">Name : {expert.expname}</h5>
                  </a>
                  <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                    <p> Sells : {expert.sells} units</p>
                  </a>
                  <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                    <p>Experience : {expert.experience} years</p>
                  </a>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expert;

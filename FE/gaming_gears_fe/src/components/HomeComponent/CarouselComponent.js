import React from 'react';
import cor22 from '../../images/cor22.jpg';
import cor23 from '../../images/cor23.jpg'; 
import cor4 from '../../images/cor4.jpg';  

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS


const CarouselComponent = () => {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={cor4} className="d-block w-100" alt="Slide 1" style={{height:'445px'}} />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={cor23} className="d-block w-100" alt="Slide 2" style={{height:'445px'}}  />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={cor22} className="d-block w-100" alt="Slide 2" style={{height:'445px'}} />
        </div>
        {/* Add more carousel items here */}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
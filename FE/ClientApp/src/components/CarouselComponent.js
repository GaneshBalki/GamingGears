import React from 'react';
import cor6 from '../images/cor6.jpg';
import cor2 from '../images/cor2.jpg'; // Replace with the actual image path
import cor4 from '../images/cor4.jpg';   // Replace with the actual logo path

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS


const CarouselComponent = () => {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={cor6} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={cor2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={cor4} className="d-block w-100" alt="Slide 2" />
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
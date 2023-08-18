import React, { Component } from 'react';

import logo2 from '../images/logo2.png'
import HomeProducts from './HomeProducts';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Footer';
import HomeCategory from './HomeCategory';
import CarouselComponent from './CarouselComponent';
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        {/* corosole */}


      <CarouselComponent></CarouselComponent>

        {/* <!-- category --> */}
       <HomeCategory></HomeCategory>
        {/* <!-- category --> */}
       

        {/* offersbar */}
        <nav class="navbar navbar-light bg-light">
          <form class="container-fluid justify-content-start">
            <button class="btn btn-outline-success me-2" type="button">Offers</button>
            <img src={logo2} className="rounded mx-auto d-block" alt="..." height={50} />
          </form>
        </nav>



        {/* Product 1 */}
        <HomeProducts></HomeProducts>
        {/* Product 1 */}



        
       
        

      </div>




    );
  }
}

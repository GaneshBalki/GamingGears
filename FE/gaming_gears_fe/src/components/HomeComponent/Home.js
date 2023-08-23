import React, { Component } from 'react';
import HomeProducts from './HomeProducts';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../AAA.css'
import HomeCategory from './HomeCategory';
import logo from '../../images/logo1.png'
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


        {/* offerbar */}
        <div>
          <nav className="navbar navbar-light bg-light align-items-center" style={{ height: '140px' }}>
            <div className="container-fluid d-flex justify-content-center ">
             <img src={logo} alt='logo' style={{width:'130px'}}></img>
            </div>
          </nav>
        </div>




        {/* Products */}
        <HomeProducts></HomeProducts>
        {/* Products */}







      </div>



    );
  }
}

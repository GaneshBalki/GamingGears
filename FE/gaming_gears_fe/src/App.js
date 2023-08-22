import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './App.css';
import NavMenu from './components/LayoutComponent/NavMenu';
import Footer from './components/LayoutComponent/Footer'
import { UserProvider } from './components/UserContext';
import { CartProvider } from './components/CartContext';
function App() {

  function authHandler() {
    console.log("authHandler called");

    alert("Login karo");
  }


  return (
    <UserProvider>
      <CartProvider>
       
          <div className="App">
            <NavMenu login={authHandler}></NavMenu>

            <Routes>
              {AppRoutes.map((route, index) => {
                const { element, ...rest } = route;
                return <Route key={index} {...rest} element={element} />;
              })}
            </Routes>
            <Footer></Footer>
          </div>
       
      </CartProvider>
    </UserProvider>
  );


}

export default App;

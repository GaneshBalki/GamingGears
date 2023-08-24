import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './App.css';
import NavMenu from './components/LayoutComponent/NavMenu';
import Footer from './components/LayoutComponent/Footer'
import { UserProvider } from './components/UserContext';
import { DistributorProvider } from './components/DistributorComponent/DistributorContext';
function App() {


  return (
    <DistributorProvider>
    <UserProvider>
          <div className="App">
           
            <NavMenu></NavMenu>

            <Routes>
              {AppRoutes.map((route, index) => {
                const { element, ...rest } = route;
                return <Route key={index} {...rest} element={element} />;
              })}
            </Routes>
            <Footer></Footer>
           
          </div>
    </UserProvider>
    </DistributorProvider>
  );
}
export default App;

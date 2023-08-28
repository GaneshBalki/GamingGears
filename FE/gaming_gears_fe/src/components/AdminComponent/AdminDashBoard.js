import React, { useState, useEffect } from 'react';
import '../DistributorComponent/DistributorDashboard.css'; 

import Expert from "./Expert.js"
import Distributor from "./Distributor.js"
import SalesReport from './SalesReport'

import {  useNavigate } from 'react-router-dom';
const AdminDashBoard = () => {

    const [board, setBoard] = useState('Product');
    const [adminInfo, setAdminInfo] = useState(null);

    const navigate = useNavigate()
    const handleItemClick = (item) => {
        setBoard(item);
    };


   
  
    useEffect(() => {
  
        // DistributorService.getDistributorById(disid)
        //     .then((response) => {
        //         setAdminInfo(response.data);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

        //    findTotalSale


    }, []);

    const handleLogout=()=>{

        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
         
        //   setDisid(0);
        navigate("/adminlogin")
        }

        

    }

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                {/* Distributor Profile */}
                <div className="profile-card">
                    {adminInfo ? (
                        <h3 style={{ color: 'rgba(51, 51, 51, 0.8)' }}> {adminInfo.username}</h3>
                    ) : (
                        <p>Loading distributor info...</p>
                    )}
                    {/* Display distributor information here */}
                </div>

                {/* Navigation Links */}
                <ul className="nav-links">
                    <li className={`nav-link ${board === 'Distributor' ? 'active' : ''}`} onClick={() => handleItemClick('Distributor')} style={{height:'40px'}}>
                        Distributor
                    </li>
                    <li className={`nav-link ${board === 'Expert' ? 'active' : ''}`} onClick={() => handleItemClick('Expert')} style={{height:'40px'}}>
                        Expert
                    </li>
                    <li className={`nav-link ${board === 'SalesReport' ? 'active' : ''}`} onClick={() => handleItemClick('SalesReport')} style={{height:'40px'}}>Sales Report</li>
                    <li className={`nav-link ${board === 'logout' ? 'active' : ''}`} onClick={handleLogout} style={{height:'40px'}}>LogOut</li>
                    
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
               
                

                {/* Content Area */}
               
                {board === 'Distributor' && <Distributor />}
                {board === 'Expert' && <Expert />}
                {board === 'SalesReport' && <SalesReport />}
              
            </div>
        </div>
    );
};

export default AdminDashBoard;

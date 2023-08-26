import React, { useState, useEffect } from 'react';
import './DistributorDashboard.css'; // Import your custom CSS file
import Dash from './Dash';
import Product from './Product';
import SalesReport from './SalesReport'
import Orders from './Orders'
import { useDistributor } from './DistributorContext';
import DistributorService from '../../service/DistributorService';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const DistributorHome = () => {
    const [board, setBoard] = useState('Dash');
    const [distributorInfo, setDistributorInfo] = useState(null);
    const navigate = useNavigate()
    const handleItemClick = (item) => {
        setBoard(item);
    };


    const { disid } = useDistributor();
    const { setDisid } = useDistributor();

    useEffect(() => {
        DistributorService.getDistributorById(disid)
            .then((response) => {
                setDistributorInfo(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        //    findTotalSale


    }, [disid]);

    const handleLogout=()=>{
        setDisid(0);
        navigate("/distributor-login")

    }

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                {/* Distributor Profile */}
                <div className="profile-card">
                    {distributorInfo ? (
                        <h3 style={{ color: 'rgba(51, 51, 51, 0.8)' }}> {distributorInfo.disname}</h3>
                    ) : (
                        <p>Loading distributor info...</p>
                    )}
                    {/* Display distributor information here */}
                </div>

                {/* Navigation Links */}
                <ul className="nav-links">

                    <li className={`nav-link ${board === 'Product' ? 'active' : ''}`} onClick={() => handleItemClick('Product')}>
                        Products
                    </li>
                    <li className={`nav-link ${board === 'SalesReport' ? 'active' : ''}`} onClick={() => handleItemClick('SalesReport')}>Sales Report</li>
                    <li className={`nav-link ${board === 'logout' ? 'active' : ''}`} onClick={handleLogout}>LogOut</li>
                    
                        
                   

                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Dashboard Header */}
                <div className="dashboard-header">
                    <h1 className="display-4">Distributor Dashboard</h1>
                </div>

                {/* Content Area */}
                {board === 'Dash' && <Dash />}
                {board === 'Product' && <Product />}
                {board === 'SalesReport' && <SalesReport />}
                {board === 'Orders' && <Orders />}
            </div>
        </div>
    );
};

export default DistributorHome;

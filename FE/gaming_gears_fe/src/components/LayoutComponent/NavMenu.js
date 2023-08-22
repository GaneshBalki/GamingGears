import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import logo1 from '../../images/logo1.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SearchBar from '../SearchBarComponents/SearchBar';
import SearchResultsList from '../SearchBarComponents/SearchResultsList';
import { useUser } from '../UserContext';

function NavMenu() {
  const [collapsed, setCollapsed] = useState(true);
  const [results, setResults] = useState([]);
  const { custid, setCustid } = useUser();

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      // The user clicked "OK" (yes) in the confirmation dialog
      setCustid(0);
    }
  };

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
        <NavbarBrand tag={Link} to="/"> <img src={logo1} height="35" alt="MDB Logo" /></NavbarBrand>
        
        <SearchBar setResults={setResults}></SearchBar>

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
          <ul className="navbar-nav flex-grow">
            <NavItem>
              {custid ? (
                <li>
                  <NavLink tag={Link} onClick={handleLogout}>Logout</NavLink>
                </li>
              ) : (
                <li>
                  <NavLink tag={Link} className="text-dark" to="/customerlogin">Login</NavLink>
                </li>
              )}
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/expert">Expert</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/distributor">Become Seller</NavLink>
            </NavItem>
            <NavItem>

            {custid ? (
                <li>
                  <NavLink tag={Link} className="text-dark" to="/cart" ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg></NavLink>
                </li>
              ) : (
                <li>
                  
                   <NavLink tag={Link} className="text-dark" to="/customerlogin"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg></NavLink>
                </li>
              )}



              
            </NavItem>
          </ul>
        </Collapse>
      </Navbar>
      <SearchResultsList results={results}></SearchResultsList>
    </header>
  );
}

export default NavMenu;

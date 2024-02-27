import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../../pages/Login';
import Nav from '../nav/Nav';

export const Logo = styled.p`
  font-family: 'Rajdhani', sans-serif;
  text-decoration: underline;
  color: white;
`;

export const Header = () => {
  return (
    <div>
      <Link className='logo navbar-brand' to='#'>
        <Logo>
          <b>Code2ChangeYourWorld</b>
        </Logo>
      </Link>
      <div>
        <nav className='navbar navbar-expand-lg bg-body-tertiary fixed-top border-bottom border-body bg-primary'>
          <div className='container'>
            <Link className='logo navbar-brand' to='#'>
              <Logo>
                <b>Code2ChangeYourWorld</b>
              </Logo>
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasNavbar'
              aria-controls='offcanvasNavbar'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='offcanvas offcanvas-end'
              tabIndex='-1'
              id='offcanvasNavbar'
              aria-labelledby='offcanvasNavbarLabel'
            >
              <div className='offcanvas-header'>
                <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                  <strong></strong>
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='offcanvas'
                  aria-label='Close'
                ></button>
              </div>
              <Nav />
            </div>
          </div>
        </nav>

        <Login />
      </div>
    </div>
  );
};

export default Header;

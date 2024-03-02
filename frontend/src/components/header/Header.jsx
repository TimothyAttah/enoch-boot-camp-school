import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../../pages/Login';
import { SideBar } from '../sideBar/SideBar';
import { AnimatePresence } from 'framer-motion';
import { user } from '../Authentication';

export const Logo = styled.p`
  font-family: 'Rajdhani', sans-serif;
  text-decoration: underline;
  color: white;
`;

export const HeaderNav = styled.ul`
  display: flex;

  @media screen and (max-width: 999px) {
    display: none;
  }
`;

export const HeaderForm = styled.form`
  display: flex;
  @media screen and (max-width: 999px) {
    display: none !important;
  }
`;

export const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const showSidebarContainer = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    setShowSidebar(true);
  };
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };
  return (
    <>
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
                onClick={() => showSidebarContainer()}
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              {!user && (
                <HeaderNav className='navbar-nav justify-content-center nav-underline flex-grow-1 ps-lg-2 ms-lg-4'>
                  <li className='nav-item'>
                    <a href='/' className='nav-link active' aria-current='page'>
                      Home
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#gains'>
                      Gains
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#Pricing'>
                      Pricing
                    </a>
                  </li>

                  <li className='nav-item'>
                    <a className='nav-link' href='#courses'>
                      Courses
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#about_us'>
                      About Us
                    </a>
                  </li>
                </HeaderNav>
              )}
            </div>
            {!user ? (
              <HeaderForm className='d-flex cols-md-4 px-lg-auto' role='search'>
                <a href='#register'>
                  <button className='btn btn-danger rounded-pill' type='button'>
                    Register
                  </button>
                </a>
                <button
                  className='btn btn-primary rounded-pill'
                  type='button'
                  data-bs-toggle='modal'
                  data-bs-target='#loginModal'
                >
                  Login
                </button>
              </HeaderForm>
            ) : (
              <button
                className='btn btn-primary rounded-pill'
                type='button'
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </nav>

          <Login />
        </div>
      </div>
      <AnimatePresence>
        {showSidebar && <SideBar setShowSidebar={setShowSidebar} />}
      </AnimatePresence>
    </>
  );
};

export default Header;

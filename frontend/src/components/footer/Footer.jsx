import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled.p`
  font-family: 'Rajdhani', sans-serif;
  text-decoration: underline;
  color: white;
`;

export const Footer = () => {
  return (
    <footer>
      <div className='footer-top'>
        <div className='container'>
          <div className='row gy-4'>
            <div className='col-lg-4'>
              <Logo className='loading-text'>
                <b>Code2ChangeYourWorld</b>
              </Logo>
            </div>
            <div className='col-lg-2'>
              <h5 className='text-white'>Brand</h5>
              <ul className='list-unstyled'>
                <li>
                  <Link to='#' title='About our Great Organization'>
                    About us
                  </Link>
                </li>
                <li>
                  <Link to='#'>Services</Link>
                </li>
                <li>
                  <Link to='#'>Features</Link>
                </li>
                <li>
                  <Link to='#'>Pricing</Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-2'>
              <h5 className='text-white'>More</h5>
              <ul className='list-unstyled'>
                <li data-bs-toggle='modal' data-bs-target='#exampleModal5'>
                  <a href='#exampleModal5'>FAQ's</a>
                </li>
                <li>
                  <Link to='#'>Privacy & Policy</Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-4'>
              <h5 className='text-white'>Contact</h5>
              <ul className='list-unstyled'>
                <li>Email: enochlouis@gmail.com</li>
                <li>Phone: 08038724054</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom py-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <p className='mb-0'>
                © 2023 copyright all right reserved
                <i className='bx bx-heart text-danger'></i>
              </p>
            </div>
            <div className='col-md-6'>
              <div className='social-icons rounded-5'>
                <Link to='#'>
                  <img src='Icons/ipob1.png' alt='whatsapp icon' />
                </Link>
                <Link to='#'>
                  <img src='Icons/ipob2.png' alt='facebook icon' />
                </Link>
                <Link to='#'>
                  <img src='Icons/ipob3.png' alt='instagram icon' />
                </Link>
                <Link to='#'>
                  <img src='Icons/ipob4.png' alt='' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { user } from '../Authentication';

const Nav = () => {
  const closeNavbar = () => {
    if (window.screenX < 992) {
      // Close the navbar on small and medium screens (adjust the breakpoint as needed)
      // document.querySelector('navbar-toggler').className.toggle();
      // document.querySelector('nav-link').className
      // console.log(toggle);
      // toggle.addEventListener('click', () => {});
      // '.navbar-toggler'.click();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };
  return (
    <div className='offcanvas-body'>
      {!user ? (
        <>
          <ul className='navbar-nav justify-content-center nav-underline flex-grow-1 ps-lg-2 ms-lg-4'>
            <li className='nav-item'>
              <a
                href='/'
                className='nav-link active'
                aria-current='page'
                onClick={() => closeNavbar()}
                // onClick='closeNavbar()'
              >
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='#gains'
                // to='#gains'
                onClick={() => closeNavbar()}
                // onClick='closeNavbar()'
              >
                Gains
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='#Pricing'
                // to='#Pricing'
                onClick={() => closeNavbar()}
              >
                Pricing
              </a>
            </li>

            <li className='nav-item'>
              <a
                className='nav-link'
                href='#courses'
                // to='#courses'
                //onClick={()=> closeNavbar()}
              >
                Courses
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='#about_us'
                // to='#about_us'
                //onClick={()=> closeNavbar()}
              >
                About Us
              </a>
            </li>
          </ul>
          <form className='d-flex cols-md-4 px-lg-auto' role='search'>
            <a
              href='#register'
              // to='#register'
              // href='index.php#register'
              //onClick={()=> closeNavbar()}
            >
              <button
                className='btn btn-danger rounded-pill'
                type='button'
                // data-bs-toggle='modal'
                // data-bs-target='#exampleModal'
                // data-bs-whatever='@getbootstrap'
              >
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
          </form>
        </>
      ) : (
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <a href='/' onClick={handleLogout}>
            <button>Logout</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;

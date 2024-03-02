import React from 'react';
import * as Styles from './SideBarStyles';
// import { NavLink } from 'react-router-dom';
import { NavLink } from '../navlink/NavLink';
import { FaTimes } from 'react-icons/fa';
import Backdrop from '../Backdrop';
import { user } from '../Authentication';

const showAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 1.25,
      type: 'tween',
      delay: 0.2,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.25,
      type: 'tween',
      delay: 0.2,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

const navDataWithoutLogin = [
  {
    name: 'Home',
    // icon: <RiHome2Line />,
    to: '/',
  },
  {
    name: 'Gains',
    // icon: <RiPriceTagFill />,
    to: 'gains',
  },

  {
    name: 'Pricing',
    // icon: <RiSuitcase3Line />,
    to: 'Pricing',
  },

  {
    name: 'Courses',
    // icon: <RiSuitcase3Line />,
    to: 'courses',
  },

  {
    name: 'About Us',
    // icon: <RiSuitcase3Line />,
    to: 'about_us',
  },
];

export const SideBar = ({ setShowSidebar }) => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };
  return (
    <>
      <Backdrop onClick={() => setShowSidebar(false)} />
      <Styles.SideBar
        variants={showAnimation}
        initial='hidden'
        animate='show'
        exit='hidden'
      >
        <Styles.CloseSideBarIcon onClick={() => setShowSidebar(false)}>
          <FaTimes />
        </Styles.CloseSideBarIcon>
        {!user ? (
          <div>
            <Styles.SideBarNavLinks>
              {navDataWithoutLogin.map((item, i) => (
                <NavLink
                  to={item.to}
                  key={i}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setShowSidebar(false)}
                >
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </Styles.SideBarNavLinks>
            <form className='d-flex cols-md-4 px-lg-auto' role='search'>
              <a href='#register' onClick={() => setShowSidebar(false)}>
                <button className='btn btn-danger rounded-pill' type='button'>
                  Register
                </button>
              </a>
              <button
                className='btn btn-primary rounded-pill'
                type='button'
                data-bs-toggle='modal'
                data-bs-target='#loginModal'
                onClick={() => setShowSidebar(false)}
              >
                Login
              </button>
            </form>
          </div>
        ) : (
          <Styles.LogoutBtn>
            <div onClick={handleLogout}>
              <button>Logout</button>
            </div>
          </Styles.LogoutBtn>
        )}
      </Styles.SideBar>
    </>
  );
};

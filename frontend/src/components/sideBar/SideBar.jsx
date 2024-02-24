import React from 'react';
import * as Styles from './SideBarStyles';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

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
    name: 'About',
    // icon: <RiPriceTagFill />,
    to: '/about',
  },

  {
    name: 'Services',
    // icon: <RiSuitcase3Line />,
    to: '/services',
  },

  {
    name: 'Contact',
    // icon: <RiSuitcase3Line />,
    to: '/contact',
  },
];

export const SideBar = ({ setOpen }) => {
  return (
    <Styles.SideBar
      variants={showAnimation}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <Styles.CloseSideBarIcon onClick={() => setOpen(false)}>
        <FaTimes />
      </Styles.CloseSideBarIcon>
      <Styles.SideBarNavLinks>
        {navDataWithoutLogin.map((item, i) => (
          <NavLink
            to={item.to}
            key={i}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setOpen(false)}
          >
            <span>{item.name}</span>
          </NavLink>
        ))}
      </Styles.SideBarNavLinks>
    </Styles.SideBar>
  );
};

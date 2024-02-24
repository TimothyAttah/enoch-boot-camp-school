import { Link } from 'react-scroll';

export const NavLink = ({ children, to, offset = -50, onClick }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={1000}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

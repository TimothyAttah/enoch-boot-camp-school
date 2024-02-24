import { useLocation, Navigate, Outlet } from 'react-router-dom';

export const user = JSON.parse(localStorage.getItem('user'));
console.log('User>>>>>>>', user);

export const RequireAuth = () => {
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  );
};

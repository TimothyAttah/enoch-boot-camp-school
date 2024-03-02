import { useLocation, Navigate, Outlet } from 'react-router-dom';
export const isActive = localStorage.getItem('isActive');
export const user = JSON.parse(localStorage.getItem('user'));
export const referenceCode = localStorage.getItem('referenceCode');
console.log('User>>>>>>>', user);

export const RequireAuth = () => {
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  );
};

export const RequirePayment = () => {
  const location = useLocation();

  return user && referenceCode ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export const RequireConfirmation = () => {
  const location = useLocation();

  return user && isActive !== null && referenceCode ? (
    <Outlet />
  ) : (
    <Navigate to='/confirm-payment' state={{ from: location }} replace />
  );
};

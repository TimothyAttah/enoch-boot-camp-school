import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import RegistrationSuccess from './pages/RegistrationSuccess';
import Dashboard from './pages/Dashboard';
import { RequireAuth, RequireConfirmation } from './components/Authentication';
import VerifyPayment from './pages/payment/VerifyPayment';
import Layout from './components/Layout';
import Payment from './pages/payment/Payment';
import ConfirmPayment from './pages/payment/ConfirmPayment';
import Tutorial from './pages/tutorials/Tutorial';

const App = () => {
  return (
    <div className='lh-1.7'>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* public routes */}
          <Route path='/' element={<Home />} />
          <Route path='/register_success' element={<RegistrationSuccess />} />
          {/** private routes */}
          <Route element={<RequireAuth />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='payment' element={<Payment />} />
            <Route path='/verify_payment' element={<VerifyPayment />} />
            <Route path='/confirm-payment' element={<ConfirmPayment />} />
          </Route>
          <Route element={<RequireConfirmation />}>
            <Route path='/tutorials' element={<Tutorial />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;

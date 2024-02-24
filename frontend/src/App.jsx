import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import RegistrationSuccess from './pages/RegistrationSuccess';
import Dashboard from './pages/Dashboard';
import { RequireAuth } from './components/Authentication';
import VerifyPayment from './pages/VerifyPayment';

const App = () => {
  return (
    <div className='lh-1.7'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register_success' element={<RegistrationSuccess />} />
        <Route element={<RequireAuth />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/verify_payment' element={<VerifyPayment />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;

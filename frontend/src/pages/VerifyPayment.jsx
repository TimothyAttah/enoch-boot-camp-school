import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const VerifyPayment = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.has('reference')) {
      const reference = searchParams.get('reference');

      console.log(reference);
    }
  }, []);
  return (
    <div className='container mt-5'>
      <h1>Verify Payment</h1>
      <input type='text ' placeholder='Reference' />
      <button>Verify</button>
    </div>
  );
};

export default VerifyPayment;

import React from 'react';

const RegistrationSuccess = () => {
  return (
    <div className='m-5 p-3'>
      <h4 style={{ color: '#888' }} className='mb-3'>
        Your account has been created, but Registration is not complete yet.
      </h4>
      <p>
        <button
          className='btn btn-primary rounded-pill'
          type='button'
          data-bs-toggle='modal'
          data-bs-target='#loginModal'
        >
          Login to Continue
        </button>
      </p>
    </div>
  );
};

export default RegistrationSuccess;

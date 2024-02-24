import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <section id='Pricing'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mx-auto text-center'>
            <h2 className='text-primary'>Pricing</h2>
            <h4 className='opacity-25'>
              <p>
                Just N30,000 ($30) only. <br /> A life-time opportunity. <br />
                Take it!
              </p>
              <p>
                <span>
                  Registration closes on March 18th 2024. It is good to register
                  early.
                </span>
              </p>
            </h4>
            <Link to='#register'>
              <button className='rounded-pill btn btn-danger' type='button'>
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

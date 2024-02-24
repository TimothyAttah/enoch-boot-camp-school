import React from 'react';
import Carousel from '../components/Carousel';

export const Hero = () => {
  return (
    <>
      <div className='bree vh-100 d-flex align-items-center position-relative'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12  mx-auto text-center '>
              <h1 className='display-4 ; lh-base col-sm-12  display-6 my-element'>
                We are offering the MOST affordable Online Coding Training in
                the world,
                <b>
                  taking you FROM KNOWING NOTHING in Coding to becoming a
                  trained MERN FULL STACK DEVELOPER in 90days
                </b>
                .
              </h1>

              <p className='my-3'>
                This is your Greatest chance to change your life
              </p>

              <a href='#register'>
                <button className='btn btn-primary rounded-4' type='button'>
                  Register
                </button>
              </a>
              <a href='#gains'>
                <button className='btn btn-secondary rounded-4' type='button'>
                  Details
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Carousel />
    </>
  );
};

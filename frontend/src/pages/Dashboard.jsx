import React from 'react';
import { user } from '../components/Authentication';
import styled from 'styled-components';

const H2 = styled.h2`
  /* display: inline-block; */
  text-transform: capitalize;
`;

const Dashboard = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-lg-12 mx-auto text-center'>
          <div>
            <H2 className='my-element'>
              Welcome, {user?.firstname} {user?.lastname}
            </H2>
            <div>
              {/* <p class='mb-3'>
                <mark>
                  But Your Registration is not yet complete until you Pay
                </mark>
                .
                <a href='https://paystack.com/pay/or7szmdkig'>
                  <button>
                    Hurry. Click here Now to pay and secure your chance.
                  </button>
                </a>
              </p> */}
              <p className='mb-3'>
                <mark>
                  But Your Registration is not yet complete until you Pay
                </mark>

                <a href='/payment'>
                  <button>
                    Hurry. Click here Now to pay and secure your chance.
                  </button>
                </a>
              </p>
              <p>
                Instead of
                <span style={{ textDecoration: 'line-through' }}>N450,000</span>
                , just pay N30,000 only, for your Full stack developer training
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='className="col-lg-12 mx-auto text-center"'>
            <h6>What you stand to gain, once you pay the N30,000</h6>
            <ol>
              <li className='mb-2'>
                We are going to train you to become a Full stack Mern Developer.
              </li>

              <li className='mb-3'>
                You are eligible to win one of our 150 laptops if you attend all
                classes punctually, do your assignments promptly, and
                participate actively in our online classes.
              </li>

              <li className='mb-3'>
                A certificate will be issued to you upon completion of this
                online 90-day course.
              </li>

              <mark className='mb-3'>Our program is fully online</mark>

              <li className='mb-3'>
                Upon Completion of this course, we will not just leave you
                alone. We will be sending you Job offers available for you to
                quickly get a Job in Tech (Mentorship is available too).
              </li>

              <li className='mb-3'>
                You can be among the 3 students who would win $5,000 to sponsor
                their projects, if it solves real problems of people and can
                gain traction in a short time.
              </li>

              <li className='mb-3'>
                A BIG event is coming up at Oriental Hotels in Lagos, Nigeria
                where the greatest Nigerian Tech Giants who have made Nigeria
                proud in Fintech, AgriTech, Logistics and have made names, will
                be speaking to all our students gathered from all over the
                world. Automatically, a seat will be reserved for you once you
                pay and fully register now. <br />
                <br />
                <mark>
                  However, this event and the awards above, are contingent upon
                  meeting our targets.
                </mark>
              </li>
              <a href='https://paystack.com/pay/or7szmdkig'>
                <button>Pay Now</button>
              </a>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';

const Courses = () => {
  return (
    <section id='courses'>
      <div className='container mt-0'>
        <div className='row mb-5'>
          <div className='col-md-12 mx-auto mb-3 text-center'>
            <h3 className='text-primary'>Courses</h3>
            <p>
              Expand your knowledge and skills through our array of courses:
            </p>
          </div>
          <div className='accordion' id='accordionPanelsStayOpenExample'>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='panelsStayOpen-headingEight'>
                <button
                  className='accordion-button'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#panelsStayOpen-collapseEight'
                  aria-expanded='true'
                  aria-controls='panelsStayOpen-collapseEight'
                >
                  Full Stack Developer:
                </button>
              </h2>
              <div
                id='panelsStayOpen-collapseEight'
                className='accordion-collapse collapse show'
                aria-labelledby='panelsStayOpen-headingEight'
              >
                <div className='accordion-body'>
                  <p>
                    <strong>Courses include:</strong> HTML5, CSS3, Bootstrap 5,
                    JavaScript, MongoDB, ExpressJS, ReactJS, NodeJS.{' '}
                  </p>
                  <br />
                  <strong>Become a Full Stack Developer</strong> By combining
                  frontend and backend skills, you will learn to create entire
                  web applications, from the user interface to the server and
                  databases, making you proficient in all aspects of web
                  development. These courses provide a glimpse into the world of
                  coding, covering fundamental languages and comprehensive
                  development approaches, essential for aspiring developers and
                  tech enthusiasts. MERN Full Stack Developer.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

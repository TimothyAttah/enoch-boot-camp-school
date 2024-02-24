import React from 'react';

const AboutUs = () => {
  return (
    <section className='row w-100 py-0 bg-light' id='about_us'>
      <div className='col-lg-6 col-img'></div>
      <div className='col-lg-6 py-lg-5 py-sm-0'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
              <h6 className='text-primary'>Code with us</h6>
              <h1>This Training stands out</h1>
              <p>
                We offer quality teaching, with a step-by-step approach that
                suits your timeline. We follow American curriculum strictly.
              </p>

              <div className='about_us d-flex mt-5'>
                <div className='iconbox me-3'>
                  <i className='bx bxs-comment-edit'></i>
                </div>
                <div>
                  <h5>Comprehensive curriculum</h5>
                  <p>
                    A well-structured syllabus covering a range of programming
                    languages.
                  </p>
                </div>
              </div>
              <div className='about_us d-flex'>
                <div className='iconbox me-3'>
                  <i className='bx bxs-user-circle'></i>
                </div>
                <div>
                  <h5>Expert Instructors</h5>
                  <p>Experienced professionals to provide quality mentorship</p>
                </div>
              </div>
              <div className='about_us d-flex'>
                <div className='iconbox me-3'>
                  <i className='bx bxs-download'></i>
                </div>
                <div>
                  <h5>Project-Based Learning</h5>
                  <p>
                    Emphasis on practicals to apply and reinforce the concepts
                    learned
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

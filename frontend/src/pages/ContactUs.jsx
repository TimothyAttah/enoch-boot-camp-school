import React from 'react';

const ContactUs = () => {
  return (
    <div
      className='modal fade'
      id='exampleModal5'
      tabIndex='-1'
      aria-labelledby='exampleModal5Label'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='exampleModal5Label'>
              Ask Questions
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <form>
              <div className='mb-3'>
                <label htmlFor='recipient-name' className='col-form-label'>
                  Recipient:
                </label>
                <input
                  type='text'
                  className='form-control rounded-3'
                  id='recipient-name'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='message-text' className='col-form-label'>
                  Message:
                </label>
                <textarea
                  className='form-control  rounded-3'
                  id='message-text'
                ></textarea>
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary rounded-3'
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <button type='button' className='btn btn-primary rounded-3'>
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

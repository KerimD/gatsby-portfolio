import React from 'react';
import Modal from 'react-modal';

import './contact.css';

Modal.setAppElement('#___gatsby');

const Contact = ({ isOpen, closeModal }: TypesN.modalProps) =>
  <Modal
    className='contact-modal'
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel='Contact Modal'
  >
    <h2>Contact Form</h2>
    <form
      action='https://formsubmit.co/ac2a21972221bcc3fa925a93b6c118f3'
      method='POST'
    >
      <input type='text' name='_honey' style={{ display: 'none' }} />
      <input type='hidden' name='_next' value='https://kerimd.me/#footer' />
      <label>
        <p>Your Email</p>
        <input
          type='email'
          name='email'
          placeholder='doejohn@email.com'
          required
        />
      </label>
      <label>
        <p>Subject</p>
        <input
          type='text'
          name='_subject'
          placeholder='Come in for an interview!'
          required
        />
      </label>
      <label>
        <p>Your Message</p>
        <textarea
          name='message'
          placeholder={`Deniz,\n\nYou're the coolest candidate I've ever seen because...`}
          required
        />
      </label>
      <div className='contact-form-buttons'>
        <input type='button' value='Cancel' onClick={closeModal} />
        <input type='submit' value='Send' />
      </div>
    </form>
  </Modal>

export default Contact

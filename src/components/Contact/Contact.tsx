import React from "react";

import './contact.scss';

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('potato');
  }

  return (
    <section id='contact'>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Your Name</p>
          <input type='text' name='name' placeholder='John Doe' />
        </label>
        <label>
          <p>Your Email</p>
          <input type='text' name='email' placeholder='doejohn@email.com' />
        </label>
        <label>
          <p>Your Message</p>
          <textarea name='message' placeholder={`You're the coolest candidate I've ever seen because...`} />
        </label>
        <input type='submit' value='Send' />
      </form>
    </section>
  );
}

export default Contact

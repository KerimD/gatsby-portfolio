import React, { useEffect } from "react";

import './contact.css';

const Contact = () => {
  const animateForm =
    (element: HTMLElement, observer: IntersectionObserver) => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
      observer.disconnect();
    }

  useEffect(() => {
    Array
      .from(document.getElementsByClassName('contact-form')).forEach((v) =>
        new IntersectionObserver((entries, observer) =>
          entries[0].isIntersecting && animateForm(
            entries[0].target as HTMLElement, observer
          )).observe(v));
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('potato');
  }

  return (
    <section id='contact'>
      <h2>Contact</h2>
      <form className='contact-form' onSubmit={handleSubmit}>
        <label>
          <p>Your Email</p>
          <input type='text' name='email' placeholder='doejohn@email.com' />
        </label>
        <label>
          <p>Subject</p>
          <input type='text' name='subject' placeholder='Come in for an interview!' />
        </label>
        <label>
          <p>Your Message</p>
          <textarea name='message' placeholder={`Deniz,\n\nYou're the coolest candidate I've ever seen because...`} />
        </label>
        <input type='submit' value='Send' />
      </form>
    </section>
  );
}

export default Contact

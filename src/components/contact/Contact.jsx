import React, {useState} from 'react';
import "./contact.css";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    if (!name || !email || !subject || !message) {
      alert("Please fill out all the fields before submitting.");
      return;
    }

    emailjs.sendForm('service_mvr056c', 'template_5by9l29', e.target, '_pTpj6oYBwGWxmtDi')
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
      }, (error) => {
        console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email at asli@scu.edu 👋</p>
        </div>

        <form onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" name="name" className="contact__form-input" placeholder='Insert your name' />
            </div>

            <div className="contact__form-div">
              <input type="email" name="email" className="contact__form-input" placeholder='Insert your email' />
            </div>
          </div>

          <div className="contact__form-div">
              <input type="text" name="subject" className="contact__form-input" placeholder='Insert your subject' />
          </div>
          
          <div className="contact__form-div contact__form-area">
              <textarea name="message" id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your message'></textarea>
          </div>
          
          <div className="submit__button">
            <button type="submit" className="btn">Send Message</button>
            {messageSent && <p className="message__sent">Message Sent!</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
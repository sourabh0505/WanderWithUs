import React from 'react';
import './contactUs.css';
function ContactUs() {
  return (
    <div className='contact-container'>
      <section className='contact-banner'>
        <img src="./Images/manali.jpg" alt="contact banner" />
        <div>
        <h1>Contact Us</h1>
        </div>
      </section>

      <section className='contact-form'>
        <div className='contact-form-div'>
          <div className='contact-form-heading'>
            <h1>We'd love to hear from you</h1>
            <h4>Send us a message and we'll respond as soon as possible</h4>
          </div>

          <div className='contact-form-inputs'>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="number" placeholder='Phone Number' />
            <input type="text" placeholder='Subject' />
            <input type="text" placeholder='Type Your Message Here...' />
          </div>

          <div className='submit-btn'>
            <button>Submit Details</button>
          </div>
        </div>

        <div className='contact-info-div'>
          <img src="./Images/ladakh.jpg" alt="contact-image" />

          <div className='inner-info-div'>
            <h1>WanderWithUs</h1>

            <div>
              <h4>Tell. +91 991 662 7799</h4>
              <h4>Email : hello@tripbae.com</h4>
              <h4>#858, 4th Floor, Dr.Vishnuvardhan Rd, Channasandra, Rajrajeshwari Nagar, Bengaluru, Karnataka, India 560098</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
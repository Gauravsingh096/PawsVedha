import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="full-width-image">
        <img src="./images/letstalk.png" alt="Full Width" />
        <div className="header-container">
        <h1 className="custom-font">Reach out for pet-tacular assistance!!</h1>
      </div>
        <div className="circular-text">
          <svg width="200" height="200" viewBox="0 0 200 200" className="svg-text">
            <defs>
              <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
            </defs>
            <text>
              <textPath xlinkHref="#circlePath" startOffset="0">
                Caring and Nurturing the pets is our passion and goal to do better. 
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    
      <div className="content-container">
        <div className="left-content">
          <h2 className="info-text">Got a question??... Let's Paws and Chat..</h2>
          <form className="contact-form">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" />
            
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="E-mail" />
            
            <label htmlFor="other">Other:</label>
            <input type="text" id="other" name="other" className="variable-height-input" />

            {/* <input type="text" id="other" name="other" placeholder="Additional Details.." /> */}
            
            <button type="submit">Submit</button>
          </form>
          <div className="contact-info">
            <p><FontAwesomeIcon icon={faEnvelope} /> Email: contact@petassistance.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> Phone: +123456789</p>
            <p><FontAwesomeIcon icon={faClock} /> Hours: 9 AM - 5 PM</p>
          </div>
        </div>
        <div className="right-content">
        <div className="map">
  <iframe 
    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.917303633101!2d80.19212239184542!3d26.4503205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02b6d6bb5f%3A0x1cded4e9e17c7d!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614192374967!5m2!1sen!2sus&markers=color:red%7Clabel:S%7C26.4503205,80.19212239184542`}
    width="500" 
    height="640" 
    style={{ border: '10px solid violet' }}
    allowFullScreen="" 
    loading="lazy"
    title="map"
  ></iframe>
</div>

          <h2 className="text-social">Follow us on socials</h2>
          <div className="social-icons">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

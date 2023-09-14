import * as React from "react"
import "./styles.css"
import Header from '../components/header';
import LocalMap from '../images/Map.jpg'; 
import SlackLogo from '../logos/Slack.png'; 
import EmailLogo from '../logos/Email.png';
import AddressLogo from '../logos/Address.png';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <div className="contact-section">
          {/* <h1>Contact Information</h1> */}
          <div className="contact-info">
            <div className="contact-item">
              <p>[add content]</p>
              <span>Email Us: </span>
              <a href="mailto:wangyue@email.unc.edu">
                <img src={EmailLogo} alt="Email Logo" className="email-logo" style={{ maxWidth: '38px' }} />
              </a>
            {/* </div>
            <div className="contact-item"> */}
            <br></br>
              <span>Join Slack: </span>
              <a href="https://slack.com/" target="_blank" rel="noopener noreferrer">
                <img src={SlackLogo} alt="Slack Logo" className="slack-logo" style={{ maxWidth: '98px' }} />
              </a>
            </div>
          </div>
        </div>
        <div className="address-section">
          {/* <h1>Address Information</h1> */}
          <div className="address-info">
            <div className="contact-item">
              <img src={AddressLogo} alt="Address Logo" className="address-logo" style={{ maxWidth: '48px' }} /> 
              <p>7B Manning Hall <br /> 
              University of North Carolina at Chapel Hill <br /> 
              Chapel Hill, NC <br /> 
              27599-3360</p>
            </div>
            {/* Map picture */}
            <img src={LocalMap} alt="Local Map" className="local-map" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

      {/* Embedded Map, requires Google Map API key - maybe later */}
      {/* <iframe
        title="Map"
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed/v1/place?q=123+Example+Street,City,State,ZIP+Code&key=YOUR_API_KEY"
        allowFullScreen
      ></iframe> */}



import React, {useState} from 'react';
import AboutUs from '../pages/AboutUs';
import facebookImage from '../assets/facebook-icon.png';
import twitterImage from '../assets/icon-x.png';
import linkedinImage from '../assets/icon-linkedin.png';

export default function Header({ logout, handleAddNew, goBackToDashboard }) {

  const [showAboutUs, setShowAboutUs] = useState(false);

  const toggleAboutUs = () => {
    setShowAboutUs(!showAboutUs);
  };

  return (
    <footer>
      <div id="container">
        <div className="footer-section">
          <h6>GET IN TOUCH</h6>
          <ul className='social-media'>
            <div className="profile-image-container">
              <img src={facebookImage} alt="facebook" />
            </div>
            <div className="profile-image-container">
              <img src={twitterImage} alt="twitter" />
            </div>
            <div className="profile-image-container">
              <img src={linkedinImage} alt="linkedin" />
            </div>
            </ul>
         
        </div>

        <div className="footer-section">
          <h6>ABOUT US</h6>
          <ul>
          
            <li className='logout-btn' onClick={toggleAboutUs}>Our Team</li>
            <li className='logout-btn'>What Our Users Say</li>
            
          </ul>
        </div>
        {showAboutUs && <AboutUs />}
        <div className="footer-section">
          <h6>QUICK LINKS</h6>
          <ul>
            <li className='logout-btn'>Home</li>
            <li className='logout-btn'>Contact</li>
            <li className='logout-btn'>FAQ</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

import React, {useState} from 'react';
import AboutUs from '../pages/AboutUs';

export default function Header({ logout, handleAddNew, goBackToDashboard }) {

  const [showAboutUs, setShowAboutUs] = useState(false);

  const toggleAboutUs = () => {
    setShowAboutUs(!showAboutUs);
  };

  return (
    <footer>
      <div id="container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul >
            <li className='logout-btn'>Facebook</li>
            <li className='logout-btn'>Twitter</li>
            <li className='logout-btn'>Email</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
          
            <li className='logout-btn' onClick={toggleAboutUs}>Our Team</li>
            <li className='logout-btn'>What Our Users Say</li>
            
          </ul>
        </div>
        {showAboutUs && <AboutUs />}
        <div className="footer-section">
          <h3>Quick Links</h3>
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

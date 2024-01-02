

import React from 'react';
import { Link } from 'react-router-dom'; 
import Header from '../components/Header';

import '../styles/home.scss';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <main className="landing-content">
        <section className="hero-section">
          <h1>Your Health, Our Priority</h1>
          <p>
            Welcome to Pilpal, your personal supplement and health reminder app. Keep track of your supplements and stay healthy effortlessly.
          </p>
          <div className="cta-buttons">
            
            {/* <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link> */}
          </div>
        </section>
        <section className="features-section">
          <h2>Features</h2>
          {/* Add feature descriptions here */}
        </section>
        <section className="testimonial-section">
          <h2>What Our Users Say</h2>
          {/* Add user testimonials here */}
        </section>
      </main>
    </div>
  );
}

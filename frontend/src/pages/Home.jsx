
import React from 'react';
import Footer from '../components/Footer';
import '../styles/home.scss';
import ringImage from '../assets/icon1.png';
import noteImage from '../assets/icon2.png';
import reminderImage from '../assets/icon3.png';
import groupImage from '../assets/Group_32981.png';
import useApplicationData from '../hooks/useApplicationData';


export default function Home({ userLoginClicked, clickSignUp }) {


  return (
    <div className="">
      <header >
        <nav >
          {/* <div className="logo">
            <h1>Pilpal</h1> <span >✷</span>
            </div>  */}

          <ul >
            <li>already have an account?</li><div className="nav-container--left"><li onClick={userLoginClicked}>Login</li>

            </div>
          </ul>
        </nav>
      </header>

      <main className="dashboard-container container">
        <section className="container-top">
          <article >
            <h1 >
              simplify your health routine <br /> with Pilpal<span>✷</span>
            </h1>
            <article className="article-container">
              <div >
                <h2>Your personal supplement assistance, helping you stay on track with your health goals everyday.</h2>
                <div className="btn-container">
                  <button onClick={clickSignUp}>Get Started</button>
                </div>
              </div>
              <div className="">
                <img src={groupImage} alt="group" />
              </div>
            </article>
          </article>
        </section>
        <section className="container-bottom">
          <article className="container-left">
            <div id="container">
              <div className="second-section">


                <ul >
                  HealthHabitHelper

                </ul>
              </div>

              <div className="second-section">


                <ul>

                  dailyDoseBuddy
                </ul>
              </div>

              <div className="second-section">


                <ul>
                  TrackWithPilpal
                </ul>
              </div>
            </div>
            <h3>Welcome to Pilpal</h3>
            <p>Pilpal transforms the way you manage your supplements.
              Our intuitive app is designed to help you effortlessly track your vitamin intake.
              remind you what to take and when.It's the simple,
              smart solution to support your wellness routine and keep your health onn track.
            </p>
          </article>
        </section>
        <div id="container">
          <div className="main-section">
            <div className="profile-image-container">
              <img src={ringImage} alt="User Profile" />
            </div>
            <h3>Tailored Reminder</h3>
            <ul >
              keep your health journey on track with personalized reminders for each supplement.
              pilpal insures you will remember to take your vitamins at the right time, every time.

            </ul>
          </div>

          <div className="main-section">
            <div className="profile-image-container">
              <img src={noteImage} alt="User Profile" />
            </div>
            <h3>Inventory Tracking</h3>
            <ul>

              stay informed about your supplement levels.
              Pilpal alerts you before you run out.giving you ample time to replenish your stock without interruption.

            </ul>
          </div>

          <div className="main-section">
            <div className="profile-image-container">
              <img src={reminderImage} alt="User Profile" />
            </div>
            <h3>Seamless Scheduling</h3>
            <ul>
              manage your daily intake with our easy-to-use Scheduling tool.
              Organize your supplement regimen with a few clicks and enjoy a Seamless wellness experience.
            </ul>
          </div>
        </div>
        <Footer />
      </main>


    </div>
  );
}

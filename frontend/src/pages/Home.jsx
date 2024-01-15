// import ringImage from '../assets/icon1.png';
// import noteImage from '../assets/icon2.png';
// import reminderImage from '../assets/icon3.png';
// import heroImage from '../assets/hero-image.png';
// import hashtagImage from '../assets/line1.png';
// import leftBorderImage from '../assets/line2.png';
// import iconFacebook from '../assets/icon-facebook.png';
// import iconX from '../assets/icon-x.png';
// import iconLinkedin from '../assets/icon-linkedin.png';

// export default function Landing({ userLoginClicked, clickSignUp }) {
//   return (
//     <>
//       <main className="container home-container">
//         <div className="login">
//           already have an account? <span onClick={userLoginClicked}>Login</span>
//         </div>
//         <section className="hero">
//           <div className="hero-left">
//             <h1>
//               Simplify Your Health Routine with <span>Pilpal</span>
//             </h1>
//             <p>
//               Your personal supplement assistant, helping you stay on track with
//               your health goals every day.
//             </p>
//             <button onClick={clickSignUp} className="btn-main">
//               Get Started
//             </button>
//           </div>
//           <div className="hero-right">
//             <div className="circle"></div>
//             <img src={heroImage} alt="group" />
//           </div>
//         </section>
//         <section className="intro">
//           <div className="intro-left">
//             <img src={leftBorderImage} alt="line" />
//           </div>
//           <div className="intro-right">
//             <ul className="hashtags">
//               <li>
//                 <img src={hashtagImage} alt="hashtag" />
//               </li>
//               <li>HealthHabitHelper</li>
//               <li>DailyDoseBuddy</li>
//               <li>TrackWithPilpal</li>
//             </ul>
//             <h2>Welcome to Pilpal</h2>
//             <p>
//               Pilpal transforms the way you manage your supplements. Our
//               intuitive app is designed to help you effortlessly track your
//               vitamin intake, reminding you what to take and when. It's the
//               simple, smart solution to support your wellness routine and keep
//               your health on track.
//             </p>
//           </div>
//         </section>
//         <section className="blurbs">
//           <div className="blurb">
//             <img src={ringImage} alt="alarm" />
//             <h3>Tailored Reminders</h3>
//             <p>
//               Keep your health journey on track with personalized reminders for
//               each supplement. Pilpal ensures you'll remember to take your
//               vitamins at the right time, every time.
//             </p>
//           </div>
//           <div className="blurb">
//             <img src={noteImage} alt="note" />
//             <h3>Inventory Trackings</h3>
//             <p>
//               Stay informed about your supplement levels. Pilpal alerts you
//               before you run out, giving you ample time to replenish your stock
//               without interruption.
//             </p>
//           </div>
//           <div className="blurb">
//             <img src={reminderImage} alt="calendar" />
//             <h3>Seamless Scheduling</h3>
//             <p>
//               Manage your daily intake with our easy-to-use scheduling tool.
//               Organize your supplement regimen with a few clicks and enjoy a
//               seamless wellness experience.
//             </p>
//           </div>
//         </section>
//       </main>
//       <footer>
//         <div className="footer-container">
//           <div className="footer-top">
//             <div className="footer-top-left">
//               <h4>Get in Touch</h4>
//               <ul className="socials">
//                 <li>
//                   <img src={iconFacebook} alt="facebook icon" />
//                 </li>
//                 <li>
//                   <img src={iconX} alt="X icon" />
//                 </li>
//                 <li>
//                   <img src={iconLinkedin} alt="LinkedIn icon" />
//                 </li>
//               </ul>
//             </div>
//             <div className="footer-top-right">
//               <div className="about-us">
//                 <h4>About Us</h4>
//                 <ul>
//                   <li>Our Team</li>
//                   <li>What Our Users Say</li>
//                 </ul>
//               </div>
//               <div className="quick-links">
//                 <h4>Quick LInks</h4>
//                 <ul>
//                   <li>Home</li>
//                   <li>Login</li>
//                   <li>Register</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <p>
//               © 2024 Pilpal project by Luwam, Hosu, Eustace for Lighthouse Labs
//             </p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }
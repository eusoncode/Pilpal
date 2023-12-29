// import React, { useState } from 'react';
// import signupImage from '../assets/image-01.png';

// export default function UserRegister() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
//   };

//   return (
//     <>
//       <main className="container userRegister-container">
//         <section className="userRegister-container-left">
//           <img src={signupImage} alt="pills" />
//         </section>

//         <section className="userRegister-container-right">
//           <p className="accent">
//             Pilpal<span>✷</span>
//           </p>
//           <h1>
//             Create Your <br></br>Pilpal Account
//           </h1>
//           <span>Simplify your health routine. Get started now.</span>

//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="username">Username:</label>
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="confirmPassword">Confirm Password:</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </div>

//             <button type="submit">Register</button>
//           </form>
//         </section>
//       </main>
//     </>
//   );
// }
/**
 *  Displays some login page texts and a form with labels and username, password, login inputs
 * @param {text, onSubmit} props
 * @return {} login page
 */
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import loginImage from '../assets/image-01.png';

export default function Login({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    email && login(email, password);
    navigate('/dashboard');
  };

  return (
    <div className="jumbtron">
      <main className="login-container">
        <section className="login-container-left">
          <img src={loginImage} alt="pills" />
        </section>
        <section className="login-container-right">
          <p className="accent">
            <Link to="/">Pilpal</Link>
            <span>✷</span>
          </p>
          <h1>Login to your Account</h1>
          <form onSubmit={onSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Login" />
          </form>
        </section>
      </main>
    </div>
  );
}

/**
 *  Displays some login page texts and a form with labels and username, password, login inputs
 * @param {text, onSubmit} props
 * @return {} login page
 */
import { useState } from 'react';
import loginImage from '../assets/image-01.png';

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onSubmit = (e) => {
    e.preventDefault();
    email && props.login(email, password);
  }

  return (
    <div className='jumbtron'>
      <main className="container login-container">
        <section className="login-container-left">
          <img src={loginImage} alt="pills" />
        </section>
        <section className="login-container-right">
          <p className="accent">
            Pilpal<span>✷</span>
          </p>
          <h1>Login to your Account</h1>
          <span>
            Doesn't have the account yet? <a href="/signup">Sign up</a>
          </span>
          <form onSubmit={onSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              placeholder='Enter your email address'
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder='Password'
              onChange={e => setPassword(e.target.value)}
            />
            <input
              type="submit"
              value="Login"
            />
          </form>
        </section>
      </main>
    </div>
  );
}

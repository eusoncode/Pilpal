import loginImage from '../assets/image-01.png';

export default function Login() {
  return (
    <>
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
          <form action="">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <input type="submit" value="Login" />
          </form>
        </section>
      </main>
    </>
  );
}

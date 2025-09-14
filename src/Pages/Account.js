import React from "react";
import './account.css';
import NavBar from "../Components/NavBar"; 
import Footer from "../Components/Footer";


export default function Account() {
  const login = (e) => {
    e.preventDefault();
    console.log("Login button clicked");
  };

  return (
    <>
      <NavBar />
    <div className="acc-page">
      <section className="account">
        <input type="checkbox" id="check" aria-hidden="true" />

        <div className="signUp">
          <form>
            <label htmlFor="check" aria-hidden="true" className="signup">
              SignUp
            </label>
            <input type="text" name="username" placeholder="User Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className="signIn">
          <form onSubmit={login}>
            <label htmlFor="check" aria-hidden="true">
              SignIn
            </label>
            <input
              type="text"
              name="username"
              placeholder="Email or User Name"
              id="username"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              required
            />
            <button type="submit">Sign In</button>
            <p>
              <a href="#">Forget account?</a>
            </p>
          </form>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}

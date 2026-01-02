import React, { useState, useContext, useRef } from "react";
import './account.css';
import NavBar from "../Components/NavBar"; 
import Footer from "../Components/Footer";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

export default function Account() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const checkboxRef = useRef(null); // For toggling SignUp/SignIn forms

  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    whatsapp: "",
    password: "",
    confirmPassword: ""
  });
  const [signInData, setSignInData] = useState({
    emailOrUsername: "",
    password: ""
  });
  const [error, setError] = useState("");

  const API_BASE_URL = "http://localhost:5000"; // Backend URL

  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSignInChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    if (signUpData.password !== signUpData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!signUpData.whatsapp) {
      setError("WhatsApp number is required.");
      return;
    }
    if (!signUpData.username) {
      setError("Username is required.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password);
      const uid = userCredential.user.uid;

      // Save user profile to backend
      await fetch(`${API_BASE_URL}/users/profile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid,
          username: signUpData.username,
          whatsapp: signUpData.whatsapp
        }),
      });

      alert("Account created successfully!");
      if (checkboxRef.current) {
        checkboxRef.current.checked = true;  // Switch to Sign In form automatically
      }
      setSignUpData({
        username: "",
        email: "",
        whatsapp: "",
        password: "",
        confirmPassword: ""
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, signInData.emailOrUsername, signInData.password);
      alert("Logged in successfully!");
      if (userCredential.user.email === "yasasmigunasinghe@gmail.com") {
        navigate("/admin");
      } else {
        navigate("/account");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // If user already logged in, show logged-in info and options
  if (user) {
    return (
      <>
        <NavBar />
        <div className="acc-page">
          <h2>You are already logged in.</h2>
          <p>Go to <a href="/account">My Account</a> or Logout from the navbar.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="acc-page">
        <section className="account">
          {/* Checkbox controls which form is visible */}
          <input type="checkbox" id="check" aria-hidden="true" ref={checkboxRef} />

          <div className="signUp">
            <form onSubmit={handleSignUp}>
              <label htmlFor="check" aria-hidden="true" className="signup">SignUp</label>
              <input
                type="text"
                name="username"
                placeholder="User Name"
                required
                value={signUpData.username}
                onChange={handleSignUpChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={signUpData.email}
                onChange={handleSignUpChange}
              />
              <input
                type="text"
                name="whatsapp"
                placeholder="WhatsApp Number"
                required
                value={signUpData.whatsapp}
                onChange={handleSignUpChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={signUpData.password}
                onChange={handleSignUpChange}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                value={signUpData.confirmPassword}
                onChange={handleSignUpChange}
              />
              <button type="submit">Sign Up</button>
              {error && <p style={{ color: "yellow", textAlign: "center" }}>{error}</p>}
            </form>
          </div>

          <div className="signIn">
            <form onSubmit={handleSignIn}>
              <label htmlFor="check" aria-hidden="true">SignIn</label>
              <input
                type="email"
                name="emailOrUsername"
                placeholder="Email or User Name"
                id="username"
                required
                value={signInData.emailOrUsername}
                onChange={handleSignInChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
                value={signInData.password}
                onChange={handleSignInChange}
              />
              <button type="submit">Sign In</button>
              {error && <p style={{ color: "yellow", textAlign: "center" }}>{error}</p>}
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

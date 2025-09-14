import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <div>
      <div className="nav">
        <h1>AROMI FASION ACADEMY</h1>
      </div>
      <div className="nav-title">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/orders">My Orders</Link></li>
          <li><Link to="/plans">Plans and Pricing</Link></li>
          <li><Link to="/subscriptions">My Subscriptions</Link></li>
          <li><Link to="/account">My Account</Link></li>
          <li><Link to="/wallet">My Wallet</Link></li>
        </ul>
      </div>
    </div>
  );
}

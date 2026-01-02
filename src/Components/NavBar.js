import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import "./navbar.css";

export default function NavBar() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/account"); // send to login page after logout
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div>
      <div className="nav">
        <h1>AROMI FASION ACADEMY</h1>
      </div>,
      <div className="nav-title">
        <ul>
          <li><Link to="/">Home</Link></li>
          {/*<li><Link to="/orders">My Orders</Link></li>
          <li><Link to="/plans">Plans and Pricing</Link></li>
          <li><Link to="/subscriptions">My Subscriptions</Link></li>
          <li><Link to="/wallet">My Wallet</Link></li>*/}
          <li><Link to="/account">My Account</Link></li>
          <li><Link to="/advertisement">Advertisement</Link></li>
        </ul>
      </div>
    </div>
  );
}

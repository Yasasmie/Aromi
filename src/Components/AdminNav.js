import React from "react";
import { Link } from "react-router-dom";
import "./adminnav.css";

export default function AdminNav() {
  return (
    <>
      <div className="nav">
        <h1>AROMI FASION ACADEMY - Admin</h1>
      </div>
      <div className="nav-title">
        <ul>
          <li><Link to="/admin">User Management</Link></li>
          <li><Link to="/adminaccount">My Account</Link></li>
          <li><Link to="/admin/add-advertisement">Add Advertisement</Link></li>
        </ul>
      </div>
    </>
  );
}

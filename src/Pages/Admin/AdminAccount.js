import React, { useContext } from "react";
import AdminNav from "../../Components/AdminNav";
import "./adminaccount.css";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

export default function AdminAccount() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user || user.email !== "yasasmigunasinghe@gmail.com") {
    return (
      <div style={{ padding: "2rem", textAlign: "center", color: "red" }}>
        Access denied. You are not authorized to view this page.
      </div>
    );
  }

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/account");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <>
      <AdminNav />
      <div className="admin-account-container">
        <h2>Admin Profile</h2>
        <p><strong>Email:</strong> {user.email}</p>

        {/* Logout button */}
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import './profile.css';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function ProfilePage() {
  const { user, changePassword, logout, loading } = useContext(UserContext);
  const [profile, setProfile] = useState({
    username: "",
    whatsapp: "",
    email: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [changePwdMode, setChangePwdMode] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch user profile info from backend Firestore
  useEffect(() => {
    if (user) {
      async function fetchProfile() {
        try {
          const response = await fetch(`http://localhost:5000/users`);
          const data = await response.json();
          const currentUserProfile = data.find(u => u.uid === user.uid);
          if (currentUserProfile) {
            setProfile({
              username: currentUserProfile.username || "",
              whatsapp: currentUserProfile.whatsapp || "",
              email: user.email || "",
            });
          }
        } catch (err) {
          console.error(err);
        }
      }
      fetchProfile();
    }
  }, [user]);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Please sign in to view your profile.</p>;

  const handleChange = (e) => {
    setProfile({...profile, [e.target.name]: e.target.value});
  };

  const handleSaveProfile = async () => {
    setError("");
    setSuccess("");
    if (!profile.username || !profile.whatsapp) {
      setError("Username and WhatsApp number cannot be empty.");
      return;
    }
    try {
      // Save profile to backend
      await fetch("http://localhost:5000/users/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid: user.uid, username: profile.username, whatsapp: profile.whatsapp }),
      });
      setSuccess("Profile updated successfully!");
      setEditMode(false);
    } catch (err) {
      setError("Failed to update profile.");
    }
  };

  const handleChangePassword = async () => {
    setError("");
    setSuccess("");
    if (newPassword !== confirmNewPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (newPassword.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }
    try {
      await changePassword(newPassword);
      setSuccess("Password changed successfully. You need to log in again.");
      await logout();
    } catch (error) {
      setError("Failed to change password: " + error.message);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <NavBar />

      <div className="profile-page">
        <h2>My Profile</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        {!editMode && !changePwdMode && (
          <>
            <p><strong>Username:</strong> {profile.username}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>WhatsApp:</strong> {profile.whatsapp}</p>
            <button onClick={() => setEditMode(true)}>Edit Profile</button>
            <button onClick={() => setChangePwdMode(true)}>Change Password</button>
          </>
        )}

        {editMode && (
          <div>
            <label>
              Username:
              <input type="text" name="username" value={profile.username} onChange={handleChange} />
            </label>
            <br />
            <label>
              WhatsApp:
              <input type="text" name="whatsapp" value={profile.whatsapp} onChange={handleChange} />
            </label>
            <br />
            <button onClick={handleSaveProfile}>Save</button>
            <button onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        )}

        {changePwdMode && (
          <div>
            <label>
              New Password:
              <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            </label>
            <br />
            <label>
              Confirm New Password:
              <input type="password" value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
            </label>
            <br />
            <button onClick={handleChangePassword}>Change Password</button>
            <button onClick={() => setChangePwdMode(false)}>Cancel</button>
          </div>
        )}

        {/* Logout button fixed at bottom */}
        <div className="logout-container">
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>

    </>
  );
}

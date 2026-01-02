import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/AdminNav";
import "./adminDashboard.css";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [editEmail, setEditEmail] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const navigate = useNavigate();
  const API_BASE_URL = "http://localhost:5000";

  useEffect(() => {
    const user = auth.currentUser;
    if (!user || user.email !== "yasasmigunasinghe@gmail.com") {
      navigate("/account");
    }
  }, [navigate]);

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE_URL}/users`);
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Failed to fetch users: ${res.status} ${text}`);
      }
      const data = await res.json();
      setUsers(data);
      setCurrentPage(1); // Reset to first page after fetching users
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (uid) => {
    setError("");
    try {
      const res = await fetch(`${API_BASE_URL}/users/${uid}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Failed to delete user: ${res.status} ${text}`);
      }
      fetchUsers();
    } catch (err) {
      setError(err.message);
    }
  };

  const startEdit = (user) => {
    setEditingUser(user);
    setEditEmail(user.email);
  };

  const cancelEdit = () => {
    setEditingUser(null);
    setError("");
  };

  const submitEdit = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/users/${editingUser.uid}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: editEmail }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Failed to update user: ${res.status} ${text}`);
      }
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAccept = async (uid) => {
    setError("");
    try {
      const res = await fetch(`${API_BASE_URL}/users/accept/${uid}`, {
        method: "POST",
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Failed to accept user: ${res.status} ${text}`);
      }
      fetchUsers();
    } catch (err) {
      setError(err.message);
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(users.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = users.slice(startIndex, startIndex + usersPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleBack = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <> <NavBar />
    
    <div className="admin-container">
      <h2>Admin User Management</h2>
      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Username</th>
                <th>WhatsApp Number</th>
                <th>Accepted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>
                    No users found
                  </td>
                </tr>
              ) : (
                currentUsers.map((user) => (
                  <tr key={user.uid}>
                    <td>{user.email}</td>
                    <td>{user.username || "-"}</td>
                    <td>{user.whatsapp || "-"}</td>
                    <td>{user.accepted ? "Yes" : "No"}</td>
                    <td>
                <div className="action-buttons">
                  <button className="btn-edit" onClick={() => startEdit(user)}>Edit</button>
                  <button className="btn-delete" onClick={() => handleDelete(user.uid)}>Delete</button>
                </div>

                  {!user.accepted && (
                        <button
                          className="btn-accept"
                          onClick={() => handleAccept(user.uid)}
                        >
                          Accept
                        </button>
                      )}

                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="pagination-controls" style={{ marginTop: "1rem", textAlign: "center" }}>   
            <button onClick={handleBack} disabled={currentPage === 1}>
              Back
            </button>
            <span style={{ margin: "0 1rem" }}>
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={handleNext} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}

      {/* Edit Modal */}
      {editingUser && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Edit User</h3>
            <input
              type="email"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
            />
            <div className="modal-buttons">
              <button className="btn-save" onClick={submitEdit}>
                Save
              </button>
              <button className="btn-cancel" onClick={cancelEdit}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

// src/components/AdminNavbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminNavbar.css";

function AdminNavbar() {
  const navigate = useNavigate();
  const adminName = sessionStorage.getItem("role") || "admin";

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark admin-navbar">
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold" to="/admin/dashboard">
          Student Portal
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNav">
          <ul className="navbar-nav mx-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/admin/dashboard">
                Dashboard
              </Link>
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Courses
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/admin/courses">
                    Get All Courses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/admin/courses/add">
                    Add Course
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Videos
              </span>
              <ul className="dropdown-menu">
                <li>
                  <span className="dropdown-item disabled">Get All Videos</span>
                </li>
                <li>
                  <span className="dropdown-item disabled">Add Video</span>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Students
              </span>
              <ul className="dropdown-menu">
                <li>
                  <span className="dropdown-item disabled">Get All Students</span>
                </li>
              </ul>
            </li>
          </ul>

          {/* Admin profile */}
          <div className="dropdown ms-3">
            <button
              className="btn btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              {adminName}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" to="/profile">
                  Update Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/change-password">
                  Change Password
                </Link>
              </li>
              <li>
                <button className="dropdown-item" onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;

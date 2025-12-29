import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");
  const role = sessionStorage.getItem("role"); // "admin" or "student"
  const isLoggedIn = !!token;

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    navigate("/");
  };

  return (
    <>
      {/* TOP NAVBAR (always visible) */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#06b6d4" }}>
        <div className="container-fluid px-4">
          <Link className="navbar-brand fw-bold" to="/">
            Student Portal
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#topNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="topNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>

            {/* Right side */}
            {!isLoggedIn ? (
              <Link className="btn btn-outline-light btn-sm" to="/login">
                Login
              </Link>
            ) : (
              <div className="dropdown">
                <button
                  className="btn btn-outline-light btn-sm dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {role || "user"}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  {role !== "admin" && (
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                  )}
                  <li>
                    <button className="dropdown-item" onClick={logout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* SECOND NAVBAR (admin only) */}
      {isLoggedIn && role === "admin" && (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#0b63f3" }}>
          <div className="container-fluid px-4">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#adminNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="adminNav">
              <ul className="navbar-nav mx-auto">
                {/* Dashboard */}
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/dashboard">
                    Dashboard
                  </Link>
                </li>

                {/* Courses */}
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                    Courses
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/admin/get-all-courses">
                        Get All Courses
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/admin/add-course">
                        Add Course
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Videos */}
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                    Videos
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/admin/videos">
                        Get All Videos
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/admin/videos/add">
                        Add Video
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Students */}
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                    Students
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/admin/students">
                        Get All Students
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;

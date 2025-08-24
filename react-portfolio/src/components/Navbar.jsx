import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm navbar-dark"
      style={{
        background: "linear-gradient(90deg, #0f172a, #1e293b, #0f172a)", // cool gradient
      }}
    >
      <div className="container">
        {/* Brand */}
        <NavLink className="navbar-brand fw-bold text-info fs-4" to="/">
          <span style={{ letterSpacing: "1px" }}>🚀 Rohan Gaikwad</span>
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["Home", "About", "Projects", "Resume"].map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link px-3 fw-semibold ${
                      isActive ? "text-info border-bottom border-info" : "text-white"
                    }`
                  }
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  style={{
                    transition: "all 0.3s ease",
                  }}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


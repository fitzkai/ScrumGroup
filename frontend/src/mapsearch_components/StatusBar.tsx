import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StatusBar.css'; // Ensure this file exists
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Add Bootstrap JavaScript

const StatusBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="status-bar fixed-top w-100 d-flex justify-content-between align-items-center p-3 bg-light">
      {/* Hamburger Menu */}
      <div className="menu-container">
        <button
          className="menu-button btn btn-outline-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        {/* Dropdown Menu */}
        {isOpen && (
          <div className="dropdown-menu show">
            <Link
              to="/"
              className="dropdown-item"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/calendar"
              className="dropdown-item"
              onClick={() => setIsOpen(false)}
            >
              Calendar
            </Link>
          </div>
        )}
      </div>

      {/* Time Display */}
      <div className="time-display text-center">
        <span className="h5">9:41</span>
      </div>

      {/* Status Icons */}
      <div className="status-icons d-flex gap-2">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d234d95093f9e6123b5c30b8c11fcea5f03b44ae1d5bfa04562329ef7857e01d?apiKey=fcbc18c0ae9f445a9c83d7acaf1eb233"
          alt="Signal strength"
          className="status-icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f876cd50a3e484ad8eff7cabd9b659c8e64d7f90c3bb84f2b35e5ed56aed14a?apiKey=fcbc18c0ae9f445a9c83d7acaf1eb233"
          alt="Battery level"
          className="status-icon"
        />
      </div>
    </header>
  );
};

export default StatusBar;

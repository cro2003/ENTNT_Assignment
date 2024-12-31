import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <h1>Welcome to Communication Tracker</h1>
      <div className="homepage-options">
        <div className="homepage-option" onClick={() => navigate("/user")}>
          <h2>User</h2>
        </div>
        <div className="homepage-option" onClick={() => navigate("/admin")}>
          <h2>Admin</h2>
        </div>
        <div className="homepage-option" onClick={() => navigate("/reports")}>
          <h2>Report Module</h2>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

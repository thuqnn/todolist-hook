import React from "react";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Link to="/">Logout</Link>
      <Link to="/todo">Home</Link>
    </div>
  );
};

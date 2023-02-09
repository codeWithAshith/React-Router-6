import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Home</h2>
      <Link to="/about" className="btn">
        About
      </Link>
      <Outlet />
    </>
  );
};

export default Home;

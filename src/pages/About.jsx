import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h2>About</h2>
      <Link to="/" className="btn">
        About
      </Link>
    </>
  );
};

export default About;

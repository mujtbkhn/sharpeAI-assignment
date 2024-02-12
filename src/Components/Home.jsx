import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-xl font-bold">Welcome to our Home Page</h1>
    </div>
  );
};

export default Home;

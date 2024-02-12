import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import BACKGROUND from "../images/crypto.png";

const Home = () => {
  return (
    <div
      className="h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${BACKGROUND})` }}
    >
      <Navbar />
      <div className="flex flex-col gap-10 p-5 mt-10">
        <h1 className="flex text-3xl font-bold">Sharpe AI</h1>
        <h1 className="relative text-5xl font-bold" style={{ width: "600px" }}>
          Infrastructure and Services to onboard the{" "}
          <span
            className=" inset-0 bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-transparent bg-clip-text"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            next 100 million
          </span>{" "}
          users to DeFi.
        </h1>

        <div className="flex gap-5">
          <button className="w-48 px-4 py-3 text-black transition duration-300 ease-in-out bg-transparent border border-black rounded-lg hover:bg-black hover:text-white">
            <Link to={"/transaction"}> Send Money</Link>
          </button>
          <button className="w-48 px-4 py-3 text-black transition duration-300 ease-in-out bg-transparent border border-black rounded-lg hover:bg-black hover:text-white">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import Navbar from "./Navbar";
import { isAddress } from "web3-validator";
import "../firebaseConfig";
import { getFirestore, addDoc, collection } from "firebase/firestore";

// import { ethers } from "ethers";

const Transaction = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const db = getFirestore();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!walletAddress || !isAddress(walletAddress)) {
      // console.log(isAddress);
      setError("Please provide a valid Ethereum address");
      return;
    }
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount < 0 || parsedAmount > 10000) {
      setError("Please enter a valid amount between 0 and 10,000");
      return;
    }
    const timestamp = new Date();

    try {
      const docRef = await addDoc(collection(db, "transactions"), {
        walletAddress,
        amount: parsedAmount,
        timestamp: new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).format(timestamp),
      });
      console.log("Document written with ID: ", docRef.id);
      setSuccess(true);
      setError("");
    } catch (error) {
      console.error("Error adding document: ", error);
      setError("An error occurred while processing your request");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Transaction Page</h1>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="wallet-address">
              Wallet Address
            </label>
            <input
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="p-3 border border-black rounded-md"
              id="wallet-address"
              placeholder="0x..."
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium" htmlFor="amount">
              Amount
            </label>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="p-3 border border-black rounded-md"
              id="amount"
              placeholder="Enter amount (0 - 10,000)"
            />
          </div>
          {error
            ? error && <p className="text-red-700">{error}</p>
            : success && (
                <p className="text-yellow-600">
                  You have submitted successfully
                </p>
              )}

          <button className="w-full p-3 text-white bg-black rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Transaction;

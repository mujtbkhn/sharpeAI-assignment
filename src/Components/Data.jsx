import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Data = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  //Logic to fetch the data from firestore
  const fetchData = async () => {
    const db = getFirestore();
    const transactionCollection = collection(db, "transactions");
    const dataSnapshot = await getDocs(transactionCollection);
    const data = dataSnapshot.docs.map((doc) => doc.data());
    setTransactions(data);
    setLoading(false);
  };
  return (
    <div>
      <Navbar />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <div className="px-10 py-4 m-5 bg-gray-100 rounded-xl">
              <div className="flex justify-between ">
                <h1 className="font-bold">{transaction.walletAddress}</h1>
                <p className="font-bold">{transaction.amount} ETH</p>
              </div>
              <p>{transaction.timestamp}</p>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Data;

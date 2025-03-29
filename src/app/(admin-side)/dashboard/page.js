"use client";
import React, { useEffect, useState } from "react";
import Calendar from "@/components/calendar";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "@/library/axios";

export default function Admin() {
  const [balances, setBalances] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showNfcModal, setShowNfcModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [nfcId, setNfcId] = useState("");

  const fetchDashboardData = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        console.log("No token found.");
        return;
      }

      const decoded = jwtDecode(token);

      const balanceRes = await axiosInstance.get(
        `/paymentIntent/getBalance/${decoded.sub}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const transactionsRes = await axiosInstance.get(
        `/paymentIntent/transactions/${decoded.sub}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setBalances(balanceRes.data.data);
      setTransactions(transactionsRes.data.data);
    } catch (err) {
      console.error("Fetch Error:", err);
      console.log("Failed to fetch data. Check server.");
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleWithdrawClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleNfcModalClose = () => {
    setShowNfcModal(false);
    setNfcId("");
  };

  const handleConfirmWithdraw = () => {
    setShowModal(false);
    setShowNfcModal(true);
  };

  const handleNfcIdSubmit = () => {
    console.log("NFC ID Submitted:", nfcId);

    setShowNfcModal(false);
    setNfcId("");
  };

  return (
    <main className="w-full h-full rounded-2xl flex flex-row justify-between gap-x-4 bg-[#ffffff] p-6">
      <div className="h-full w-[60%]">
        <h1 className="text-[4vw]">Hello, Admin! 👋</h1>

        <div className="h-[85%] shadow-xl border rounded-xl p-4 overflow-y-scroll">
          <h1 className="text-[2vw]">Transaction History</h1>
          <table className="w-full mt-4 table-auto">
            <thead>
              <tr>
                <th className="w-[20%] text-center">User ID</th>
                <th className="w-[40%] text-center">Description</th>
                <th className="w-[20%] text-center">Date & Time</th>
                <th className="w-[20%] text-center">Amount</th>
              </tr>
            </thead>
          </table>
          <div className="overflow-y-scroll w-full no-scrollbar">
            <table className="w-full mt-4 table-auto">
              <tbody>
                {transactions.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="w-[20%] capitalize text-center">
                      <p className="max-w-full">{item.receiver_id}</p>
                    </td>
                    <td className="max-w-[40%] capitalize text-center text-[1vw]">
                      {item.description}
                    </td>
                    <td className="w-[20%] capitalize text-center text-[1vw]">
                      {new Date(
                        new Date(item.timestamp).getTime() - 8 * 60 * 60 * 1000
                      ).toLocaleString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </td>
                    <td className="w-[20%] text-center">₱ {item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="w-[40%] h-full items-center flex flex-col justify-between">
        <div className=" h-full w-full rounded-xl border shadow-xl mb-4 bg-gradient-to-br from-[#002147] to-[#168FCC] text-white p-6 flex items-center justify-around">
          {balances.length > 0 ? (
            balances.map((user) => (
              <div key={user.user_id} className="w-full h-[80%]">
                <h1 className="font-bold text-[2vw]">{user.full_name}</h1>
                <h1 className=" text-[1.5vw]">User ID: {user.username}</h1>
                <div className="flex flex-row h-[80%] justify-between relative">
                  <div className="flex justify-end flex-col gap-x-2 ">
                    <span className="text-[2vw]">Current Balance:</span>
                    <span className="text-[3vw] font-bold">
                      ₱ {user.total_balance}
                    </span>
                  </div>
                  <button
                    className=" bg-[#002147] text-white font-bold p-4 rounded-xl h-[50%] absolute bottom-0 right-0"
                    onClick={() => handleWithdrawClick(user)}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No balance data available.</p>
          )}
        </div>
        <Calendar />
      </div>

      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-[400px]">
            <h2 className="text-2xl font-semibold mb-4">Withdraw Funds</h2>
            <p>
              Are you sure you want to withdraw from {selectedUser.full_name}?
            </p>
            <div className="mt-4 flex justify-between">
              <button
                className="bg-gray-300 text-black p-2 rounded-xl"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-[#002147] text-white p-2 rounded-xl"
                onClick={handleConfirmWithdraw}
              >
                Confirm Withdraw
              </button>
            </div>
          </div>
        </div>
      )}

      {showNfcModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-[400px]">
            <h2 className="text-2xl font-semibold mb-4">Enter NFC ID</h2>
            <input
              type="text"
              value={nfcId}
              onChange={(e) => setNfcId(e.target.value)}
              placeholder="Enter NFC ID"
              className="border p-2 w-full mb-4"
            />
            <div className="flex justify-between">
              <button
                className="bg-gray-300 text-black p-2 rounded-xl"
                onClick={handleNfcModalClose}
              >
                Cancel
              </button>
              <button
                className="bg-[#002147] text-white p-2 rounded-xl"
                onClick={handleNfcIdSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

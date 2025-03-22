"use client";
import React, { useEffect, useState } from "react";
import Calendar from "@/components/calendar";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "@/library/axios";

export default function Admin() {
  const [balances, setBalances] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const fetchDashboardData = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        console.log("No token found.");
        return;
      }

      const decoded = jwtDecode(token);
      console.log("Decoded Token:", decoded);

      const balanceRes = await axiosInstance.get(
        `/paymentIntent/getBalance/${decoded.sub}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const transactionsRes = await axiosInstance.get(
        `/paymentIntent/transactions/${decoded.sub}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setBalances(balanceRes.data.data); // Ensure it is set as an array
      setTransactions(transactionsRes.data.data);
    } catch (err) {
      console.error("Fetch Error:", err);
      console.log("Failed to fetch data. Check server.");
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const logs = [
    {
      name: "Paula Marie B. Mendoza",
      section: "STEM 11 - Pandi",
      time: "8:00 AM",
      status: "Time in",
    },
    {
      name: "Kenneth C. Manuel",
      section: "HUMSS 12 - Balagtas",
      time: "10:00 AM",
      status: "Time Out",
    },
    {
      name: "Joedel S. Lagong",
      section: "ABM 11 - Bocaue",
      time: "2:00 PM",
      status: "Time In",
    },
    {
      name: "Jorge Rayne David",
      section: "TVL 12 - Baliwag",
      time: "9:00 AM",
      status: "Time Out",
    },
  ];

  return (
    <main className="w-full h-full rounded-2xl flex flex-row justify-between gap-x-4 bg-[#ffffff] p-6">
      <div className="h-full w-[60%]">
        <h1 className="text-[4vw]">Hello, Admin! 👋</h1>

        <div className="h-[45%] shadow-xl border rounded-xl p-4 overflow-y-scroll">
          <h1 className="text-[2vw]">Transaction History</h1>
          <table className="w-full mt-4 table-auto">
            <thead>
              <tr>
                <th className="w-[40%] text-left">User Identity</th>
                <th className="w-[20%] text-center">Description</th>
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
                    <td className="w-[40%] capitalize">
                      <p className="max-w-full">{item.receiver_id}</p>
                    </td>
                    <td className="max-w-[20%] capitalize text-center">
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

        <div className="mt-6 h-[40%] shadow-xl border rounded-xl p-4 overflow-y-scroll">
          <h1 className="text-[2vw]">Daily Logs</h1>
          {logs.map((item, index) => (
            <div key={index} className="w-full">
              <table className="w-full mt-2">
                <tbody>
                  <tr className="w-full text-left text-[1vw] border-b">
                    <td className="opacity-50 w-[40%]">{item.name}</td>
                    <td className="opacity-50 w-[30%]">{item.section}</td>
                    <td className="opacity-50 w-[20%]">{item.time}</td>
                    <td
                      className={`w-[10%] ${
                        item.status === "Time Out"
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {item.status}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[40%] h-full items-center flex flex-col justify-between">
        <div className="h-full w-full rounded-xl border shadow-xl mb-4 bg-gradient-to-br from-[#002147] to-[#168FCC] text-white p-6">
          {balances.length > 0 ? (
            balances.map((user) => (
              <div key={user.user_id} className="w-full h-[20%]">
                <h1 className="font-bold text-2xl">{user.full_name}</h1>
                <h1>User ID: {user.username}</h1>
                <div className="flex flex-row h-[80%]">
                  <div className="flex justify-end flex-col gap-x-2">
                    <span className="text-xl">Current Balance:</span>
                    <span className="text-4xl font-bold">
                      ₱ {user.total_balance}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No balance data available.</p>
          )}
        </div>
        <Calendar />
      </div>
    </main>
  );
}

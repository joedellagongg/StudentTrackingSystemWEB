"use client";
import React, { useState, useEffect, useCallback, Suspense } from "react";
import Image from "next/image";
import axiosInstance from "@/library/axios";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

function Canteen() {
  const router = useRouter();
  const id = useSearchParams().get("canteen_id");

  const token = Cookies.get("token");

  const navigate = (path) => {
    router.push(path);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [moneyEndpoint, setMoneyEndpoint] = useState({
    overallBalance: [],
    transactions: [],
  });

  const [isNfcModalOpen, setIsNfcModalOpen] = useState(false);

  const fetchUserTransactions = useCallback(async () => {
    try {
      const getBalance = await axiosInstance.get(
        `/paymentIntent/getBalance/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const getTransactions = await axiosInstance.get(
        `/paymentIntent/transactions/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setMoneyEndpoint((prevState) => ({
        ...prevState,
        overallBalance: getBalance.data.data,
        transactions: getTransactions.data.data,
        loadingState: false,
      }));
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    fetchUserTransactions();
  }, [fetchUserTransactions]);

  const handleModalToggle = () => {
    setWithdrawAmount("");
    setIsModalOpen(!isModalOpen);
  };

  const handleWithdrawInputChange = (e) => {
    setWithdrawAmount(e.target.value);
  };

  const handleWithdrawSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);

    setIsNfcModalOpen(true);
  };

  const handleNfcSubmit = (e) => {
    e.preventDefault();

    setIsNfcModalOpen(false);
  };

  return (
    <main className="w-full h-full rounded-2xl overflow-x-scroll bg-[#ffffff] p-6 flex flex-col gap-y-6">
      {moneyEndpoint.overallBalance.map((item, index) => (
        <div
          key={index}
          className="w-full h-[30%] flex flex-row justify-between"
        >
          <button
            onClick={() => navigate("../canteen")}
            className="flex items-start"
            aria-label="Go back"
          >
            <Image
              width={0}
              height={0}
              src="./icons/back-icon.svg"
              alt="back"
              className="h-[50px] w-auto"
            />
          </button>

          <div className="h-full w-[50%] bg-gradient-to-br from-[#002147] to-[#168FCC] rounded-2xl text-white p-4">
            <div className=" w-full h-[20%]">
              <span className=" font-bold text-2xl">{item.full_name}</span>
            </div>
            <div className=" flex flex-row h-[80%]">
              <div className=" flex justify-end flex-col gap-x-2">
                <span className=" text-xl">Balance:</span>
                <span className=" text-4xl font-bold">
                  {item.total_balance}
                </span>
              </div>
              <div className=" flex justify-end items-end flex-row w-full">
                <button
                  onClick={handleModalToggle}
                  className=" w-[10vw] h-[5vw] p-4 bg-[#002147] text-white rounded-xl font-bold"
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-[300px]">
            <h2 className="text-xl font-bold mb-4">Withdraw Amount</h2>
            <form onSubmit={handleWithdrawSubmit}>
              <input
                type="number"
                value={withdrawAmount}
                onChange={handleWithdrawInputChange}
                className="w-full p-2 mb-4 border rounded-lg"
                placeholder="Enter amount"
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleModalToggle}
                  className="px-4 py-2 bg-gray-300 text-black rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#002147] text-white rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isNfcModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-[300px]">
            <h2 className="text-xl font-bold mb-4">Scan NFC Card</h2>
            <form onSubmit={handleNfcSubmit}>
              <input
                type="password"
                className="w-full p-2 mb-4 border rounded-lg"
                placeholder="Scan your NFC card"
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsNfcModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-black rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#002147] text-white rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="border border-gray-400 w-full h-[70%] rounded-xl p-4">
        <h1 className="font-bold text-[#002147] text-xl">Transactions</h1>
        <table className="w-full mt-4 table-auto">
          <thead className="w-full">
            <tr>
              <th className="w-[40%] text-left">User Identity</th>
              <th className="w-[20%] text-center">Description</th>
              <th className="w-[20%] text-center">Date</th>
              <th className="w-[20%] text-center">Amount</th>
            </tr>
          </thead>
        </table>

        <div className="overflow-y-scroll h-[300px] w-full no-scrollbar">
          <table className="w-full mt-4 table-auto">
            <tbody>
              {moneyEndpoint.transactions.map((item, index) => (
                <tr key={index} className=" border-b ">
                  <td className="w-[40%] capitalize">
                    <p className="max-w-full">{item.receiver_id}</p>
                  </td>
                  <td className="max-w-[20%] capitalize text-center">
                    {item.description}
                  </td>
                  <td className="w-[20%] capitalize text-center">
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
                  <td className="w-[20%] text-center">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default function CanteenDashboard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canteen />
    </Suspense>
  );
}

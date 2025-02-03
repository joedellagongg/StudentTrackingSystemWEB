"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CanteenDasboard() {
  const router = useRouter();
  const navigate = (path) => {
    router.push(path);
  };
  const transactions = [
    {
      name: "paula marie mendoza",
      description: "purchase",
      date: "Jan, 21, 2025",
      transaction: "10",
    },
    {
      name: "paula mendoza",
      description: "purchase",
      date: "Jan, 21, 2025",
      transaction: "500",
    },
    {
      name: "paula",
      description: "purchase",
      date: "Jan, 21, 2025",
      transaction: "500",
    },
    {
      name: "paulaaaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa",
      description: "purchase",
      date: "Jan, 21, 2025",
      transaction: "500",
    },
    {
      name: "paula marie mendoza",
      description: "purchase",
      date: "Jan, 21, 2025",
      transaction: "10",
    },
    {
      name: "paula mendoza",
      description: "purchase",
      date: "Jan, 21, 2025",
      transaction: "500",
    },
    {
      name: "paula",
      description: "purchase",
      date: "Jan, 21, 2025",
      transaction: "500",
    },
    {
      name: "paulaaaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa",
      description: "purchase",
      date: "Jan, 21, 2025",
      transaction: "500",
    },
    {
      name: "paula marie mendoza",
      description: "purchase",
      date: "Jan, 21, 2025",
      transaction: "10",
    },
    {
      name: "paula mendoza",
      description: "purchase",
      date: "Jan, 21, 2025",
      transaction: "500",
    },
    {
      name: "paula",
      description: "purchase",
      date: "Jan, 21, 2025",
      transaction: "500",
    },
    {
      name: "paulaaaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa",
      description: "purchase",
      date: "Jan, 21, 2025",
      transaction: "500",
    },
    {
      name: "paula marie mendoza",
      description: "purchase",
      date: "Jan, 21, 2025",
      transaction: "10",
    },
    {
      name: "paula mendoza",
      description: "purchase",
      date: "Jan, 21, 2025",
      transaction: "500",
    },
    {
      name: "paula",
      description: "purchase",
      date: "Jan, 21, 2025",
      transaction: "500",
    },
    {
      name: "paulaaaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa",
      description: "purchase",
      date: "Jan, 21, 2025",
      transaction: "500",
    },
  ];

  return (
    <main className="w-full h-full rounded-2xl overflow-x-scroll bg-[#ffffff] p-6 flex flex-col gap-y-6">
      <div className="w-full h-[30%] flex flex-row justify-between">
        <button onClick={() => navigate("../canteen")} className=" flex items-start">
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
            <text className=" font-bold text-2xl">Kenneth's Canteen</text>
          </div>
          <div className=" h-[80%] flex justify-end flex-col gap-x-2">
            <text className=" text-xl">Balance:</text>
            <text className=" text-4xl font-bold">10,000</text>
          </div>
        </div>
      </div>
      <div className="border border-gray-400 w-full h-[70%] rounded-xl p-4">
        <h1 className="font-bold text-[#002147] text-xl">Transactions</h1>
        <table className="w-full mt-4 table-auto">
          <thead className="w-full">
            <tr>
              <th className="w-[40%] text-left">Name</th>
              <th className="w-[20%] text-center">Description</th>
              <th className="w-[20%] text-center">Date</th>
              <th className="w-[20%] text-center">Amount</th>
            </tr>
          </thead>
        </table>

        <div className="overflow-y-scroll h-[300px] w-full">
          <table className="w-full mt-4 table-auto">
            <tbody>
              {transactions.map((item, index) => (
                <tr key={index} className=" border-b">
                  <td className="w-[40%] capitalize">
                    <p className="max-w-full">{item.name}</p>
                  </td>

                  <td className="max-w-[20%] capitalize text-center">
                    {item.description}
                  </td>
                  <td className="w-[20%] capitalize text-center">
                    {item.date}
                  </td>
                  <td className="w-[20%] text-center">{item.transaction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

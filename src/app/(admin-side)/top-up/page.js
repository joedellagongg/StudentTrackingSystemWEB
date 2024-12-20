"use client";
import React, { useState } from "react";
import TopUp_Form from "@/components/top_up/top_modal";
import axiosInstance from "@/library/axios";

export default function TopUp() {
  const [inputValue, setInputValue] = useState("");
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setInputValue("");
  };

  const top_amount = [
    { id: 1, amount: "20" },
    { id: 2, amount: "50" },
    { id: 3, amount: "100" },
    { id: 4, amount: "200" },
    { id: 5, amount: "500" },
    { id: 6, amount: "1000" },
  ];

  const handleButtonClick = (amount) => {
    setInputValue(amount);
    openModal();
  };

  return (
    <main className="w-full h-full p-4 rounded-2xl bg-[#ffffff]">
      <div className="flex justify-center items-center w-full h-[15%]">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Amount"
          className="rounded-xl border border-[#002147] w-full md:w-[80%] lg:w-[50%] h-16 text-center text-xl font-bold outline-none"
        />
      </div>
      <div className=" lg:p-12 w-full h-[50%] lg:h-[65%] grid grid-cols-2 md:grid-cols-3 gap-3">
        {top_amount.map((item) => (
          <button
            key={item.id}
            className="rounded-xl bg-[#002147] text-white hover:bg-white drop-shadow-2xl border hover:text-black"
            onClick={() => handleButtonClick(item.amount)}
          >
            <p className=" text-xl md:text-3xl font-bold">₱ {item.amount}</p>
          </button>
        ))}
      </div>
      <div className="w-full h-[20%] flex justify-center items-center">
        {inputValue && (
          <button
            onClick={openModal}
            className=" w-full lg:w-[50%] bg-[#002147] text-white rounded-xl text-3xl p-4"
          >
            Next
          </button>
        )}
      </div>
      {modal && <TopUp_Form onClose={closeModal} amount={inputValue} />}
    </main>
  );
}

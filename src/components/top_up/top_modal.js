"use client";
import React, { useState } from "react";

export default function TopUp_Form({ onClose, amount }) {
  const [inputNfcId, setInputNfcId] = useState("");

  const user = [
    {
      id: 1,
      nfc_id: "12345",
      lname: "Mendoza",
      fname: "Paula Marie",
      mname: "B.",
      strand: "stem",
      grade: "11",
      section: "pandi",
    },
    {
      id: 2,
      nfc_id: "54321",
      lname: "Manuel",
      fname: "Kenneth",
      mname: "C.",
      strand: "humss",
      grade: "12",
      section: "mactan",
    },
  ];

  const filteredUser = user.filter((item) => item.nfc_id === inputNfcId);

  return (
    <main className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="h-[80%] w-[70%] bg-white p-4 rounded-xl">
        <div className=" flex flex-row justify-between items-center">
          <h1 className="text-xl font-bold">Top Up Amount to:</h1>
          <button
            onClick={onClose}
            className=" font-bold text-2xl text-[#002147]"
          >
            X
          </button>
        </div>
        <div className="w-full h-[95%] flex flex-col justify-center items-center">
          <div className="w-[70%] flex flex-col gap-2">
            <label htmlFor="nfc">NFC ID:</label>
            <input
              id="nfc"
              type="text"
              value={inputNfcId}
              onChange={(e) => setInputNfcId(e.target.value)}
              placeholder=" Tap NFC ID"
              className=" text-center outline-none pl-4 pr-4 border border-[#002147] w-full h-12 rounded-lg"
            />
          </div>

          {inputNfcId && filteredUser.length > 0
            ? filteredUser.map((item) => (
                <div key={item.id} className="w-[70%] mt-4 text-xl">
                  <p className="">
                    NFC ID: <span className=" font-bold">{item.nfc_id}</span>
                  </p>
                  <p className="">
                    Name:{" "}
                    <span className=" font-bold">
                      {item.lname}, {item.fname} {item.mname}{" "}
                    </span>
                  </p>
                  <p className="">
                    Grade & Section:{" "}
                    <span className=" font-bold">
                      <span className=" uppercase">{item.strand}</span>{" "}
                      {item.grade} -{" "}
                      <span className=" capitalize">{item.section}</span>{" "}
                    </span>
                  </p>
                  <p className="">
                    Total Amount: <span className=" font-bold">₱ {amount}</span>
                  </p>
                </div>
              ))
            : inputNfcId && (
                <p className="w-[70%] text-center text-red-400 mt-2">
                  No user found with this NFC ID.
                </p>
              )}

          {filteredUser.length > 0 && (
            <div className="w-[70%] flex flex-row gap-4 justify-center mt-4">
              <button
                onClick={onClose}
                className="w-[45%] bg-gray-400 rounded-xl p-2 text-xl"
              >
                Cancel
              </button>
              <button className="w-[45%] bg-[#002147] rounded-xl p-2 text-xl text-white">
                Confirm
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

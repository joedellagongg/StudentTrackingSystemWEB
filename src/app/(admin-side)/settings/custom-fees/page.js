"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Settings() {
  const router = useRouter();

  const initialFees = [
    { fee_name: "Rental Fee", fee_amt: 500 },
    { fee_name: "Electricity Fee", fee_amt: 300 },
    { fee_name: "Water Fee", fee_amt: 200 },
    { fee_name: "Withdrawal Fee", fee_amt: 20 },
  ];

  const [feeName, setFeeName] = useState("");
  const [feeAmount, setFeeAmount] = useState("");
  const [fees, setFees] = useState(initialFees);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedFee, setSelectedFee] = useState(null);

  const handleAddFee = () => {
    if (!feeName || !feeAmount) {
      setIsValid(false);
      setErrorMessage("Please fill out both fields before adding a fee.");
      setIsSuccess(false);
    } else {
      setIsValid(true);
      setErrorMessage("");
      setIsSuccess(true);
      setSuccessMessage("Fee successfully added!");

      setFees([...fees, { fee_name: feeName, fee_amt: Number(feeAmount) }]);

      setFeeName("");
      setFeeAmount("");

      setTimeout(() => {
        setIsSuccess(false);
        setSuccessMessage("");
      }, 3000);
    }
  };

  const handleDeleteFee = (fee) => {
    setSelectedFee(fee);
    setShowModal(true);
  };

  const confirmDelete = () => {
    setFees(fees.filter((fee) => fee !== selectedFee));
    setShowModal(false);
    setSelectedFee(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setSelectedFee(null);
  };

  return (
    <main className="w-full h-full flex-1 rounded-2xl overflow-x-scroll bg-[#ffffff] p-6">
      <div className="flex flex-row items-center border-b pb-2 w-full h-[10%]">
        <button onClick={() => router.push("/settings")}>
          <Image
            width={0}
            height={0}
            src="../icons/back-icon.svg"
            alt="back"
            className="h-[40px] md:h-[50px] w-auto"
          />
        </button>
      </div>
      <div className=" h-[90%] w-full flex flex-row">
        <div className=" w-[50%] h-full p-10">
          <table className="w-full text-[#002147] text-center">
            <thead>
              <tr>
                <th className="border p-4">Fee Name</th>
                <th className="border p-4">Fee Amount</th>
                <th className="border p-4">{""}</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((item, index) => (
                <tr key={index}>
                  <td className="border p-4">{item.fee_name}</td>
                  <td className="border p-4">₱ {item.fee_amt}</td>
                  <td className="border p-4">
                    <button
                      onClick={() => handleDeleteFee(item)}
                      className="bg-red-400 rounded-xl p-2 text-white"
                    >
                      <Image
                        width={0}
                        height={0}
                        src="../icons/delete-white.svg"
                        alt="delete"
                        className="h-[2vw] w-auto"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className=" w-[50%] h-full p-10">
          <div className=" bg-white shadow-2xl shadow-[#002147] rounded-xl h-full w-full p-4 flex flex-col items-center">
            <h1 className=" font-bold text-[2vw] text-[#002147]">
              Add New Fees
            </h1>
            <form className=" w-full mt-10">
              <label
                htmlFor="fee-name"
                className=" text-[#002147] font-bold text-base"
              >
                Fee Name
              </label>
              <input
                id="fee-name"
                type="text"
                placeholder="Enter Fee Name"
                value={feeName}
                onChange={(e) => setFeeName(e.target.value)}
                className=" border rounded-xl p-4 w-full"
              />

              <label
                htmlFor="fee-amt"
                className=" text-[#002147] font-bold text-base"
              >
                Fee Amount
              </label>
              <input
                id="fee-amt"
                type="number"
                placeholder="Enter Fee Amount"
                value={feeAmount}
                onChange={(e) => setFeeAmount(e.target.value)}
                className=" border rounded-xl p-4 w-full"
              />
            </form>

            {!isValid && (
              <div className="text-red-500 mt-4 text-center">
                {errorMessage}
              </div>
            )}

            {isSuccess && (
              <div className="text-green-500 mt-4 text-center">
                {successMessage}
              </div>
            )}

            <button
              type="button"
              onClick={handleAddFee}
              className=" mt-10 w-full rounded-xl p-4 bg-[#002147] text-white font-bold"
            >
              Add Fee
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-[90%] md:w-[400px]">
            <h2 className="text-[#002147] font-bold text-center text-lg mb-4">
              Are you sure you want to delete this fee?
            </h2>
            <div className="flex justify-end gap-x-2">
              <button
                onClick={cancelDelete}
                className=" text-[#002147] p-2 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white p-2 rounded-xl"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

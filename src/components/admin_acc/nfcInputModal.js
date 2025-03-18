import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
const NfcInputModal = ({ isOpen, onClose, onProceed, adminAccounts }) => {
  const [nfcInput, setNfcInput] = useState("");
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = () => {
    const accountExists = adminAccounts.some(
      (account) => account.nfcId === nfcInput
    );

    if (!nfcInput) {
      alert("Please provide an NFC ID.");
    } else if (!accountExists) {
      setError("Invalid NFC ID. Please enter a valid NFC ID.");
    } else {
      onProceed(nfcInput);
      onClose();
      setError("");
      setNfcInput("");
    }
  };

  const handleClose = () => {
    setNfcInput("");
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className=" relative bg-white p-6 py-14 rounded-xl w-[40vw]">
          <button onClick={handleClose}>
            <Image
              width={0}
              height={0}
              alt="close"
              src="../icons/close.svg"
              className=" h-[3vw] w-auto absolute top-2 right-2"
            />
          </button>
        <h2 className="text-xl mb-4">Enter NFC ID for Validation</h2>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="password"
            value={nfcInput}
            onChange={(e) => setNfcInput(e.target.value)}
            className="border p-4 w-full mb-4 rounded-xl text-center"
            placeholder="Tap NFC ID"
          />
        </form>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default NfcInputModal;

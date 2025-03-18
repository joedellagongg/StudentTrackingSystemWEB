import React from "react";

const SendAccountModal = ({ isOpen, onClose, selectedAccounts }) => {
  if (!isOpen) return null;

  const accountsToDisplay = Array.isArray(selectedAccounts)
    ? selectedAccounts
    : [];

  const handleSend = () => {
    alert("Accounts sent successfully!");
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Send Selected Accounts</h2>
        <p className="text-sm mb-4">
          Are you sure you want to send the following accounts?
        </p>
        {accountsToDisplay.length === 0 ? (
          <p>No accounts selected.</p>
        ) : (
          <ul className="mb-4">
            {accountsToDisplay.map((account, index) => (
              <li key={index} className="text-sm">
                {account.adminName} - {account.adminEmail}
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-end gap-x-4">
          <button
            onClick={onClose}
            className="text-[#002147] py-2 px-4 rounded-xl"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            className="bg-[#002147] text-white py-2 px-4 rounded-xl"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendAccountModal;

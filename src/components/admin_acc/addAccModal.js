"use client";
import React, { useState } from "react";

const AddAccountModal = ({ isOpen, onClose, onAddAccount }) => {
  const [newAccount, setNewAccount] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    adminEmail: "",
    nfcId: "",
  });

  const handleAddAccount = (e) => {
    e.preventDefault();
    onAddAccount(newAccount);
    setNewAccount({
      firstName: "",
      middleName: "",
      lastName: "",
      adminEmail: "",
      nfcId: "",
    });
  };
  const handleClose = () => {
    setNewAccount({
      firstName: "",
      middleName: "",
      lastName: "",
      adminEmail: "",
      nfcId: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-10">
      <div className="bg-white p-6 rounded-xl w-[90%] md:w-[60vw]">
        <h2 className="text-xl font-bold text-[#002147] mb-4">
          Add Admin Account
        </h2>
        <form onSubmit={handleAddAccount}>
          <div className="mb-4 flex gap-4">
            <div className="flex-1">
              <label
                className="block text-sm text-[#002147]"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                placeholder="Enter Last Name"
                type="text"
                id="lastName"
                className="w-full p-2 border rounded-xl"
                value={newAccount.lastName}
                onChange={(e) =>
                  setNewAccount({ ...newAccount, lastName: e.target.value })
                }
                required
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-sm text-[#002147]"
                htmlFor="middleName"
              >
                Middle Name
              </label>
              <input
                placeholder="Enter Middle Name"
                type="text"
                id="middleName"
                className="w-full p-2 border rounded-xl"
                value={newAccount.middleName}
                onChange={(e) =>
                  setNewAccount({ ...newAccount, middleName: e.target.value })
                }
                required
              />
            </div>

            <div className="flex-1">
              <label
                className="block text-sm text-[#002147]"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                placeholder="Enter First Name"
                type="text"
                id="firstName"
                className="w-full p-2 border rounded-xl"
                value={newAccount.firstName}
                onChange={(e) =>
                  setNewAccount({ ...newAccount, firstName: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm text-[#002147]"
              htmlFor="adminEmail"
            >
              Email
            </label>
            <input
              placeholder="Enter Admin Email"
              type="email"
              id="adminEmail"
              className="w-full p-2 border rounded-xl"
              value={newAccount.adminEmail}
              onChange={(e) =>
                setNewAccount({ ...newAccount, adminEmail: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-[#002147]" htmlFor="nfcId">
              NFC ID
            </label>
            <input
              placeholder="Enter NFC ID"
              type="password"
              id="nfcId"
              className="w-full p-2 border rounded-xl"
              value={newAccount.nfcId}
              onChange={(e) =>
                setNewAccount({ ...newAccount, nfcId: e.target.value })
              }
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="text-[#002147] rounded-xl p-2"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#002147] text-white rounded-xl p-2"
            >
              Add Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAccountModal;

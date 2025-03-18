"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AddAccountModal from "@/components/admin_acc/addAccModal";
import SendAccountModal from "@/components/admin_acc/sendAccModal";
import DeleteAccountModal from "@/components/admin_acc/deleteAccModal";
import EditAccountModal from "@/components/admin_acc/editAccModal";
import NfcInputModal from "@/components/admin_acc/nfcInputModal";
const Archive = () => {
  const router = useRouter();

  const adminAccounts = [
    {
      adminName: "Admin 1",
      adminEmail: "admin1@gmail.com",
      nfcId: "123456789",
      isSelected: false,
    },
    {
      adminName: "Admin 2",
      adminEmail: "admin2@gmail.com",
      nfcId: "987654321",
      isSelected: false,
    },
    {
      adminName: "Admin 3",
      adminEmail: "admin3@gmail.com",
      nfcId: null,
      isSelected: false,
    },
    {
      adminName: "Admin 4",
      adminEmail: "admin4@gmail.com",
      nfcId: undefined,
      isSelected: false,
    },
  ];

  const [accounts, setAccounts] = useState(adminAccounts);
  const [selectAll, setSelectAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [accountToEdit, setAccountToEdit] = useState(null);
  const [isNfcModalOpen, setIsNfcModalOpen] = useState(false);
  const [actionToProceed, setActionToProceed] = useState(null);

  const displayNfcId = (nfcId) => {
    if (!nfcId) return "N/A";
    return "•".repeat(nfcId?.length || 0);
  };

  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    setAccounts((prevAccounts) =>
      prevAccounts.map((account) => ({ ...account, isSelected: checked }))
    );
  };

  const handleAccountSelect = (index) => {
    setAccounts((prevAccounts) =>
      prevAccounts.map((account, i) =>
        i === index ? { ...account, isSelected: !account.isSelected } : account
      )
    );
  };

  const handleAddAccount = () => {
    setActionToProceed("add");
    setIsNfcModalOpen(true);
  };

  const handleEditAccount = (index) => {
    setActionToProceed("edit");
    setAccountToEdit(accounts[index]);
    setIsNfcModalOpen(true);
  };

  const handleSendAccount = () => {
    const selectedAccounts = accounts.filter((account) => account.isSelected);
    if (selectedAccounts.length === 0) {
      alert("Please select at least one account to send.");
    } else {
      setActionToProceed("send");
      setIsNfcModalOpen(true);
    }
  };

  const handleDeleteAccount = () => {
    const selectedAccounts = accounts.filter((account) => account.isSelected);
    if (selectedAccounts.length === 0) {
      alert("Please select at least one account to delete.");
    } else {
      setActionToProceed("delete");
      setSelectedAccounts(selectedAccounts);
      setIsNfcModalOpen(true);
    }
  };

  const handleNfcModalProceed = (nfcId) => {
    if (actionToProceed === "add") {
      setIsModalOpen(true);
    } else if (actionToProceed === "edit") {
      setIsEditModalOpen(true);
    } else if (actionToProceed === "send") {
      setIsSendModalOpen(true);
    } else if (actionToProceed === "delete") {
      setIsDeleteModalOpen(true);
    }
  };

  const deleteSelectedAccounts = (accountsToDelete) => {
    setAccounts((prevAccounts) =>
      prevAccounts.filter((account) => !accountsToDelete.includes(account))
    );
    setIsDeleteModalOpen(false);
  };

  const saveEditedAccount = (editedAccount) => {
    setAccounts((prevAccounts) =>
      prevAccounts.map((account) =>
        account.adminEmail === editedAccount.adminEmail
          ? { ...account, ...editedAccount }
          : account
      )
    );
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    const allSelected = accounts.every((account) => account.isSelected);
    setSelectAll(allSelected);
  }, [accounts]);

  return (
    <main className="w-full h-full rounded-2xl overflow-x-scroll bg-[#ffffff] p-6">
      <div className="flex flex-row justify-between items-center border-b pb-2 w-full">
        <button onClick={() => router.push("/settings")}>
          <Image
            width={0}
            height={0}
            src="../icons/back-icon.svg"
            alt="back"
            className="h-[40px] md:h-[50px] w-auto"
          />
        </button>
        <h1 className="text-[#002147] text-[3vw]">Admin Accounts</h1>
        <button
          onClick={handleAddAccount}
          className="bg-[#002147] m-1 rounded-xl text-white p-4 text-base"
        >
          Add Account
        </button>
      </div>

      <div className="mt-2 flex flex-row justify-end gap-x-2">
        <button
          onClick={handleSendAccount}
          className="bg-[#002147] rounded-xl text-white p-2 text-base flex gap-x-1"
        >
          <Image
            width={0}
            height={0}
            src="../icons/accounts.svg"
            alt="account"
            className="h-[2vw] w-auto"
          />
          Send Account
        </button>
        <button
          onClick={handleDeleteAccount}
          className="bg-red-400 rounded-xl text-white p-2 text-base flex gap-x-1"
        >
          <Image
            width={0}
            height={0}
            src="../icons/delete-white.svg"
            alt="delete"
            className="h-[2vw] w-auto"
          />
          Delete
        </button>
      </div>

      <table className="w-full text-center mt-2">
        <thead>
          <tr>
            <th className="border text-[1vw] flex flex-col gap-y-2 items-center justify-center p-2">
              <label htmlFor="all">Select All</label>
              <input
                id="all"
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th className="text-[#002147] text-[1.5vw] border">Name</th>
            <th className="text-[#002147] text-[1.5vw] border">Email</th>
            <th className="text-[#002147] text-[1.5vw] border">NFC ID</th>
            <th className="text-[#002147] text-[1.5vw] border">Action</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((adminAccount, index) => (
            <tr key={index}>
              <td className="w-[10%] border">
                <input
                  type="checkbox"
                  checked={adminAccount.isSelected}
                  onChange={() => handleAccountSelect(index)}
                />
              </td>
              <td className="w-[25%] text-[#002147] text-[1.5vw] border">
                {adminAccount.adminName}
              </td>
              <td className="w-[25%] text-[#002147] text-[1.5vw] border">
                {adminAccount.adminEmail}
              </td>
              <td className="w-[25%] text-[#002147] text-[1.5vw] border">
                {displayNfcId(adminAccount.nfcId)}
              </td>
              <td className="w-full text-[#002147] text-[1.5vw] border flex justify-center items-center">
                <button
                  onClick={() => handleEditAccount(index)}
                  className="bg-[#002147] rounded-xl flex flex-row gap-x-1 text-white p-2 px-4 text-base m-1"
                >
                  <Image
                    width={0}
                    height={0}
                    src="../icons/edit.svg"
                    alt="edit"
                    className="h-[1.5vw] w-auto"
                  />
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddAccountModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <SendAccountModal
        isOpen={isSendModalOpen}
        onClose={() => setIsSendModalOpen(false)}
        selectedAccounts={accounts.filter((account) => account.isSelected)}
      />
      <DeleteAccountModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        selectedAccounts={selectedAccounts}
        onDelete={deleteSelectedAccounts}
      />
      <EditAccountModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        account={accountToEdit}
        onSave={saveEditedAccount}
      />

      <NfcInputModal
        isOpen={isNfcModalOpen}
        onClose={() => setIsNfcModalOpen(false)}
        onProceed={handleNfcModalProceed}
        adminAccounts={adminAccounts}
      />
    </main>
  );
};

export default Archive;

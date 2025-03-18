import React from "react";

const DeleteAccountModal = ({
  isOpen,
  onClose,
  selectedAccounts,
  onDelete,
}) => {
  if (!isOpen || !selectedAccounts || selectedAccounts.length === 0)
    return null;

  const handleDelete = () => {
    onDelete(selectedAccounts);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Delete Accounts</h2>
        <p className="text-sm mb-4">
          Are you sure you want to delete the following accounts?
        </p>
        <ul className="mb-4 max-h-64 overflow-auto">
          {selectedAccounts.map((account, index) => (
            <li key={index} className="text-sm">
              {account.adminName} - {account.adminEmail}
            </li>
          ))}
        </ul>
        <div className="flex justify-end gap-x-2">
          <button
            onClick={onClose}
            className="text-[#002147] py-2 px-4 rounded-xl"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white py-2 px-4 rounded-xl"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountModal;

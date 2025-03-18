import { useState, useEffect } from "react";

export default function EditAccountModal({ isOpen, onClose, onSave, account }) {
  const [editedAccount, setEditedAccount] = useState(account || {});

  useEffect(() => {
    if (account) {
      setEditedAccount(account);
    }
  }, [account]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAccount((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedAccount.adminName && editedAccount.adminEmail) {
      onSave(editedAccount);
    } else {
      alert("Please provide valid data.");
    }
  };

  if (!isOpen || !editedAccount) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-[40vw]">
        <h2 className=" font-bold text-[2vw]">Edit Admin Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="adminName"
              value={editedAccount?.adminName || ""}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-xl"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="adminEmail"
              value={editedAccount?.adminEmail || ""}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-xl"
            />
          </div>
          <div>
            <label>NFC ID:</label>
            <input
              type="text"
              name="nfcId"
              value={editedAccount?.nfcId || ""}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-xl"
            />
          </div>
          <div className=" w-full flex flex-row justify-end gap-x-2 mt-2">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className=" bg-[#002147] text-white p-3 rounded-xl"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

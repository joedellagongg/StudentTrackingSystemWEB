import React from 'react';

const Logout = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-1/3">
        <p>Are you sure you want to log out?</p>
        <div className="flex justify-end mt-4">
          <button className="mr-2 rounded px-4 py-2" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-red-500 text-white rounded-xl px-4 py-2" onClick={onConfirm}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;

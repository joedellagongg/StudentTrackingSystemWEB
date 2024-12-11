import React from "react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, studentNames }) => {
  if (!isOpen) return null;

  const message =
    studentNames.length === 1
      ? `Are you sure you want to delete `
      : `Are you sure you want to delete all selected students?`;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 w-[30%] gap-y-6 rounded-xl flex flex-col justify-center items-center text-center">
        <h2 className="text-xl mb-4">
          {studentNames.length === 1 ? (
            <>
              {message}
              <br />
              <span className="font-bold">{studentNames[0]}</span> ?
            </>
          ) : (
            message
          )}
        </h2>
        <div className="flex justify-end gap-x-2 mt-4 w-full">
          <button onClick={onClose} className="p-2 rounded-xl">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="p-2 bg-red-500 text-white rounded-xl"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

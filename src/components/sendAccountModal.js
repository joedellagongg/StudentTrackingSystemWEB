import React, { useState } from "react";
import axiosInstance from "@/library/axios";
import Cookies from "js-cookie";

const SendAccountModal = ({ isOpen, onClose, selectedStudents, students }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const token = Cookies.get("token");

  if (!isOpen) return null;

  const handleSendAccounts = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const destructuredID = Array.from(selectedStudents);
    const studentData = students.filter((student) =>
      selectedStudents.has(student.username)
    );

    try {
      const response = await axiosInstance.post(
        "/students/send-accounts",
        {
          studentIds: destructuredID,
          students: studentData,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200) {
        setSuccess(true);
      } else {
        setError("Failed to send accounts. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while sending accounts.");
      console.error("Error sending accounts:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Send Accounts</h2>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 mb-4">
            Account credentials sent successfully!
          </p>
        )}

        <p className="mb-4">
          Are you sure you want to send account to the selected student(s)?
        </p>

        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 rounded">
            Cancel
          </button>
          <button
            onClick={handleSendAccounts}
            className="px-4 py-2 bg-[#002147] text-white rounded-xl"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Accounts"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendAccountModal;

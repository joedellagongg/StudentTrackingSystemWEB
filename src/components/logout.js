import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Logout = ({ isOpen, onClose }) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleLogout = () => {
    Cookies.remove("token"); // Remove the token
    router.replace("/admin"); // Redirect to login
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-[80%] md:w-[60%] lg:w-1/3">
        <p>Are you sure you want to log out?</p>
        <div className="flex justify-end mt-4">
          <button className="mr-2 rounded px-4 py-2" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-red-500 text-white rounded-xl px-4 py-2"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;

"use client";
import React, { useState } from "react";
import AdminProfile from "./admin_profile";
import { useRouter } from "next/navigation";
import Logout from "@/components/logout";

export default function Sidenav() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("dashboard");
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const navigate = (path, button) => {
    router.push(path);
    setActiveButton(button);
  };

  const handleLogout = () => {
    console.log("User logged out");
    setIsModalOpen(false);
  };

  return (
    <div
      className={`relative w-[5%] hover:w-[25%] ease-in-out duration-300 h-full bg-[#FFFFFF] rounded-2xl overflow-y-scroll no-scrollbar ${
        isHovered ? "p-4" : "p-2"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full flex justify-center items-center border-b-2 pb-2">
        <img
          src="./logo/logo.svg"
          className={isHovered ? "h-24" : "h-24 w-24"}
        />
      </div>

      <AdminProfile isHovered={isHovered} setIsHovered={setIsHovered} />

      <div className="flex flex-col gap-y-2 mt-6">
        <button
          onClick={() => navigate("../dashboard", "admin")}
          className={`flex flex-row items-center gap-x-4 rounded-xl ${
            activeButton === "admin"
              ? "bg-[#E1E8FF] bg-opacity-80"
              : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
          }`}
        >
          <img
            src="./icons/dashboard-icon.svg"
            className={isHovered ? "h-12" : "h-16 w-16"}
          />
          {isHovered && <p className="text-[#002147] text-[16px]">Dashboard</p>}
        </button>

        <button
          onClick={() => navigate("../top-up", "top-up")}
          className={`flex flex-row items-center gap-x-4 rounded-xl ${
            activeButton === "top-up"
              ? "bg-[#E1E8FF] bg-opacity-80"
              : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
          }`}
        >
          <img
            src="./icons/top-up-icon.svg"
            className={isHovered ? "h-12" : "h-16 w-16"}
          />
          {isHovered && <p className="text-[#002147] text-[16px]">Top Up</p>}
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
          className={`w-full flex flex-row items-center gap-x-4 rounded-xl`}
        >
          <img
            src="./icons/logout-icon.svg"
            className={isHovered ? "h-12" : "h-16 w-16"}
          />
          {isHovered && <p className="text-red-500">Log Out</p>}
        </button>
      </div>

      <Logout
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
}

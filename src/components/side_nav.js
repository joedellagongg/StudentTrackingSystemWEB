"use client";
import React, { useState, useEffect } from "react";
import AdminProfile from "./admin_profile";
import { useRouter } from "next/navigation";
import Logout from "@/components/logout";
import Image from "next/image";

export default function Sidenav() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const storedButton = localStorage.getItem("activeButton");

    if (
      storedButton &&
      [
        "dashboard",
        "admin",
        "top-up",
        "announcement",
        "settings",
        "canteen",
        "section",
      ].includes(storedButton)
    ) {
      setActiveButton(storedButton);
    } else {
      setActiveButton("dashboard");
    }
  }, []);

  const navigate = (path, button) => {
    router.push(path);
    setActiveButton(button);
    localStorage.setItem("activeButton", button);
  };

  const handleLogout = () => {
    console.log("User logged out");
    setIsModalOpen(false);
  };

  if (activeButton === null) return null;

  return (
    <div
      className={`relative w-[10%] lg:h-full lg:hover:w-[30%] hidden lg:flex flex-row lg:flex-col justify-between items-center lg:items-none lg:justify-start ease-in-out duration-100  bg-[#FFFFFF] rounded-2xl ${
        isHovered ? "p-2" : "p-2"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full hidden lg:flex justify-center items-center border-b-2 pb-2">
        <Image
          priority={true}
          width={0}
          height={0}
          onClick={() => navigate("../dashboard", "dashboard")}
          src="../logo/logo.svg"
          alt="logo"
          className={`h-20 w-auto ${isHovered ? "h-20 w-auto" : "mx-auto"}`}
        />
      </div>

      <AdminProfile isHovered={isHovered} setIsHovered={setIsHovered} />

      <div className="hidden w-full lg:flex flex-col gap-y-2 mt-6 no-scrollbar overflow-y-scroll max-h-[calc(100vh-240px)]">
        <button
          onClick={() => navigate("../dashboard", "dashboard")}
          className={`flex flex-row items-center gap-x-2 rounded-xl ${
            activeButton === "dashboard"
              ? "bg-[#E1E8FF] bg-opacity-80"
              : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
          }`}
        >
          <Image
            width={0}
            height={0}
            src="../icons/dashboard-icon.svg"
            alt="dashboard"
            className={` h-14 w-auto ${isHovered ? "h-14 w-auto" : "mx-auto"}`}
          />
          {isHovered && <p className="text-[#002147] text-[16px]">Dashboard</p>}
        </button>
        <button
          onClick={() => navigate("../section", "section")}
          className={`flex flex-row items-center gap-x-2 pl-2 rounded-xl ${
            activeButton === "section"
              ? "bg-[#E1E8FF] bg-opacity-80"
              : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
          }`}
        >
          <Image
            width={0}
            height={0}
            src="../icons/section.svg"
            alt="section"
            className={` h-14 w-auto ${isHovered ? "h-14 w-auto" : "mx-auto"}`}
          />
          {isHovered && <p className="text-[#002147] text-[16px]">Sections</p>}
        </button>
        <button
          onClick={() => navigate("../canteen", "canteen")}
          className={`flex flex-row items-center gap-x-2 rounded-xl ${
            activeButton === "canteen"
              ? "bg-[#E1E8FF] bg-opacity-80"
              : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
          }`}
        >
          <Image
            width={0}
            height={0}
            src="../icons/canteen.svg"
            alt="canteen"
            className={` h-14 w-auto ${isHovered ? "h-14 w-auto" : "mx-auto"}`}
          />
          {isHovered && <p className="text-[#002147] text-[16px]">Canteen</p>}
        </button>

        <button
          onClick={() => navigate("../top-up", "top-up")}
          className={`flex flex-row items-center gap-x-2 rounded-xl ${
            activeButton === "top-up"
              ? "bg-[#E1E8FF] bg-opacity-80"
              : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
          }`}
        >
          <Image
            width={0}
            height={0}
            src="../icons/top-up-icon.svg"
            alt="top up"
            className={`h-14 w-auto ${isHovered ? "h-14 w-auto" : "mx-auto"}`}
          />
          {isHovered && <p className="text-[#002147] text-[16px]">Top Up</p>}
        </button>

        <button
          onClick={() => navigate("../announcement", "announcement")}
          className={`flex flex-row items-center gap-x-2 rounded-xl ${
            activeButton === "announcement"
              ? "bg-[#E1E8FF] bg-opacity-80"
              : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
          }`}
        >
          <Image
            height={0}
            width={0}
            src="../icons/announcement_icon.svg"
            alt="announcement"
            className={`h-14 w-auto ${isHovered ? "h-14 w-auto" : "mx-auto"}`}
          />
          {isHovered && (
            <p className="text-[#002147] text-[16px]">Announcements</p>
          )}
        </button>

        <button
          onClick={() => navigate("../settings", "settings")}
          className={`flex flex-row items-center gap-x-2 rounded-xl ${
            activeButton === "settings"
              ? "bg-[#E1E8FF] bg-opacity-80"
              : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
          }`}
        >
          <Image
            height={0}
            width={0}
            src="../icons/settings.svg"
            alt="settings"
            className={`h-14 w-auto ${isHovered ? "h-14 w-auto" : "mx-auto"}`}
          />
          {isHovered && <p className="text-[#002147] text-[16px]">Settings</p>}
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
          className={`w-full flex flex-row items-center gap-x-2 rounded-xl`}
        >
          <Image
            width={0}
            height={0}
            src="../icons/logout-icon.svg"
            alt="logout"
            className={`h-14 w-auto ${isHovered ? "h-14 w-auto" : "mx-auto"}`}
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

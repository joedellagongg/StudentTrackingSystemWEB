"use client";
import React from "react";
import AdminProfile from "./admin_profile";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidenav() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("dashboard");

  const navigate = (path, button) => {
    router.push(path);
    setActiveButton(button);
  };
  return (
    <div className=" relative w-[25%] h-full bg-[#FFFFFF] rounded-2xl overflow-y-scroll no-scrollbar">
      <div className=" p-4 w-full flex justify-center items-center border-b-2">
        <img src="./logo/logo.svg" className=" h-20" />
      </div>

      <AdminProfile />

      <div className=" flex flex-col p-4 gap-y-2">
        <button
          onClick={() => navigate("../admin", "admin")}
          className={`flex flex-row items-center gap-x-4 rounded-xl p-2 ${
            activeButton === "admin"
              ? "bg-[#E1E8FF] bg-opacity-80"
              : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
          }`}
        >
          <img src="./icons/dashboard-icon.svg" className=" h-10" />
          <p className=" text-[#002147] text-[16px]">Dashboard</p>
        </button>

        <button
          onClick={() => navigate("../top-up", "top-up")}
          className={`flex flex-row items-center gap-x-4 rounded-xl p-2 ${
            activeButton === "top-up"
              ? "bg-[#E1E8FF] bg-opacity-80"
              : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
          }`}
        >
          <img src="./icons/top-up-icon.svg" className=" h-10" />
          <p className=" text-[#002147] text-[16px]">Top Up</p>
        </button>

        <button className="  w-full flex flex-row items-center gap-x-4 rounded-xl p-2">
          <img src="./icons/logout-icon.svg" />
          <p className=" text-red-500">Log Out</p>
        </button>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { useState } from "react";
import StudentProfile from "../../components/studProfile";
import Schedule from "../../components/schedule";
import DateTime from "../../components/time&date";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("dashboard");

  const navigate = (path, button) => {
    router.push(path);
    setActiveButton(button);
  };

  return (
    <main className=" bg-[#E1E8FF] h-screen w-screen p-4 flex flex-row">
      {/* side bar */}
      <div className=" relative w-[20%] h-full bg-[#FFFFFF] rounded-2xl overflow-y-scroll no-scrollbar">
        <div className=" p-4 w-full flex justify-center items-center border-b-2">
          <img src="./logo/logo.svg" className=" h-20" />
        </div>

        <StudentProfile />

        <div className=" flex flex-col p-4 gap-y-2">
          <button
            onClick={() => navigate("../dashboard", "dashboard")}
            className={`flex flex-row items-center gap-x-4 rounded-xl p-2 ${
              activeButton === "dashboard"
                ? "bg-[#E1E8FF] bg-opacity-80"
                : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
            }`}
          >
            <img src="./icons/dashboard-icon.svg" />
            <p className=" text-[#002147] text-[16px]">Dashboard</p>
          </button>
          <button
            onClick={() => navigate("../profile", "profile")}
            className={`flex flex-row items-center gap-x-4 rounded-xl p-2 ${
              activeButton === "profile"
                ? "bg-[#E1E8FF] bg-opacity-80"
                : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
            }`}
          >
            <img src="./icons/profile-icon.svg" />
            <p className=" text-[#002147] text-[16px]">Profile</p>
          </button>
          <button
            onClick={() => navigate("../digital_id", "digital_id")}
            className={`flex flex-row items-center gap-x-4 rounded-xl p-2 ${
              activeButton === "digital_id"
                ? "bg-[#E1E8FF] bg-opacity-80"
                : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
            }`}
          >
            <img src="./icons/id-icon.svg" />
            <p className=" text-[#002147] text-[16px]">Digital ID</p>
          </button>

          <button className="  w-full flex flex-row items-center gap-x-4 rounded-xl p-2">
            <img src="./icons/logout-icon.svg" />
            <p className=" text-red-500">Log Out</p>
          </button>
        </div>
      </div>

      {/* landing page */}
      {children}

      {/* schedules */}
      <div className="w-[20%] h-full flex flex-col gap-y-4">
        <div className=" p-4 h-[30%] w-full bg-[#FFFFFF] rounded-2xl flex flex-col justify-center items-center gap-y-2">
          <DateTime />
        </div>
        <div className="w-full h-full bg-[#FFFFFF] rounded-2xl p-4 overflow-y-scroll no-scrollbar">
          <p className=" text-[#002147] text-[22px] p-2">Schedule</p>
          <div className=" w-full flex flex-col justify-center gap-y-2 no-scrollbar overflow-y-scroll">
            <Schedule />
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";
import React from "react";
import { useState } from "react";
import AdminProfile from "../../components/(admin-side)/admin_profile";
import Schedule from "../../components/(student-dashboard)/schedule";
import DateTime from "../../components/time&date";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("announcement");

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

        <AdminProfile />

        <div className=" flex flex-col p-4 gap-y-2">
          <button
            onClick={() => navigate("../announcement", "announcement")}
            className={`flex flex-row items-center gap-x-4 rounded-xl p-2 ${
              activeButton === "announcement"
                ? "bg-[#E1E8FF] bg-opacity-80"
                : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
            }`}
          >
            <img src="./icons/announcement_icon.svg" />
            <p className=" text-[#002147] text-[16px]">Announcements</p>
          </button>

          <button className="  w-full flex flex-row items-center gap-x-4 rounded-xl p-2">
            <img src="./icons/logout-icon.svg" />
            <p className=" text-red-500">Log Out</p>
          </button>
        </div>
      </div>

      <div className=" flex flex-col w-[80%]">
        {/* datetime */}
      <div className=" pl-4 w-full h-[15%] flex flex-row items-center justify-between gap-y-4">
        <h1 className=" text-[45px]">Hello, Admin</h1>
        <div className=" p-4 w-[25%] h-full bg-[#FFFFFF] rounded-2xl flex flex-col justify-center items-center gap-y-2">
          <DateTime />
        </div>
      </div>

      {/* landing page */}
      {children}
      </div>
      
    </main>
  );
}

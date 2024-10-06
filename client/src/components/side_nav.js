"use client";
import React from "react";
import AdminProfile from "./admin_profile";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidenav() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("admin");

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
          onClick={() => navigate("../student_info", "sudent_info")}
          className={`flex flex-row items-center gap-x-4 rounded-xl p-2 ${
            activeButton === "sudent_info"
              ? "bg-[#E1E8FF] bg-opacity-80"
              : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
          }`}
        >
          <img src="./icons/records-icon.svg" />
          <p className=" text-[#002147] text-[16px]">Student Information</p>
        </button>

        <button
          onClick={() => navigate("../student_records", "student_records")}
          className={`flex flex-row items-center gap-x-4 rounded-xl p-2 ${
            activeButton === "student_records"
              ? "bg-[#E1E8FF] bg-opacity-80"
              : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
          }`}
        >
          <img src="./icons/records-icon.svg" />
          <p className=" text-[#002147] text-[16px]">Student Records</p>
        </button>

        <button
          onClick={() =>
            navigate("../student_transactions", "student_transactions")
          }
          className={`flex flex-row items-center gap-x-4 rounded-xl p-2 ${
            activeButton === "student_transactions"
              ? "bg-[#E1E8FF] bg-opacity-80"
              : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
          }`}
        >
          <img src="./icons/records-icon.svg" />
          <p className=" text-[#002147] text-[16px]">Student Transactions</p>
        </button>

        <button className="  w-full flex flex-row items-center gap-x-4 rounded-xl p-2">
          <img src="./icons/logout-icon.svg" />
          <p className=" text-red-500">Log Out</p>
        </button>
      </div>
    </div>
  );
}

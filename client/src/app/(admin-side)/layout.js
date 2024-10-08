"use client";
import React from "react";
import DateTime from "../../components/time&date";
import SideNav from "../../components/side_nav";

export default function DashboardLayout({ children }) {
  return (
    <main className=" bg-[#E1E8FF] h-screen w-screen p-4 gap-4 flex flex-row">
      {/* side bar */}
      <SideNav />

      <div className=" flex flex-col w-[75%]">
        {/* datetime */}
        <div className=" pl-4 w-full h-[15%] flex flex-row items-center justify-between gap-y-4 mb-4">
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

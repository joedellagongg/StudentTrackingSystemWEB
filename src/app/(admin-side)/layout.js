"use client";
import React from "react";
import SideNav from "../../components/side_nav";

export default function DashboardLayout({ children }) {
  return (
    <main className=" bg-[#E1E8FF] h-screen w-screen p-4 gap-4 flex flex-row">
      {/* side bar */}
      <SideNav />

      <div className=" flex flex-col w-full">
        {/* landing page */}
        {children}
      </div>
    </main>
  );
}

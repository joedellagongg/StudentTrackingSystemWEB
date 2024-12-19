"use client";
import React from "react";
import SideNav from "../../components/side_nav";
import MobileSideNav from "../../components/mobileSideNav";

export default function DashboardLayout({ children }) {
  return (
    <main className=" bg-[#E1E8FF] h-screen w-screen p-4 gap-4 flex flex-col md:flex-row ">
      {/* side bar */}
      <SideNav />
      <MobileSideNav />

      <div className=" flex flex-col w-full h-full">
        {/* landing page */}
        {children}
      </div>
    </main>
  );
}

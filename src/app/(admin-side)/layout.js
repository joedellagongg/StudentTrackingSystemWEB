"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import SideNav from "../../components/side_nav";
import MobileSideNav from "../../components/mobileSideNav";
import Cookies from "js-cookie";

export default function DashboardLayout({ children }) {
  const router = useRouter(); // ✅ Correct way to use router

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.replace("/admin"); // ✅ Correct navigation
    }
  }, [router]);

  return (
    <main className=" bg-[#E1E8FF] h-screen w-screen p-4 gap-4 flex flex-col lg:flex-row ">
      {/* side bar */}
      <SideNav />
      <MobileSideNav />

      <div className=" flex flex-col w-full h-[90%] lg:h-full">
        {/* landing page */}
        {children}
      </div>
    </main>
  );
}

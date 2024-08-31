"use client"
import React from "react";
import StudentProfile from "../../components/studProfile";
import Schedule from "../../components/schedule";
import DateTime from "../../components/time&date";
import { useRouter } from 'next/navigation'

export default function DashboardLayout({children}){

    const router = useRouter()

    const navigate = (path) => {
        router.push(path)
    }
    return (
        <main className=" bg-[#E1E8FF] h-screen w-screen p-4 flex flex-row">
      {/* side bar */}
      <div className=" w-[20%] h-full bg-[#FFFFFF] rounded-2xl">
        <div className=" p-4 w-full flex justify-center items-center border-b-2">
          <img src="./logo/logo.svg" className=" h-20" />
        </div>

        <StudentProfile />

        <div className=" flex flex-col p-4">
          <button onClick={() => navigate('../dashboard')} className=" flex flex-row items-center gap-x-4 hover:bg-[#E1E8FF] rounded-xl p-2">
            <img src="./icons/dashboard-icon.svg" />
            <p className=" text-[#002147] text-[16px]">Dashboard</p>
          </button>
          <button onClick={() => navigate('../profile')} className=" flex flex-row items-center gap-x-4 hover:bg-[#E1E8FF] rounded-xl p-2">
            <img src="./icons/profile-icon.svg" />
            <p className=" text-[#002147] text-[16px]">Profile</p>
          </button>
          <button className=" flex flex-row items-center gap-x-4 hover:bg-[#E1E8FF] rounded-xl p-2">
            <img src="./icons/id-icon.svg" />
            <p className=" text-[#002147] text-[16px]">Digital ID</p>
          </button>
        </div>
      </div>

      {/* landing page */}
      {children}

      {/* schedules */}
      <div className="w-[20%] h-full flex flex-col gap-y-4">
        <div className=" h-[30%] w-full bg-[#FFFFFF] rounded-2xl flex flex-col justify-center items-center gap-y-2">
          <DateTime />
        </div>
        <div className="w-full h-full bg-[#FFFFFF] rounded-2xl p-4">
          <p className=" text-[#002147] text-[22px] p-2">Schedule</p>
          <div className=" w-full flex flex-col justify-center gap-y-2 no-scrollbar overflow-y-scroll">
            <Schedule />
          </div>
        </div>
      </div>
    </main>
      );

}
    
  
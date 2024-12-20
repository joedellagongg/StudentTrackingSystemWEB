"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Logout from "@/components/logout";

export default function MobileSideNav() {
  const router = useRouter();
  const [sideModal, setSideModal] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const adminProfile = [
    {
      profilePic: "./images/profile.svg",
      adminName: "Admin",
    },
  ];

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
    setSideModal(false);
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
    <div className="lg:hidden w-full h-[10%] flex justify-between items-center bg-white rounded-xl px-2">
      <Image
        priority={true}
        width={0}
        height={0}
        onClick={() => navigate("../dashboard", "dashboard")}
        src="./logo/logo.svg"
        alt="logo"
        className="h-[80%] w-auto lg:hidden"
      />
      <button onClick={() => setSideModal(true)} className="lg:hidden">
        <Image
          width={0}
          height={0}
          src="./icons/hamburger.svg"
          alt="hamburger icon"
          className="w-12 h-12"
        />
      </button>

      {sideModal && (
        <div className="fixed inset-0 flex justify-end bg-black bg-opacity-50 z-50">
          <div className="bg-white w-[70%] h-full p-2 overflow-y-scroll">
            <div className="w-full h-12 flex justify-end items-center">
              <button
                onClick={() => setSideModal(false)}
                className="font-bold text-3xl"
              >
                X
              </button>
            </div>
            {adminProfile.map((item, index) => (
              <div
                key={index}
                className="w-full flex flex-row items-center gap-x-4"
              >
                <Image
                  src={item.profilePic}
                  alt="profile"
                  width={0}
                  height={0}
                  className="h-16 w-auto"
                />
                <strong className="text-xl">{item.adminName}</strong>
              </div>
            ))}

            <div className=" mt-4">
              <button
                onClick={() => navigate("../dashboard", "dashboard")}
                className={`flex flex-row items-center gap-x-2 rounded-xl w-full ${
                  activeButton === "dashboard"
                    ? "bg-[#E1E8FF] bg-opacity-80"
                    : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
                }`}
              >
                <Image
                  width={0}
                  height={0}
                  src="./icons/dashboard-icon.svg"
                  alt="dashboard"
                  className="h-14 w-auto"
                />
                <p className="text-[#002147] text-[16px]">Dashboard</p>
              </button>
              <button
                onClick={() => navigate("../section", "section")}
                className={`flex flex-row items-center gap-x-2 pl-2 rounded-xl w-full ${
                  activeButton === "section"
                    ? "bg-[#E1E8FF] bg-opacity-80"
                    : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
                }`}
              >
                <Image
                  width={0}
                  height={0}
                  src="./icons/section.svg"
                  alt="section"
                  className="h-14 w-auto"
                />
                <p className="text-[#002147] text-[16px]">Sections</p>
              </button>
              <button
                onClick={() => navigate("../canteen", "canteen")}
                className={`flex flex-row items-center gap-x-2 rounded-xl w-full ${
                  activeButton === "canteen"
                    ? "bg-[#E1E8FF] bg-opacity-80"
                    : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
                }`}
              >
                <Image
                  width={0}
                  height={0}
                  src="./icons/canteen.svg"
                  alt="canteen"
                  className="h-14 w-auto"
                />
                <p className="text-[#002147] text-[16px]">Canteen</p>
              </button>

              <button
                onClick={() => navigate("../top-up", "top-up")}
                className={`flex flex-row items-center gap-x-2 rounded-xl w-full ${
                  activeButton === "top-up"
                    ? "bg-[#E1E8FF] bg-opacity-80"
                    : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
                }`}
              >
                <Image
                  width={0}
                  height={0}
                  src="./icons/top-up-icon.svg"
                  alt="top up"
                  className="h-14 w-auto"
                />
                <p className="text-[#002147] text-[16px]">Top Up</p>
              </button>

              <button
                onClick={() => navigate("../announcement", "announcement")}
                className={`flex flex-row items-center gap-x-2 rounded-xl w-full ${
                  activeButton === "announcement"
                    ? "bg-[#E1E8FF] bg-opacity-80"
                    : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
                }`}
              >
                <Image
                  height={0}
                  width={0}
                  src="./icons/announcement_icon.svg"
                  alt="announcement"
                  className="h-14 w-auto"
                />
                <p className="text-[#002147] text-[16px]">Announcements</p>
              </button>

              <button
                onClick={() => navigate("../settings", "settings")}
                className={`flex flex-row items-center gap-x-2 rounded-xl w-full ${
                  activeButton === "settings"
                    ? "bg-[#E1E8FF] bg-opacity-80"
                    : "hover:bg-[#E1E8FF] hover:bg-opacity-50"
                }`}
              >
                <Image
                  height={0}
                  width={0}
                  src="./icons/settings.svg"
                  alt="settings"
                  className="h-14 w-auto"
                />
                <p className="text-[#002147] text-[16px]">Settings</p>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                className="w-full flex flex-row items-center gap-x-2 rounded-xl"
              >
                <Image
                  width={0}
                  height={0}
                  src="./icons/logout-icon.svg"
                  alt="logout"
                  className="h-14 w-auto"
                />
                <p className="text-red-500">Log Out</p>
              </button>
            </div>

            <Logout
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onConfirm={handleLogout}
            />
          </div>
        </div>
      )}
    </div>
  );
}
